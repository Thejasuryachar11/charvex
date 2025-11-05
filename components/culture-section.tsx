"use client"

import { motion } from "framer-motion"
import { Users, Lightbulb, TrendingUp, Heart } from "lucide-react"
import { containerVariants, slideUpVariants, bounceInVariants } from "@/lib/animations"

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We encourage creative thinking and bold ideas that drive progress.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Together we achieve more through teamwork and shared expertise.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description: "Continuous learning and professional development opportunities.",
  },
  {
    icon: Heart,
    title: "Excellence",
    description: "We're committed to delivering the highest quality in everything we do.",
  },
]

export function CultureSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5 relative overflow-hidden">
      <motion.div
        className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        animate={{
          x: [0, 40, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideUpVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4">Our Culture</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            We believe in creating an environment where talented individuals can thrive and make an impact.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={index}
                variants={bounceInVariants}
                className="p-6 bg-background rounded-xl border border-border hover:border-accent/50 transition-all duration-300 group relative overflow-hidden perspective"
                whileHover={{ y: -10, rotateX: 8, scale: 1.05 }}
                style={{ perspective: "1000px" }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ opacity: [0, 0.1, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: index * 0.2 }}
                />

                <div className="relative z-10">
                  <motion.div
                    className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.15, 1],
                    }}
                    transition={{
                      rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                      scale: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                    }}
                  >
                    <Icon className="w-6 h-6 text-accent" />
                  </motion.div>
                  <h3 className="text-lg font-heading font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-foreground/70">{value.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
