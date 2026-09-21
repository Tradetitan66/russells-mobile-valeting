export type Faq = {
  id: string;
  question: string;
  answer: string;
  /** When true, answer is editable placeholder pending client confirmation */
  isPlaceholder?: boolean;
};

export const faqs: Faq[] = [
  {
    id: "home",
    question: "Do you come to my home?",
    answer:
      "Yes. Russell's Mobile Valeting is a fully mobile service. Appointments can be arranged at your home or workplace across Livingston, West Lothian, Edinburgh and surrounding parts of central Scotland.",
  },
  {
    id: "equipment",
    question: "Do you provide your own equipment?",
    answer:
      "Yes. The service arrives with the equipment needed to complete your valet or detailing appointment. Specific requirements for your property (for example water or power access) can be confirmed when you request a quote.",
    isPlaceholder: true,
  },
  {
    id: "areas",
    question: "What areas do you cover?",
    answer:
      "Based in Livingston and serving customers throughout West Lothian, Edinburgh and surrounding parts of central Scotland — including Bathgate, Broxburn, Linlithgow and nearby towns.",
  },
  {
    id: "duration",
    question: "How long does a valet take?",
    answer:
      "Timing depends on the service, vehicle size and condition. A maintenance valet is typically shorter than a full valet, interior deep clean or detailing. Exact timing will be confirmed when you discuss your vehicle.",
    isPlaceholder: true,
  },
  {
    id: "plans",
    question: "Do you offer regular maintenance plans?",
    answer:
      "Yes. Maintenance plans can be arranged for regular scheduled vehicle care so you do not need to book from scratch each time. Frequency and package details can be tailored when you get in touch.",
    isPlaceholder: true,
  },
  {
    id: "ceramic",
    question: "Do you offer ceramic coatings?",
    answer:
      "Yes. Ceramic protection options are available for customers looking for longer-lasting paint protection and easier maintenance. Product choices and suitability for your vehicle are discussed on enquiry — without overstated claims.",
  },
  {
    id: "quote",
    question: "How do I get a quote?",
    answer:
      "Use the quote form on this website, message via WhatsApp, or call Russell directly on 07508 717655. Share your vehicle make, model, location and the service you need for a clear recommendation.",
  },
  {
    id: "work",
    question: "Can you valet my car while I'm at work?",
    answer:
      "Yes. Workplace appointments can be arranged where suitable access is available. Include your workplace location and preferred times when requesting a quote.",
  },
];
