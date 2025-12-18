"use client"

import { motion } from "framer-motion"
import {
  Code2,
  Brain,
  Database,
  Cloud,
  Briefcase,
  Zap,
  ShieldCheck,
  Palette,
  Workflow,
} from "lucide-react"
import { containerVariants, slideUpVariants, bounceInVariants } from "@/lib/animations"

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Modern, scalable web applications built with cutting-edge technologies.",
  },
  
  
  {
    icon: Database,
    title: "ERP Systems",
    description: "Enterprise resource planning solutions for streamlined operations.",
  },
  {
  icon: Brain,
  title: "Machine Learning",
  description: "Intelligent models that learn from data to predict, optimize, and automate processes.",
},

  // {
  //   icon: Cloud,
  //   title: "Cloud Solutions",
  //   description: "Secure, scalable cloud infrastructure and migration services.",
  // },
  // {
  //   icon: Briefcase,
  //   title: "Business Consulting",
  //   description: "Strategic guidance for digital transformation and growth.",
  // },
  // {
  //   icon: Zap,
  //   title: "Performance Optimization",
  //   description: "Maximize efficiency and reduce costs with our optimization services.",
  // },
  // {
  //   icon: ShieldCheck,
  //   title: "Cybersecurity & Compliance",
  //   description: "Comprehensive protection and regulatory readiness for your enterprise systems.",
  // },
  {
    icon: Palette,
    title: "UI/UX Design & Branding",
    description: "Design-led innovation that enhances engagement and reflects your brand identity.",
  },
  {
    icon: Brain,
    title: "AI & Data Science",
    description: "Intelligent solutions powered by machine learning and advanced analytics.",
  },
  {
    icon: Workflow,
    title: "Automation & DevOps",
    description: "Streamlined development pipelines and automated workflows for faster delivery.",
  },
]

export function ServicesOverview() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Subtle Animated Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div
          style={{
            backgroundImage:
              "url(/placeholder.svg?height=800&width=1600&query=futuristic tech network background)",
            backgroundSize: "400px 400px",
            backgroundPosition: "center",
          }}
          className="absolute inset-0 animate-pulse"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideUpVariants}
          className="mb-16 space-y-4"
        >
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground">
            Our <span className="text-[#FF6B00]">Services</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Empowering businesses through cutting-edge digital solutions — from scalable web platforms to AI, DevOps, and cybersecurity excellence.
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={bounceInVariants}
                whileHover={{ y: -8, scale: 1.03, rotateX: 3 }}
                transition={{ type: "spring", stiffness: 150, damping: 12 }}
                className="relative p-8 bg-card/50 backdrop-blur-sm border border-border/40 rounded-2xl shadow-md hover:shadow-[0_0_30px_rgba(255,107,0,0.15)] transition-all overflow-hidden group"
              >
                {/* Hover Accent Glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-transparent via-[#FF6B00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ opacity: [0, 0.1, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                />

                {/* Icon + Text */}
                <div className="relative z-10">
                  <motion.div
                    className="w-14 h-14 mx-auto bg-[#FF6B00]/10 rounded-xl flex items-center justify-center mb-5"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  >
                    <Icon className="w-7 h-7 text-[#FF6B00]" />
                  </motion.div>
                  <h3 className="text-2xl font-heading font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 text-base">{service.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
