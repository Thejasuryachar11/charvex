"use client"

import { motion } from "framer-motion"
import { slideUpVariants, rotateInVariants } from "@/lib/animations"

export function AboutHero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url(/placeholder.svg?height=1080&width=1920&query=corporate office building modern architecture with blue lighting)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/85 via-background/80 to-background/85" />
      </div>

      {/* Floating Accent Blurs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        animate={{
          x: [0, 40, 0],
          y: [0, 60, 0],
          scale: [1, 1.2, 1],
          rotateZ: [0, 180, 360],
        }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, -60, 0],
          scale: [1, 1.2, 1],
          rotateZ: [360, 180, 0],
        }}
        transition={{ duration: 14, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
      />

      
      {/* Content */}
<div className="max-w-4xl mx-auto text-center relative z-10 py-16">
  <motion.div
    initial="hidden"
    animate="visible"
    variants={slideUpVariants}
    className="space-y-6"
  >
    <motion.h1
      className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-tight"
      variants={rotateInVariants}
      style={{ perspective: "1000px" }}
    >
      About <span className="text-accent">Charvex Global</span>
    </motion.h1>

    <motion.p
      className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed text-justify"
      variants={slideUpVariants}
    >
      Founded by <span className="font-semibold text-foreground">Theja Suryachar P J</span>, Charvex Global is a
      forward-thinking IT consulting and technology services company committed to helping businesses achieve
      digital excellence. We specialize in delivering custom software development, cloud solutions, and strategic
      technology consulting designed to accelerate growth, enhance efficiency, and empower innovation.
    </motion.p>
  </motion.div>
</div>
    </section>
  )
}
