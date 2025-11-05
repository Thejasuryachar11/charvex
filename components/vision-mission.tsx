"use client"

import { motion } from "framer-motion"
import { flipInVariants } from "@/lib/animations"

export function VisionMission() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden perspective">
      <div className="absolute inset-0 z-0 opacity-20">
        <div
          style={{
            backgroundImage:
              "url(/placeholder.svg?height=600&width=1200&query=abstract geometric pattern with tech elements)",
            backgroundSize: "300px 300px",
            backgroundPosition: "0 0",
          }}
          className="absolute inset-0"
        />
        <motion.div
          className="absolute inset-0"
          animate={{ backgroundPosition: ["0 0", "300px 300px"] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          style={{
            backgroundImage:
              "url(/placeholder.svg?height=600&width=1200&query=abstract geometric pattern with tech elements)",
            backgroundSize: "300px 300px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Vision */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={flipInVariants}
            className="space-y-4 p-8 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-accent/30 transition-all group relative overflow-hidden"
            whileHover={{ rotateY: 5, scale: 1.02 }}
            style={{ perspective: "1000px" }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={{ opacity: [0, 0.1, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            />

            <div className="relative z-10">
              <h2 className="text-3xl font-heading font-bold text-foreground">Our Vision</h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                To be the trusted partner for enterprises seeking transformative technology solutions that unlock new
                possibilities and drive sustainable growth in the digital age.
              </p>
              <div className="pt-4 space-y-3">
                {[
                  "Innovation at the core of everything we do",
                  "Client success is our ultimate measure",
                  "Excellence in every project delivery",
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-3"
                    whileHover={{ x: 8 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: idx * 0.2 }}
                    />
                    <p className="text-foreground/70">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={flipInVariants}
            className="space-y-4 p-8 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-accent/30 transition-all group relative overflow-hidden"
            whileHover={{ rotateY: -5, scale: 1.02 }}
            style={{ perspective: "1000px" }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={{ opacity: [0, 0.1, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
            />

            <div className="relative z-10">
              <h2 className="text-3xl font-heading font-bold text-foreground">Our Mission</h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                To empower businesses with cutting-edge technology solutions, expert consulting, and strategic guidance
                that accelerate digital transformation and create lasting competitive advantages.
              </p>
              <div className="pt-4 space-y-3">
                {[
                  "Deliver measurable business impact",
                  "Build long-term partnerships with clients",
                  "Foster a culture of continuous learning",
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-3"
                    whileHover={{ x: 8 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: idx * 0.2 }}
                    />
                    <p className="text-foreground/70">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
