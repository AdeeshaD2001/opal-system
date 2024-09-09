import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const response = await axios.post(
      "http://localhost:5005/webhooks/rest/webhook",
      body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error communicating with Rasa server:", error);
    return NextResponse.json(
      { error: "Failed to communicate with Rasa server" },
      { status: 500 }
    );
  }
}

export function OPTIONS() {
  return NextResponse.json({}, { status: 204 });
}
