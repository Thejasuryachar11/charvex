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

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", company: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-15">
        <div
          style={{
            backgroundImage:
              "url(/placeholder.svg?height=800&width=1600&query=communication network digital connection)",
            backgroundSize: "400px 400px",
            backgroundPosition: "0 0",
          }}
          className="absolute inset-0"
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center justify-center text-center">
        {/* Contact Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideUpVariants}
          className="space-y-4 mb-10"
        >

        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
          {/* Email */}
          <motion.div
            className="flex items-start gap-4 p-6 rounded-xl bg-card/50 border border-border/50 hover:border-[#FF6B00]/40 transition-all"
            whileHover={{ y: -4 }}
          >
            <div className="w-12 h-12 bg-[#FF6B00]/10 rounded-lg flex items-center justify-center">
              <Mail className="w-6 h-6 text-[#FF6B00]" />
            </div>
            <div className="text-left">
              <h3 className="font-heading font-bold text-foreground mb-1">Email</h3>
              <p>
                <a href="mailto:info@charvex.com" className="text-foreground/70 hover:text-[#FF6B00] transition-colors">
                  info@charvex.com
                </a>
              </p>
              <p>
                <a href="mailto:hr@charvex.com" className="text-foreground/70 hover:text-[#FF6B00] transition-colors">
                  hr@charvex.com
                </a>
              </p>
            </div>
          </motion.div>

          {/* Phone / WhatsApp */}
          <motion.div
            className="flex items-start gap-4 p-6 rounded-xl bg-card/50 border border-border/50 hover:border-[#FF6B00]/40 transition-all"
            whileHover={{ y: -4 }}
          >
            <div className="w-12 h-12 bg-[#FF6B00]/10 rounded-lg flex items-center justify-center">
              <Phone className="w-6 h-6 text-[#FF6B00]" />
            </div>
            <div className="text-left">
              <h3 className="font-heading font-bold text-foreground mb-1">Phone / WhatsApp</h3>
              <p>
                <a href="tel:+919482350233" className="text-foreground/70 hover:text-[#FF6B00] transition-colors">
                  +91 94823 50233
                </a>
              </p>
              <p>
                <a
                  href="https://wa.me/919482350233?text=Hello%20Charvex%20Team!%20I%27m%20interested%20in%20learning%20more%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-[#FF6B00] transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </p>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            className="flex items-start gap-4 p-6 rounded-xl bg-card/50 border border-border/50 hover:border-[#FF6B00]/40 transition-all"
            whileHover={{ y: -4 }}
          >
            <div className="w-12 h-12 bg-[#FF6B00]/10 rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-[#FF6B00]" />
            </div>
            <div className="text-left">
              <h3 className="font-heading font-bold text-foreground mb-1">Office</h3>
              <p className="text-foreground/70">Bangalore, India</p>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          className="flex gap-5 mt-10 justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideUpVariants}
        >
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/company/charvex"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#FF6B00] hover:scale-110 transition-all"
          >
            <Linkedin size={22} />
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/charvex.in"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#FF6B00] hover:scale-110 transition-all"
          >
            <Instagram size={22} />
          </a>

          {/* Mail */}
          <a
            href="mailto:info@charvex.com"
            className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#FF6B00] hover:scale-110 transition-all"
          >
            <Mail size={22} />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919482350233?text=Hello%20Charvex%20Team!%20I%27m%20interested%20in%20learning%20more%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#FF6B00] hover:scale-110 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-5 h-5">
              <path d="M380.9 97.1C339 55.14 283.2 32 224 32 100.3 32 0 132.3 0 256c0 45 11.7 88.7 34 127L0 480l99.4-33.6C136.5 466.3 179.3 480 224 480c123.7 0 224-100.3 224-224 0-59.2-23.1-115-67.1-158.9zM224 438c-40.9 0-81.1-11.6-115.6-33.5l-8.3-5.3-59 19.9 19.6-57.6-5.4-8.4C36.7 318.8 25 287.9 25 256 25 143.7 111.7 57 224 57c59.4 0 115.3 23.1 157.6 65.4S447 196.6 447 256c0 112.3-86.7 199-223 182z" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
