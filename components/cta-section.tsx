"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Mail, Phone } from "lucide-react"
import { slideUpVariants } from "@/lib/animations"

export function CTASection() {
  const [showContact, setShowContact] = useState(false)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* CTA box */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideUpVariants}
          className="bg-gradient-to-r from-secondary to-secondary/80 rounded-2xl p-12 sm:p-16 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-secondary-foreground mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-secondary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how Charvex Solutions can help you achieve your technology goals.
          </p>

          <button
            onClick={() => setShowContact((prev) => !prev)}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors"
          >
            Start Your Journey
            <ArrowRight size={20} />
          </button>
        </motion.div>

        {/* Contact info appears below CTA when clicked */}
        {showContact && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-10 text-center space-y-6"
          >
            <div className="flex flex-col items-center justify-center gap-4">
              {/* Email */}
              <a
                href="mailto:hr@charvex.com"
                className="flex items-center gap-3 bg-card/50 border border-border/50 rounded-lg p-4 max-w-sm w-full justify-center hover:border-accent/50 transition-all"
              >
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-foreground/80 font-medium hover:text-accent transition-colors">
                  hr@charvex.com
                </span>
              </a>

              {/* Phone */}
              <a
                href="tel:+919482350233"
                className="flex items-center gap-3 bg-card/50 border border-border/50 rounded-lg p-4 max-w-sm w-full justify-center hover:border-accent/50 transition-all"
              >
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-foreground/80 font-medium hover:text-accent transition-colors">
                  +91 94823 50233
                </span>
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
