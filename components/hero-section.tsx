"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { slideUpVariants, rotateInVariants } from "@/lib/animations"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [text, setText] = useState("")
  const fullText =
    "Charvex delivers cutting-edge IT consulting, AI-powered solutions, and enterprise infrastructure to drive your digital transformation."

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) clearInterval(interval)
    }, 25)
    return () => clearInterval(interval)
  }, [])

  const paragraphVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
    }),
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Layer */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url(/placeholder.svg?height=1080&width=1920&query=futuristic tech digital gradient background blue orange)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/70 to-background/80" />
      </div>

      {/* Foreground Content */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div initial="hidden" animate="visible" variants={slideUpVariants} className="space-y-6">
          {/* Hero Title */}
<motion.h1
  className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-center text-foreground leading-tight tracking-tight"
  variants={rotateInVariants}
>
  {/* Line 1 */}
  <motion.span
    className="block"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    Transform Your Business
  </motion.span>

  {/* Line 2 */}
  <motion.span
    className="block"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.2 }}
  >
    with <span className="text-[#FF6B00]">Enterprise</span>
  </motion.span>

  {/* Line 3 */}
  <motion.span
    className="block"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }}
  >
    <span className="text-[#FF6B00]">Technology.</span>
  </motion.span>
</motion.h1>



          {/* Typewriter Tagline */}
          <motion.p
            className="text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed mt-4"
            variants={slideUpVariants}
          >
            {text}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-[8px] bg-foreground/60 h-5 ml-1"
            />
          </motion.p>

          

          {/* CTA Buttons */}
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center pt-8" variants={slideUpVariants}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FF6B00] text-white font-semibold rounded-lg hover:bg-[#e65f00] transition-colors shadow-md"
              >
                Get Started
                <ArrowRight size={20} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#FF6B00] text-[#FF6B00] font-semibold rounded-lg hover:bg-[#FF6B00]/10 transition-colors"
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating Background Orbs */}
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-[#FF6B00]/10 rounded-full blur-3xl"
          animate={{
            y: [0, 40, 0],
            x: [0, 20, 0],
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"
          animate={{
            y: [0, -40, 0],
            x: [0, -20, 0],
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      {/* WHO / WHY / WHAT Section */}
      <div className="relative z-10 mt-24 w-full pb-20">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideUpVariants}
        >
          {[
            {
              title: "Who We Are",
              desc: "Charvex is a next-generation technology company focused on building digital ecosystems powered by AI, cloud, and intelligent design.",
            },
            {
              title: "Why We Exist",
              desc: "We exist to help businesses achieve clarity and control through innovative technology solutions that transform challenges into opportunities.",
            },
            {
              title: "What We Do",
              desc: "From web engineering to AI & data platforms, we deliver end-to-end solutions that enable enterprises to scale, optimize, and innovate faster.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="p-8 bg-card/40 backdrop-blur-md border border-border/30 rounded-2xl shadow-lg transition-all duration-500 relative group"
              whileHover={{
                rotateY: i === 0 ? 5 : i === 2 ? -5 : 0,
                rotateX: 5,
                scale: 1.08,
                boxShadow: "0px 0px 40px rgba(255,107,0,0.3)",
              }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
              style={{ perspective: "1000px" }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-transparent via-[#FF6B00]/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-opacity duration-500"
              />
              <h3 className="text-2xl font-heading font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-foreground/70 text-base leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
