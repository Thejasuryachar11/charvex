"use client"

import { motion } from "framer-motion"

/* ---------------- ANIMATIONS ---------------- */

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.12, duration: 0.5 },
  }),
}

/* ---------------- COMPONENT ---------------- */

export function VisionMission() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(/placeholder.svg?height=600&width=1200&query=abstract geometric tech pattern)",
            backgroundSize: "300px 300px",
          }}
          animate={{ backgroundPosition: ["0 0", "300px 300px"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Vision */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ y: -6 }}
            className="p-8 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-accent/40 transition-all relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 hover:opacity-100 transition-opacity"
            />

            <div className="relative z-10 space-y-4">
              <h2 className="text-3xl font-heading font-bold text-foreground">
                Our Vision
              </h2>

              <p className="text-lg text-foreground/70 leading-relaxed">
                To be the trusted partner for enterprises seeking transformative
                technology solutions that unlock new possibilities and drive
                sustainable growth in the digital age.
              </p>

              <div className="pt-4 space-y-3">
                {[
                  "Innovation at the core of everything we do",
                  "Client success is our ultimate measure",
                  "Excellence in every project delivery",
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    custom={idx}
                    variants={listItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <motion.span
                      className="w-2 h-2 bg-accent rounded-full mt-2"
                      animate={{ scale: [1, 1.4, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <p className="text-foreground/70">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ y: -6 }}
            className="p-8 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-accent/40 transition-all relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 hover:opacity-100 transition-opacity"
            />

            <div className="relative z-10 space-y-4">
              <h2 className="text-3xl font-heading font-bold text-foreground">
                Our Mission
              </h2>

              <p className="text-lg text-foreground/70 leading-relaxed">
                To empower businesses with cutting-edge technology solutions,
                expert consulting, and strategic guidance that accelerate digital
                transformation and create lasting competitive advantages.
              </p>

              <div className="pt-4 space-y-3">
                {[
                  "Deliver measurable business impact",
                  "Build long-term partnerships with clients",
                  "Foster a culture of continuous learning",
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    custom={idx}
                    variants={listItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <motion.span
                      className="w-2 h-2 bg-accent rounded-full mt-2"
                      animate={{ scale: [1, 1.4, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
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
