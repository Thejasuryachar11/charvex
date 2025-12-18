"use client"

import { motion } from "framer-motion"
import {
  Code2,
  Brain,
  Database,
  CheckCircle,
  Palette,
  Settings,
  // ⛔ Removed unused icons to avoid ESLint / build warnings
  // AirVent,
  // Cloud,
  // Briefcase,
  // Zap,
  // ShieldCheck,
} from "lucide-react"
import { containerVariants, slideUpVariants } from "@/lib/animations"

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Modern, scalable web applications built with cutting-edge technologies.",
    features: [
      "React & Next.js applications",
      "Responsive design",
      "Performance optimization",
      "SEO-friendly architecture",
      "Progressive web apps",
    ],
  },
  {
    icon: Database,
    title: "ERP Systems",
    description: "Enterprise resource planning solutions for streamlined operations.",
    features: [
      "System implementation",
      "Process optimization",
      "Data migration",
      "Custom integrations",
      "Training & support",
    ],
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description:
      "Data-driven algorithms that enable systems to predict outcomes and continuously improve performance.",
    features: [
      "Predictive analytics",
      "Recommendation systems",
      "Behavioral analysis",
      "Automation & optimization",
      "Scalable ML pipelines",
    ],
  },

  // 🟡 Cloud & Consulting services kept commented (no change)
  // {
  //   icon: Cloud,
  //   title: "Cloud Solutions",
  //   description: "Secure, scalable cloud infrastructure and migration services.",
  //   features: [
  //     "Cloud migration",
  //     "Infrastructure setup",
  //     "Security & compliance",
  //     "Cost optimization",
  //     "Disaster recovery",
  //   ],
  // },

  {
    icon: Palette,
    title: "UI/UX Design & Branding",
    description:
      "Design-led innovation that enhances engagement and reflects your brand identity.",
    features: [
      "User research & wireframing",
      "Prototyping & testing",
      "Product branding",
      "Design systems",
      "Accessibility & responsiveness",
    ],
  },
  {
    icon: Brain, // ⚠ Same icon as ML (valid, but optional to change later)
    title: "AI & Data Science",
    description:
      "Intelligent solutions powered by machine learning and advanced analytics.",
    features: [
      "Machine learning models",
      "Predictive analytics",
      "Natural language processing",
      "Computer vision solutions",
      "Data-driven insights",
    ],
  },
  {
    icon: Settings,
    title: "Automation & DevOps",
    description:
      "Streamlined development pipelines and automated workflows for faster delivery.",
    features: [
      "CI/CD pipelines",
      "Containerization (Docker, Kubernetes)",
      "Workflow automation",
      "Infrastructure as Code",
      "Monitoring & observability",
    ],
  },
]

export function DetailedServices() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-16"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={service.title} // ✅ better than index (stable key)
                variants={slideUpVariants}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                  isEven ? "" : "md:grid-flow-dense"
                }`}
              >
                {/* Content */}
                <div className={isEven ? "" : "md:col-start-2"}>
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      className="w-16 h-16 bg-[#FF6B00]/10 rounded-xl flex items-center justify-center"
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        rotate: {
                          duration: 20,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        },
                        scale: {
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        },
                      }}
                    >
                      <Icon className="w-8 h-8 text-[#FF6B00]" />
                    </motion.div>
                    <h2 className="text-3xl font-bold text-foreground">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-lg text-foreground/70 mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.05 }}
                      >
                        <CheckCircle className="w-5 h-5 text-[#FF6B00]" />
                        <span className="text-foreground/80">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Visual */}
                <div className={isEven ? "" : "md:col-start-1"}>
                  <motion.div
                    className="relative h-80 bg-gradient-to-br from-[#FF6B00]/10 to-secondary/10 rounded-2xl flex items-center justify-center overflow-hidden"
                    whileHover={{ scale: 1.08, rotateX: 5, rotateY: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#FF6B00]/20 to-secondary/20"
                      animate={{
                        rotate: 360,
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        rotate: {
                          duration: 20,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        },
                        opacity: {
                          duration: 4,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        },
                      }}
                    />
                    <div className="relative z-10 text-center">
                      <Icon className="w-24 h-24 text-[#FF6B00]/40 mx-auto mb-4" />
                      <p className="text-foreground/60 font-semibold">
                        {service.title}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
