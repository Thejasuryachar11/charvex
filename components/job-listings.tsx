"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ArrowRight, X } from "lucide-react"
import { slideUpVariants } from "@/lib/animations"

/* ---------------- DATA ---------------- */

const jobOpenings = [
  { id: 1, title: "Frontend Engineer" },
  { id: 2, title: "Backend Engineer" },
  { id: 3, title: "Full Stack Engineer" },
  { id: 4, title: "ERP Consultant" },
  { id: 5, title: "ERP Developer" },
  { id: 6, title: "Machine Learning Engineer" },
  { id: 7, title: "UI/UX Designer" },
  { id: 8, title: "AI Engineer" },
  { id: 9, title: "Data Scientist" },
  { id: 10, title: "DevOps Engineer" },
  { id: 11, title: "Automation Engineer" },
]

const internships = [
  { id: 1, title: "Web Development Internship" },
  { id: 2, title: "ERP Systems Internship" },
  { id: 3, title: "Machine Learning Internship" },
  { id: 4, title: "UI/UX Design Internship" },
  { id: 5, title: "AI & Data Science Internship" },
  { id: 6, title: "DevOps & Automation Internship" },
]

/* ---------------- COMPONENT ---------------- */

export function JobListings() {
  const [activeTab, setActiveTab] = useState<"jobs" | "internships">("jobs")
  const [showModal, setShowModal] = useState(false)
  const [currentRole, setCurrentRole] = useState("")
  const [formType, setFormType] = useState<"job" | "internship">("job")

  /* ---------- SAFE MAIL OPEN ---------- */
  const openMailClient = (mailtoUrl: string) => {
    const a = document.createElement("a")
    a.href = mailtoUrl
    a.style.display = "none"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  /* ---------- MAIL HANDLER ---------- */
  const handleMailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data = new FormData(e.currentTarget)

    const to =
      formType === "job"
        ? "hr@charvexglobal.com"
        : "hr@charvexglobal.com,info@charvexglobal.com"

    const subject = `Application for ${currentRole}`

    const body: string[] = [
      `Role: ${currentRole}`,
      ``,
      `Name: ${data.get("Name")}`,
      `Email: ${data.get("Email")}`,
    ]

    if (formType === "job") {
      body.push(
        `Phone: ${data.get("Phone")}`,
        `Current Role / Status: ${data.get("CurrentRole")}`,
        `Total Experience: ${data.get("TotalExp")} years`,
        `Relevant Experience: ${data.get("RelevantExp")} years`,
        `Primary Skills: ${data.get("PrimarySkills")}`,
        `Tech Stack / Tools: ${data.get("TechStack")}`,
        `Portfolio: ${data.get("Portfolio")}`,
        `Notice Period: ${data.get("NoticePeriod")}`,
        `Preferred Work Type: ${data.get("WorkType")}`,
        `Location: ${data.get("Location")}`,
        `Expected CTC: ${data.get("CTC") || "Not specified"}`
      )
    }

    if (formType === "internship") {
      body.push(
        `College: ${data.get("College")}`,
        `Branch: ${data.get("Branch")}`,
        `Year of Study: ${data.get("Year")}`,
        `CGPA: ${data.get("CGPA")}`,
        `Availability Duration: ${data.get("Duration")}`
      )
    }

    body.push("", "IMPORTANT:", "Please attach your resume before sending.")

    const mailtoUrl = `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body.join("\n"))}`

    openMailClient(mailtoUrl) // ✅ WORKS EVERYWHERE
    setShowModal(false)
  }

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <motion.div
          variants={slideUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Careers at Charvex</h2>
          <p className="text-foreground/70">
            Explore job openings and internship opportunities
          </p>
        </motion.div>

        {/* TABS */}
        <div className="flex justify-center gap-4 mb-12">
          <button onClick={() => setActiveTab("jobs")} className={`px-6 py-2 rounded-lg font-semibold ${activeTab === "jobs" ? "bg-accent text-accent-foreground" : "bg-muted"}`}>
            Job Openings
          </button>
          <button onClick={() => setActiveTab("internships")} className={`px-6 py-2 rounded-lg font-semibold ${activeTab === "internships" ? "bg-accent text-accent-foreground" : "bg-muted"}`}>
            Internships
          </button>
        </div>

        {(activeTab === "jobs" ? jobOpenings : internships).map((item) => (
          <motion.div key={item.id} variants={slideUpVariants} className="p-6 bg-card border rounded-xl flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">{item.title}</h3>
            <button
              onClick={() => {
                setCurrentRole(item.title)
                setFormType(activeTab === "jobs" ? "job" : "internship")
                setShowModal(true)
              }}
              className="flex items-center gap-2 px-5 py-2 bg-accent text-accent-foreground rounded-lg"
            >
              Apply <ArrowRight size={16} />
            </button>
          </motion.div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <motion.div className="bg-white w-full max-w-md rounded-xl p-6 relative max-h-[90vh] overflow-y-auto">
            <button onClick={() => setShowModal(false)} className="absolute right-4 top-4 text-gray-500">
              <X />
            </button>

            <h3 className="text-2xl font-bold mb-4">Apply for {currentRole}</h3>

            <form onSubmit={handleMailSubmit} className="space-y-4">
              <input required name="Name" placeholder="Full Name" className="w-full border rounded-lg px-4 py-2" />
              <input required name="Email" type="email" placeholder="Email" className="w-full border rounded-lg px-4 py-2" />
              <button type="submit" className="w-full bg-accent text-accent-foreground py-2 rounded-lg font-semibold">
                Submit Application
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </section>
  )
}
