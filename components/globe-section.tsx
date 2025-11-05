"use client"

import { motion } from "framer-motion"
import { slideUpVariants } from "@/lib/animations"

export function GlobeSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden perspective">
      <div className="absolute inset-0 z-0 opacity-20">
        <div
          style={{
            backgroundImage: "url(/placeholder.svg?height=800&width=1600&query=world map global network connections)",
            backgroundSize: "600px 600px",
            backgroundPosition: "0 0",
          }}
          className="absolute inset-0"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Globe Placeholder */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideUpVariants}
            className="flex justify-center perspective"
            style={{ perspective: "1200px" }}
          >
            <div className="relative w-80 h-80 flex items-center justify-center">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent/30 to-secondary/20 rounded-full"
                animate={{
                  rotate: 360,
                  scale: [1, 1.08, 1],
                  boxShadow: [
                    "0 0 40px rgba(255, 107, 0, 0.3)",
                    "0 0 60px rgba(255, 107, 0, 0.6)",
                    "0 0 40px rgba(255, 107, 0, 0.3)",
                  ],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  scale: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  boxShadow: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                }}
              />
              <motion.div
                className="absolute inset-4 border-2 border-accent/40 rounded-full"
                animate={{
                  rotate: -360,
                  scale: [1, 0.95, 1],
                }}
                transition={{
                  rotate: { duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  scale: { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                }}
              />
              <motion.div
                className="absolute inset-8 border border-secondary/40 rounded-full"
                animate={{
                  rotate: 360,
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  rotate: { duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  opacity: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                }}
              />
              <motion.div
                className="absolute inset-12 border-2 border-dashed border-accent/30 rounded-full"
                animate={{
                  rotate: -180,
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  rotate: { duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  scale: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                }}
              />
              <motion.div
                className="relative z-10 text-center"
                animate={{
                  y: [0, 15, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  className="text-6xl font-heading font-bold text-accent mb-2"
                  animate={{ rotateZ: [0, 360] }}
                  transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  🌍
                </motion.div>
                <p className="text-foreground font-semibold">Global Reach</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideUpVariants}
            className="space-y-6"
          >
            <h2 className="text-4xl font-heading font-bold text-foreground">Global Presence, Local Expertise</h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              With a distributed team and global network of partners, we deliver world-class solutions tailored to your
              local market needs.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: "🚀",
                  title: "Innovation Hub",
                  desc: "Cutting-edge technology and forward-thinking solutions",
                },
                {
                  icon: "🤝",
                  title: "Strategic Partnerships",
                  desc: "Collaborating with industry leaders worldwide",
                },
                {
                  icon: "⚡",
                  title: "24/7 Support",
                  desc: "Round-the-clock assistance across all time zones",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-border/50 hover:border-accent/30 transition-all group"
                  whileHover={{ x: 8, scale: 1.02 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 text-2xl"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-foreground/70">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
