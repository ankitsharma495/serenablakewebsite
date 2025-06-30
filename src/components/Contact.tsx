"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"
import { sendContactEmail } from "../actions/send-email"
import { motion } from "framer-motion"

interface FormData {
  name: string
  phone: string
  email: string
  reason: string
  preferredTime: string
  agreeToContact: boolean
}

interface FormErrors {
  name?: string
  phone?: string
  email?: string
  reason?: string
  preferredTime?: string
  agreeToContact?: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    reason: "",
    preferredTime: "",
    agreeToContact: false,
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!/^[\d\s\-()#+.]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.reason.trim()) {
      newErrors.reason = "Please tell us what brings you here"
    }

    if (!formData.preferredTime.trim()) {
      newErrors.preferredTime = "Preferred contact time is required"
    }

    if (!formData.agreeToContact) {
      newErrors.agreeToContact = "You must agree to be contacted"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const result = await sendContactEmail({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        reason: formData.reason,
        preferredTime: formData.preferredTime,
      })

      if (result.success) {
        setIsSubmitted(true)
        setSubmitMessage(result.message)
        // Reset form
        setFormData({
          name: "",
          phone: "",
          email: "",
          reason: "",
          preferredTime: "",
          agreeToContact: false,
        })
      } else {
        setSubmitMessage("There was an error sending your message. Please try again.")
      }
    } catch (error) {
      setSubmitMessage("There was an error sending your message. Please try again. "+ {error})
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-green-20 border border-green-50 rounded-lg p-8 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-2xl font-bold font-serif mb-4 text-[#40403e]">Thank You!</h2>
            <p className="text-[#40403e] mb-4">{submitMessage}</p>
            <p className="text-[#40403e] mb-6">Dr. Blake will get back to you within 1-2 business days.</p>
            <button
              onClick={() => {
                setIsSubmitted(false)
                setSubmitMessage("")
              }}
              className="text-[#40403e] hover:underline font-semibold"
            >
              Send another message
            </button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-20 px-4">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light font-serif mb-6">Contact Information</h2>
          <div className="w-16 h-1 bg-[#40403e] mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-light font-serif mb-2">Dr. Serena Blake, Ph.D</h3>
              <p className="text-lg text-gray-600">Licensed Clinical Psychologist</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-[#7e7e6b] mr-4 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:serena@blakepsychology.com" className="text-[#7e7e6b] hover:underline">
                    serena@blakepsychology.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <Phone className="w-6 h-6 text-[#7e7e6b] mr-4 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href="tel:+13235550192" className="text-[#7e7e6b] hover:underline">
                    (323) 555-0192
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-[#7e7e6b] mr-4 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-gray-700">
                    1287 Maplewood Drive
                    <br />
                    Los Angeles, CA 90026
                  </p>
                </div>
              </div>

              <div className="bg-[#F5F2ED] p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Office Hours:</h4>
                <div className="text-sm space-y-1">
                  <p>
                    <strong>In-person:</strong> Tue & Thu, 10 AM–6 PM
                  </p>
                  <p>
                    <strong>Virtual via Zoom:</strong> Mon, Wed & Fri, 1 PM–5 PM
                  </p>
                </div>
              </div>

              <div className="bg-[#F5F2ED] p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Experience:</h4>
                <p className="text-sm text-gray-700">8 years of practice, 500+ sessions</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-light font-serif mb-6">Get in Touch</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7e7e6b] ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Your full name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7e7e6b] ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Your phone number"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7e7e6b] ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="reason" className="block text-sm font-semibold text-gray-700 mb-2">
                  What brings you here? *
                </label>
                <textarea
                  id="reason"
                  rows={4}
                  value={formData.reason}
                  onChange={(e) => handleInputChange("reason", e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7e7e6b] resize-vertical ${
                    errors.reason ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Please share what you're looking for in therapy..."
                />
                {errors.reason && <p className="text-red-500 text-sm mt-1">{errors.reason}</p>}
              </div>

              <div>
                <label htmlFor="preferredTime" className="block text-sm font-semibold text-gray-700 mb-2">
                  Preferred time to reach you *
                </label>
                <input
                  type="text"
                  id="preferredTime"
                  value={formData.preferredTime}
                  onChange={(e) => handleInputChange("preferredTime", e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7e7e6b] ${
                    errors.preferredTime ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="e.g., Weekday mornings, evenings after 6pm"
                />
                {errors.preferredTime && <p className="text-red-500 text-sm mt-1">{errors.preferredTime}</p>}
              </div>

              <div>
                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    checked={formData.agreeToContact}
                    onChange={(e) => handleInputChange("agreeToContact", e.target.checked)}
                    className={`mt-1 w-4 h-4 text-[#7FB069] border-2 rounded focus:ring-[#7e7e6b] ${
                      errors.agreeToContact ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  <span className="text-sm text-gray-700">
                    I agree to be contacted by Dr. Blake regarding my inquiry. *
                  </span>
                </label>
                {errors.agreeToContact && <p className="text-red-500 text-sm mt-1">{errors.agreeToContact}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#94b0b0] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#94b0a5] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
