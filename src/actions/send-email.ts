"use server"

interface ContactFormData {
  name: string
  phone: string
  email: string
  reason: string
  preferredTime: string
}

export async function sendContactEmail(formData: ContactFormData) {
  try {
    const emailContent = `
New Contact Form Submission

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Preferred Contact Time: ${formData.preferredTime}

What brings them here:
${formData.reason}
`.trim()

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer re_gu3uW2Ka_5Ymrh2Aq6r5Kn6siLFmk1Y1D`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev", // ✅ verified “from”
        to: ["ankitsharmaa0709@gmail.com"],
        subject: `New Contact Form Submission - ${formData.name}`,
        text: emailContent,
        html: emailContent.replaceAll("\n", "<br>"),
      }),
    })

    const resText = await response.text()
    if (!response.ok) {
      console.error("Resend error:", resText)
      throw new Error(resText)
    }

    return { success: true, message: "Email sent successfully!" }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, message: "There was an error sending your email. Please try again later." }
  }
}
