"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { MapPin, Briefcase, Clock, ArrowRight, Mail } from "lucide-react"
import { containerVariants, slideUpVariants } from "@/lib/animations"

const jobs = [
  {
    id: 1,
    title: "Full Stack Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "3+ years",
    description: "Develop and maintain scalable web applications across the stack.",
    skills: ["React", "Node.js", "TypeScript", "AWS", "GraphQL"],
  },
  {
    id: 2,
    title: "Backend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "4+ years",
    description: "Design APIs, optimize performance, and build robust server-side systems.",
    skills: ["Node.js", "Python", "PostgreSQL", "Docker", "Microservices"],
  },
  {
    id: 3,
    title: "Frontend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "2+ years",
    description: "Build modern, responsive, and high-performing user interfaces.",
    skills: ["React", "Next.js", "HTML", "CSS", "TypeScript"],
  },
  {
    id: 4,
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote",
    type: "Full-time",
    experience: "3+ years",
    description: "Manage deployments, automate pipelines, and ensure system reliability.",
    skills: ["AWS", "Kubernetes", "Docker", "CI/CD", "Terraform"],
  },
  {
    id: 5,
    title: "AI/ML Engineer",
    department: "Data Science",
    location: "Hybrid",
    type: "Full-time",
    experience: "3+ years",
    description: "Develop and deploy machine learning models and AI-driven solutions.",
    skills: ["Python", "TensorFlow", "PyTorch", "Pandas", "Machine Learning"],
  },
  {
    id: 6,
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    experience: "3+ years",
    description: "Create intuitive and visually appealing user experiences.",
    skills: ["Figma", "Design Systems", "User Research", "Prototyping", "Wireframing"],
  },
  {
    id: 7,
    title: "Product Manager",
    department: "Product",
    location: "Remote",
    type: "Full-time",
    experience: "4+ years",
    description: "Define product strategy, manage the roadmap, and lead cross-functional teams.",
    skills: ["Agile", "Scrum", "Analytics", "Roadmapping", "Leadership"],
  },
  {
    id: 8,
    title: "Marketing & Growth Manager",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    experience: "3+ years",
    description: "Drive user acquisition, brand awareness, and marketing campaigns.",
    skills: ["SEO", "Content Marketing", "Google Ads", "Analytics", "Social Media"],
  },
  {
    id: 9,
    title: "Sales & Business Development Executive",
    department: "Sales",
    location: "Hybrid",
    type: "Full-time",
    experience: "2+ years",
    description: "Build partnerships, acquire clients, and increase revenue.",
    skills: ["CRM", "Lead Generation", "Negotiation", "B2B Sales", "Communication"],
  },
  {
    id: 10,
    title: "HR & Talent Acquisition Specialist",
    department: "Operations",
    location: "Remote",
    type: "Full-time",
    experience: "2+ years",
    description: "Recruit top talent, manage onboarding, and nurture company culture.",
    skills: ["Recruitment", "Onboarding", "HR Tools", "Culture Building", "Employee Engagement"],
  },
];



export function JobListings() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [currentJob, setCurrentJob] = useState<any>(null)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUpVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4">Open Positions</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Explore exciting opportunities to grow your career with us.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-4"
        >
          {jobs.map((job) => (
            <motion.div
              key={job.id}
              variants={slideUpVariants}
              onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
              className="cursor-pointer"
            >
              <motion.div
                className="p-6 bg-card border border-border rounded-xl hover:border-accent/50 transition-all duration-300 group relative overflow-hidden"
                whileHover={{ y: -4 }}
              >
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-heading font-bold text-foreground mb-3">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-foreground/70">
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Briefcase size={16} />
                          {job.department}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={16} />
                          {job.type}
                        </div>
                      </div>
                    </div>

                    <motion.button
                      className="px-6 py-2 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation()
                        setCurrentJob(job)
                        setShowModal(true)
                      }}
                    >
                      Apply
                      <ArrowRight size={16} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* 📩 Application Modal */}
      {showModal && currentJob && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white p-8 rounded-xl shadow-xl max-w-md text-center space-y-4"
          >
            <h3 className="text-2xl font-bold text-gray-900">Apply for {currentJob.title}</h3>
            <p className="text-gray-600">
              To apply, send your resume/cover letter to:
            </p>
            <a
              href="mailto:hr@charvexsolutions.in?subject=Application for Position"
              className="inline-flex items-center justify-center gap-2 text-accent font-semibold bg-accent/10 hover:bg-accent/20 rounded-lg px-4 py-2 transition"
            >
              <Mail size={18} /> hr@charvexsolutions.com
            </a>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 text-sm text-gray-500 hover:text-gray-700 transition"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </section>
  )
}
