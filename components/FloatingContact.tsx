"use client"

import { motion } from "framer-motion"
import { Mail, MessageCircle } from "lucide-react"

export function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-4">

      {/* WhatsApp */}
      <motion.a
        href="https://wa.me/916363485061?text=Hi%20Charvex%20Team,%20I%20would%20like%20to%20connect."
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="group flex items-center gap-3 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg"
      >
        <MessageCircle size={22} />
        <span className="hidden group-hover:block text-sm font-semibold">
          Chat on WhatsApp
        </span>
      </motion.a>

      {/* Email */}
      <motion.a
        href="mailto:info@charvexglobal.com"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="group flex items-center gap-3 bg-[#FF6B00] text-white px-4 py-3 rounded-full shadow-lg"
      >
        <Mail size={22} />
        <span className="hidden group-hover:block text-sm font-semibold">
          Email Us
        </span>
      </motion.a>

    </div>
  )
}
