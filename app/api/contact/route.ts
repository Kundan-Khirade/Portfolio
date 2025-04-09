import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const formData = await request.formData()

    // Forward the form data to formsubmit.co
    const response = await fetch(`https://formsubmit.co/kkhirade25@gmail.com`, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })

    if (!response.ok) {
      return NextResponse.json({ error: "Failed to submit form" }, { status: response.status })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error in contact API route:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
