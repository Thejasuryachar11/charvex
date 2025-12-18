"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { slideUpVariants } from "@/lib/animations"

export function CTASection() {
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

          <p className="text-lg text-secondary-foreground/90 mb-10 max-w-2xl mx-auto">
            Let's discuss how Charvex Global can help you achieve your technology goals.
          </p>

          {/* Redirect to Contact Page */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4
                       bg-accent text-accent-foreground font-semibold rounded-lg
                       hover:bg-accent/90 transition-colors"
          >
            Start Your Journey
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
