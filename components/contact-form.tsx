"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { slideUpVariants } from "@/lib/animations"
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company || "N/A"}

Message:
${formData.message}

IMPORTANT:
Please respond to this enquiry.
    `

    const mailtoUrl = `mailto:info@charvexglobal.com?subject=${encodeURIComponent(
      "New Enquiry from Website"
    )}&body=${encodeURIComponent(body)}`

    window.open(mailtoUrl, "_blank")

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    })
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">

        {/* HEADER */}
        <motion.div
          variants={slideUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-3">Get in Touch</h2>
          <p className="text-foreground/70">
            Have a question or need our services? Make a discovery call with us.
          </p>
        </motion.div>

        {/* CONTACT INFO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          
          {/* Email */}
          <motion.div className="flex gap-4 p-6 rounded-xl bg-card/50 border">
            <Mail className="text-[#FF6B00]" />
            <div>
              <p className="font-bold">Email</p>
              <a
                href="mailto:info@charvexglobal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 block hover:text-[#FF6B00]"
              >
                info@charvexglobal.com
              </a>
              <a
                href="mailto:hr@charvexglobal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 block hover:text-[#FF6B00]"
              >
                hr@charvexglobal.com
              </a>
            </div>
          </motion.div>

          {/* Phone / WhatsApp */}
          <motion.div className="flex gap-4 p-6 rounded-xl bg-card/50 border">
            <Phone className="text-[#FF6B00]" />
            <div>
              <p className="font-bold">Phone / WhatsApp</p>

              <a
                href="https://wa.me/916363485061"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 block hover:text-[#FF6B00]"
              >
                CEO: +91 63634 85061
              </a>

              <a
                href="https://wa.me/919482350233"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 block hover:text-[#FF6B00]"
              >
                Company: +91 94823 50233
              </a>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div className="flex gap-4 p-6 rounded-xl bg-card/50 border">
            <MapPin className="text-[#FF6B00]" />
            <div>
              <p className="font-bold">Office</p>
              <p className="text-foreground/70">Bangalore, India</p>
            </div>
          </motion.div>
        </div>

        {/* ENQUIRY FORM */}
        <motion.form
          onSubmit={handleSubmit}
          variants={slideUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto space-y-4 bg-card/50 border rounded-xl p-6"
        >
          <h3 className="text-2xl font-bold mb-2">Send an Enquiry</h3>

          <input required name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" className="w-full border rounded-lg px-4 py-2" />
          <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full border rounded-lg px-4 py-2" />
          <input required name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="w-full border rounded-lg px-4 py-2" />
          <input name="company" value={formData.company} onChange={handleChange} placeholder="Company (Optional)" className="w-full border rounded-lg px-4 py-2" />
          <textarea required name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows={4} className="w-full border rounded-lg px-4 py-2" />

          <button type="submit" className="w-full bg-[#FF6B00] text-white py-2 rounded-lg font-semibold">
            Send Enquiry
          </button>
        </motion.form>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center gap-5 mt-10">
          <a href="https://linkedin.com/company/charvex" target="_blank" rel="noopener noreferrer">
            <Linkedin />
          </a>
          <a href="https://instagram.com/thecharvex" target="_blank" rel="noopener noreferrer">
            <Instagram />
          </a>
          <a href="mailto:info@charvexglobal.com" target="_blank" rel="noopener noreferrer">
            <Mail />
          </a>
          <a
            href="https://wa.me/919482350233"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Phone />
          </a>
        </div>
      </div>
    </section>
  )
}
