import { NextResponse } from "next/server";

/**
 * Quote API stub.
 * Swap this handler to Formspree, Resend, Supabase, or a custom endpoint later.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();

    const required = [
      "name",
      "mobile",
      "make",
      "model",
      "size",
      "service",
      "location",
    ] as const;

    for (const key of required) {
      if (!body[key] || String(body[key]).trim() === "") {
        return NextResponse.json(
          { ok: false, error: `Missing required field: ${key}` },
          { status: 400 },
        );
      }
    }

    // Development logging — replace with email/CRM integration
    console.log("[quote request]", {
      name: body.name,
      mobile: body.mobile,
      email: body.email || null,
      vehicle: `${body.make} ${body.model}`,
      size: body.size,
      service: body.service,
      location: body.location,
      preferredDate: body.preferredDate || null,
      message: body.message || null,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request" },
      { status: 400 },
    );
  }
}
