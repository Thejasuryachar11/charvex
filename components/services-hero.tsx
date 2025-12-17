"use client"

import { motion } from "framer-motion"
import { slideUpVariants, rotateInVariants } from "@/lib/animations"

export function ServicesHero() {
  return (
    <section className="min-h-[70vh] flex flex-col items-center pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-secondary/5 relative overflow-hidden perspective">
      
      {/* Animated background blobs */}
      <motion.div
        className="absolute top-1/4 right-1/3 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1],
          rotateZ: [0, 180, 360],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, -40, 0],
          scale: [1, 1.15, 1],
          rotateZ: [360, 180, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <motion.div initial="hidden" animate="visible" variants={slideUpVariants} className="space-y-8">
          
          {/* Hero Heading */}
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-tight"
            variants={rotateInVariants}
            style={{ perspective: "1000px" }}
          >
            Our <span className="text-accent">Services</span>
          </motion.h1>

          {/* Hero Description */}
          <motion.div className="space-y-6 text-center">
            <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed">
              Charvex  Global offers innovative, end-to-end technology solutions crafted to accelerate digital transformation and empower businesses to achieve sustainable growth. We collaborate with organizations worldwide to deliver tailored, scalable, and impactful solutions that enhance productivity and drive measurable results.
            </p>

            <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed">
              Our team of seasoned professionals combines deep industry expertise with advanced technologies to design solutions that perfectly align with each client’s unique needs. From strategic consulting and software development to AI, cloud computing, and automation, we help businesses stay ahead in a rapidly evolving digital landscape.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
