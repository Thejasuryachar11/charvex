"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { slideUpVariants } from "@/lib/animations"

const projects = [
  {
    id: 1,
    title: "Nexar Cloud",
    category: "Cloud Infrastructure",
    description: "Enterprise cloud platform with advanced analytics and real-time monitoring capabilities.",
    technologies: ["AWS", "React", "Node.js", "PostgreSQL"],
    impact: "40% reduction in infrastructure costs",
    bgImage: "url(/placeholder.svg?height=500&width=800&query=cloud infrastructure technology blue gradient)",
  },
  {
    id: 2,
    title: "VistaAI",
    category: "AI & Machine Learning",
    description: "Intelligent data analysis platform powered by machine learning algorithms.",
    technologies: ["Python", "TensorFlow", "React", "FastAPI"],
    impact: "95% accuracy in predictions",
    bgImage: "url(/placeholder.svg?height=500&width=800&query=artificial intelligence neural network visualization)",
  },
  {
    id: 3,
    title: "Omnify Web",
    category: "Web Development",
    description: "High-performance e-commerce platform with seamless user experience.",
    technologies: ["Next.js", "TypeScript", "Stripe", "Vercel"],
    impact: "3x increase in conversion rate",
    bgImage: "url(/placeholder.svg?height=500&width=800&query=modern web development interface design)",
  },
  {
    id: 4,
    title: "DataPulse",
    category: "Business Intelligence",
    description: "Real-time business intelligence dashboard for data-driven decision making.",
    technologies: ["React", "D3.js", "Node.js", "MongoDB"],
    impact: "50% faster insights generation",
    bgImage: "url(/placeholder.svg?height=500&width=800&query=data analytics dashboard visualization)",
  },
  {
  id: 5,
  title: "Syntra ERP",
  category: "Enterprise Resource Planning",
  description: "Integrated ERP system streamlining operations across finance, HR, and supply chain for mid-sized enterprises.",
  technologies: ["React", "Spring Boot", "PostgreSQL", "Docker"],
  impact: "60% boost in operational efficiency",
  bgImage: "url(/placeholder.svg?height=500&width=800&query=erp management dashboard enterprise systems)",
},
{
  id: 6,
  title: "InnovaX",
  category: "AI Automation",
  description: "Intelligent process automation suite leveraging AI bots and NLP to optimize repetitive workflows.",
  technologies: ["Python", "OpenAI API", "FastAPI", "Redis"],
  impact: "70% reduction in manual processing time",
  bgImage: "url(/placeholder.svg?height=500&width=800&query=ai automation robots digital workplace)",
},
{
  id: 7,
  title: "AuraCX",
  category: "Customer Experience",
  description: "Omnichannel customer engagement platform offering personalization through data-driven insights.",
  technologies: ["Next.js", "Node.js", "GraphQL", "AWS Lambda"],
  impact: "2.5x increase in customer retention",
  bgImage: "url(/placeholder.svg?height=500&width=800&query=customer experience analytics interface)",
},
{
  id: 8,
  title: "FinEdge",
  category: "Financial Analytics",
  description: "Predictive finance analytics engine for real-time budget forecasting and anomaly detection.",
  technologies: ["Python", "Pandas", "Power BI", "Azure"],
  impact: "30% improvement in forecast accuracy",
  bgImage: "url(/placeholder.svg?height=500&width=800&query=financial analytics dashboard charts)",
},
{
  id: 9,
  title: "VisionFlow",
  category: "Computer Vision",
  description: "AI-powered image recognition platform designed for retail analytics and quality inspection.",
  technologies: ["PyTorch", "React", "Flask", "TensorFlow"],
  impact: "85% reduction in defect identification time",
  bgImage: "url(/placeholder.svg?height=500&width=800&query=computer vision ai retail technology)",
},
{
  id: 10,
  title: "Corelytics",
  category: "Data Engineering",
  description: "Data pipeline architecture enabling scalable data ingestion and transformation for big data analytics.",
  technologies: ["Apache Kafka", "Snowflake", "Python", "Airflow"],
  impact: "5x faster data processing speed",
  bgImage: "url(/placeholder.svg?height=500&width=800&query=data engineering pipelines cloud architecture)",
},
{
  id: 11,
  title: "PulseTrack",
  category: "Healthcare Tech",
  description: "Patient monitoring platform integrating IoT devices and real-time data analytics for hospitals.",
  technologies: ["React Native", "Node.js", "IoT Core", "MongoDB"],
  impact: "40% improvement in patient response time",
  bgImage: "url(/placeholder.svg?height=500&width=800&query=healthcare technology iot patient monitoring)",
},
{
  id: 12,
  title: "EcoSphere",
  category: "Sustainability & ESG",
  description: "Analytics-driven ESG reporting solution helping enterprises measure and reduce carbon footprint.",
  technologies: ["Django", "React", "Tableau", "AWS"],
  impact: "25% reduction in energy consumption reports",
  bgImage: "url(/placeholder.svg?height=500&width=800&query=sustainability data analytics environment dashboard)",
},
{
  id: 13,
  title: "StratIQ",
  category: "Business Consulting",
  description: "AI-assisted business strategy suite providing predictive insights and competitive market analysis.",
  technologies: ["Python", "Streamlit", "OpenAI API", "GCP"],
  impact: "2x faster strategic decision cycles",
  bgImage: "url(/placeholder.svg?height=500&width=800&query=business strategy ai analytics consulting)",
},
{
  id: 14,
  title: "NeuraChat",
  category: "Conversational AI",
  description: "Advanced chatbot framework integrating NLP and contextual memory for enterprise support automation.",
  technologies: ["Next.js", "FastAPI", "LangChain", "Pinecone"],
  impact: "80% reduction in customer service response time",
  bgImage: "url(/placeholder.svg?height=500&width=800&query=conversational ai chatbot ui nlp)",
},

]

export function ProjectsCarousel() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((current + 1) % projects.length)
  const prev = () => setCurrent((current - 1 + projects.length) % projects.length)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideUpVariants}
          className="relative"
        >
          <div className="relative h-96 sm:h-[500px] rounded-2xl overflow-hidden bg-secondary/5 border border-border perspective group">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 200, rotateY: 90, rotateZ: 20 }}
                animate={{ opacity: 1, x: 0, rotateY: 0, rotateZ: 0 }}
                exit={{ opacity: 0, x: -200, rotateY: -90, rotateZ: -20 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute inset-0 p-8 sm:p-12 flex flex-col justify-between"
                style={{ perspective: "1200px" }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: projects[current].bgImage,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      opacity: { duration: 4, repeat: Number.POSITIVE_INFINITY },
                      scale: { duration: 5, repeat: Number.POSITIVE_INFINITY },
                    }}
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  <motion.div
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="px-3 py-1 bg-accent/20 text-accent text-sm font-semibold rounded-full backdrop-blur-sm">
                      {projects[current].category}
                    </span>
                  </motion.div>

                  <motion.h2
                    className="text-4xl sm:text-5xl font-heading font-bold text-foreground"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {projects[current].title}
                  </motion.h2>

                  <motion.p
                    className="text-lg text-foreground/70 max-w-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {projects[current].description}
                  </motion.p>
                </div>

                {/* Footer */}
                <div className="relative z-10 space-y-4">
                  <motion.div
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {projects[current].technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        className="px-3 py-1 bg-background/80 border border-border rounded-full text-sm backdrop-blur-sm"
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  <motion.div
                    className="flex items-center justify-between"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="text-foreground/70">
                      <p className="text-sm">Business Impact</p>
                      <p className="text-lg font-semibold text-accent">{projects[current].impact}</p>
                    </div>
                    <motion.button
                      className="p-3 bg-accent text-accent-foreground rounded-full hover:bg-accent/90 transition-colors"
                      whileHover={{ scale: 1.15, rotate: 15 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={20} />
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {projects.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all ${index === current ? "bg-accent w-8" : "bg-border w-2"}`}
                  whileHover={{ scale: 1.3 }}
                  animate={{
                    width: index === current ? 32 : 8,
                    boxShadow: index === current ? "0 0 20px rgba(255, 107, 0, 0.6)" : "none",
                  }}
                />
              ))}
            </div>

            <div className="flex gap-4">
              <motion.button
                onClick={prev}
                className="p-3 bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/90 transition-colors"
                whileHover={{ scale: 1.15, x: -8, rotateZ: -10 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft size={20} />
              </motion.button>
              <motion.button
                onClick={next}
                className="p-3 bg-accent text-accent-foreground rounded-full hover:bg-accent/90 transition-colors"
                whileHover={{ scale: 1.15, x: 8, rotateZ: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>
          </div>

          {/* Project Counter */}
          <motion.div className="text-center mt-8 text-foreground/70" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <p>
              Project {current + 1} of {projects.length}
            </p>
          </motion.div>
        </motion.div>

        {/* All Projects Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideUpVariants}
          className="mt-20"
        >
          <h3 className="text-3xl font-heading font-bold text-foreground mb-8">All Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -8, rotateX: 5, scale: 1.02 }}
                className="p-6 bg-card border border-border rounded-xl hover:border-accent/50 transition-all duration-300 relative overflow-hidden group perspective"
                style={{ perspective: "1000px" }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ opacity: [0, 0.1, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: index * 0.2 }}
                />

                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-3">
                    {project.category}
                  </span>
                  <h4 className="text-xl font-heading font-bold text-foreground mb-2">{project.title}</h4>
                  <p className="text-foreground/70 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded"
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
