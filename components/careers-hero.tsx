"use client"

import { motion } from "framer-motion"
import { slideUpVariants, rotateInVariants } from "@/lib/animations"

export function CareersHero() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-secondary/5 relative overflow-hidden perspective">
      <motion.div
        className="absolute top-1/4 left-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 60, 0],
          scale: [1, 1.2, 1],
          rotateZ: [0, 180, 360],
        }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, -60, 0],
          scale: [1, 1.2, 1],
          rotateZ: [360, 180, 0],
        }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div initial="hidden" animate="visible" variants={slideUpVariants} className="space-y-6">
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-tight"
            variants={rotateInVariants}
            style={{ perspective: "1000px" }}
          >
            Join Our <span className="text-accent">Team</span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed"
            variants={slideUpVariants}
          >
            Be part of a dynamic team of innovators and problem-solvers shaping the future of technology.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
