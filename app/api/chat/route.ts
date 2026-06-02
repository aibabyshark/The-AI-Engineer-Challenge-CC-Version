import { NextRequest } from "next/server";

const GEMINI_BASE = "https://generativelanguage.googleapis.com/v1beta/openai/";
const MODEL = "gemini-2.5-flash";
const SYSTEM_PROMPT = "You are a supportive mental coach.";

export async function POST(req: NextRequest) {
  const key = process.env.GEMINI_API_KEY;
  if (!key) {
    return Response.json(
      { detail: "GEMINI_API_KEY not configured" },
      { status: 500 }
    );
  }

  let message: string;
  try {
    const body = await req.json();
    message = String(body?.message ?? "");
  } catch {
    return Response.json({ detail: "Invalid JSON body" }, { status: 400 });
  }

  if (!message.trim()) {
    return Response.json({ detail: "message is required" }, { status: 400 });
  }

  try {
    const upstream = await fetch(`${GEMINI_BASE}chat/completions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: message },
        ],
      }),
    });

    if (!upstream.ok) {
      const text = await upstream.text();
      return Response.json(
        { detail: `Gemini API error (${upstream.status}): ${text.slice(0, 500)}` },
        { status: 500 }
      );
    }

    const data = await upstream.json();
    const reply: string = data?.choices?.[0]?.message?.content ?? "";
    return Response.json({ reply });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "request failed";
    return Response.json(
      { detail: `Error calling Gemini API: ${msg}` },
      { status: 500 }
    );
  }
}
