"use client";

import React, { useState } from "react";
import { getWhatsAppUrl } from "@/lib/business";

interface PrefillData {
  vehicle?: string;
  location?: string;
}

interface QuoteFormProps {
  onClose?: () => void;
  prefillData?: PrefillData;
}

const QuoteForm = ({ onClose, prefillData = {} }: QuoteFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [vehicle, setVehicle] = useState(prefillData.vehicle || "");
  const [location, setLocation] = useState(prefillData.location || "");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      // Basic validation
      if (!name.trim() || !email.trim() || !phone.trim() || !vehicle.trim() || !location.trim()) {
        setError("Please fill in all fields");
        return;
      }

      // Generate WhatsApp message with form data
      const message = `Hi Russell, I'd like a quote for mobile valeting. My details:
Name: ${name}
Email: ${email}
Phone: ${phone}
Vehicle: ${vehicle}
Location: ${location}`;

      // Open WhatsApp with prefilled message
      const whatsappUrl = getWhatsAppUrl(message);
      const success = window.open(whatsappUrl, "_blank") !== null;

      if (!success) {
        // Fallback if popup is blocked
        setError("Popup blocked. Please allow popups for this site and try again, or copy the link below:");
        // In a real app, you might show the URL to copy
        console.log("WhatsApp URL:", whatsappUrl);
      }

      // Close modal after attempting to open WhatsApp
      if (onClose) {
        setTimeout(() => onClose(), 1000);
      }
    } catch (err) {
      console.error("Error submitting quote form:", err);
      setError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-6 md:p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 id="quote-form-title" className="text-2xl font-bold">
          Get a Quote
        </h2>
        {onClose && (
          <button
            onClick={onClose}
            className="text-muted hover:text-foreground transition-colors"
            aria-label="Close quote form"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>

      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 mb-6" role="alert">
          <p>{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-medium mb-1">
            Name *
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50"
            required
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-medium mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50"
            required
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block font-medium mb-1">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50"
            required
            placeholder="07xxx xxxxxx"
          />
        </div>
        <div>
          <label htmlFor="vehicle" className="block font-medium mb-1">
            Vehicle *
          </label>
          <input
            type="text"
            id="vehicle"
            value={vehicle}
            onChange={(e) => setVehicle(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50"
            required
            placeholder="e.g., BMW 3 Series 2020"
          />
        </div>
        <div>
          <label htmlFor="location" className="block font-medium mb-1">
            Location *
          </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50"
            required
            placeholder="e.g., Livingston, West Lothian"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-accent text-white px-4 py-3 rounded-md hover:bg-accent/90 transition-colors font-medium ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
        >
          {isSubmitting ? "Sending..." : "Get Quote & Open WhatsApp"}
        </button>
      </form>
    </div>
  );
};

export default QuoteForm;