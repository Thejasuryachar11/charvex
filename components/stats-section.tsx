"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { slideUpVariants } from "@/lib/animations"
import { Quote } from "lucide-react"

const stats = [
  { label: "Projects Completed", value: 150, suffix: "+" },
  { label: "Team Members", value: 45, suffix: "+" },
  { label: "Client Satisfaction", value: 98, suffix: "%" },
  { label: "Innovations Delivered", value: 50, suffix: "+" },
]

const testimonials = [
  { name: "Aarav Mehta", feedback: "Charvex truly exceeded expectations. Their creativity and precision stand unmatched." },
  { name: "Sophia Rao", feedback: "The process was smooth and results were beyond what we imagined. Excellent team!" },
  { name: "Rahul Sharma", feedback: "Fantastic experience! They delivered on time and understood our vision perfectly." },
  { name: "Isabella D’Souza", feedback: "Charvex brings energy and innovation to every project. Highly recommended!" },
  { name: "Aditya Verma", feedback: "Their design and tech blend was flawless. We’re already seeing great results." },
  { name: "Priya Nair", feedback: "The professionalism and dedication are top-notch. Great communication all through." },
  { name: "Rohit Agarwal", feedback: "Reliable, visionary, and passionate team. A pleasure working with them!" },
  { name: "Meera Patel", feedback: "Impressed by their ability to merge business logic with cutting-edge tech." },
  { name: "Vikram Iyer", feedback: "The Charvex team is smart, agile, and detail-oriented — a rare combination." },
  { name: "Sneha Kapoor", feedback: "Loved the experience. They made our brand feel fresh and future-ready!" },
]

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let current = 0
    const increment = target / 30
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 50)
    return () => clearInterval(timer)
  }, [target])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Background Orbs */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-foreground/5 rounded-full blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      {/* Stats */}
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideUpVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={slideUpVariants}
              className="text-center p-6 rounded-xl bg-background/10 backdrop-blur-sm border border-secondary-foreground/10 hover:border-secondary-foreground/30 transition-all"
              whileHover={{ scale: 1.08, y: -5 }}
            >
              <motion.div
                className="text-4xl sm:text-5xl font-heading font-bold mb-2 text-accent"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </motion.div>
              <p className="text-secondary-foreground/80">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white text-black mt-24 py-16 relative overflow-hidden">
        <motion.h2
          className="text-3xl sm:text-4xl font-heading font-bold text-center mb-12"
          variants={slideUpVariants}
          initial="hidden"
          whileInView="visible"
        >
          What Our Clients Say
        </motion.h2>

        {/* Continuous Scrolling Row */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-8 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="min-w-[350px] max-w-[350px] p-6 bg-gray-50 border border-gray-200 rounded-2xl shadow-sm flex-shrink-0 hover:shadow-md transition-all"
              >
                <Quote className="w-6 h-6 text-[#FF6B00] mb-4" />
                <p className="text-gray-700 italic mb-4">“{t.feedback}”</p>
                <p className="font-semibold text-gray-900">— {t.name}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
