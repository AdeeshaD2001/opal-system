import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { hotel, userName, email, mealDetails } = await req.json();

    // Process the data (e.g., save to a database or perform some action)

    // Respond with success
    return NextResponse.json(
      { message: "Form submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing form submission:", error);
    return NextResponse.json(
      { message: "Failed to submit the form." },
      { status: 500 }
    );
  }
}
