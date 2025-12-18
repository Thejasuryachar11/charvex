"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ArrowRight, X } from "lucide-react"
import { slideUpVariants } from "@/lib/animations"

/* ---------------- DATA ---------------- */

const jobOpenings = [
  // Web Development
  { id: 1, title: "Frontend Engineer" },
  { id: 2, title: "Backend Engineer" },
  { id: 3, title: "Full Stack Engineer" },

  // ERP Systems
  { id: 4, title: "ERP Consultant" },
  { id: 5, title: "ERP Developer" },

  // Machine Learning
  { id: 6, title: "Machine Learning Engineer" },

  // UI/UX Design
  { id: 7, title: "UI/UX Designer" },

  // AI & Data Science
  { id: 8, title: "AI Engineer" },
  { id: 9, title: "Data Scientist" },

  // Automation & DevOps
  { id: 10, title: "DevOps Engineer" },
  { id: 11, title: "Automation Engineer" },
]


const internships = [
  // Web Development
  { id: 1, title: "Web Development Internship" },

  // ERP Systems
  { id: 2, title: "ERP Systems Internship" },

  // Machine Learning
  { id: 3, title: "Machine Learning Internship" },

  // UI/UX Design
  { id: 4, title: "UI/UX Design Internship" },

  // AI & Data Science
  { id: 5, title: "AI & Data Science Internship" },

  // Automation & DevOps
  { id: 6, title: "DevOps & Automation Internship" },
]


/* ---------------- COMPONENT ---------------- */

export function JobListings() {
  const [activeTab, setActiveTab] = useState<"jobs" | "internships">("jobs")
  const [showModal, setShowModal] = useState(false)
  const [currentRole, setCurrentRole] = useState("")
  const [formType, setFormType] = useState<"job" | "internship">("job")

  /* ---------- MAIL HANDLER ---------- */
  const handleMailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const data = new FormData(form)

    const to =
      formType === "job"
        ? "hr@charvexglobal.com"
        : "hr@charvexglobal.com,info@charvexglobal.com"

    const subject = `Application for ${currentRole}`

    const bodyLines: string[] = [
      `Role: ${currentRole}`,
      ``,
      `Name: ${data.get("Name")}`,
      `Email: ${data.get("Email")}`,
    ]

    if (formType === "job") {
      bodyLines.push(`Phone: ${data.get("Phone")}`)
      bodyLines.push(`Current Role / Status: ${data.get("CurrentRole")}`)
      bodyLines.push(`Total Experience: ${data.get("TotalExp")} years`)
      bodyLines.push(`Relevant Experience: ${data.get("RelevantExp")} years`)
      bodyLines.push(`Primary Skills: ${data.get("PrimarySkills")}`)
      bodyLines.push(`Tech Stack / Tools: ${data.get("TechStack")}`)
      bodyLines.push(`Portfolio / GitHub / LinkedIn: ${data.get("Portfolio")}`)
      bodyLines.push(`Notice Period: ${data.get("NoticePeriod")}`)
      bodyLines.push(`Preferred Work Type: ${data.get("WorkType")}`)
      bodyLines.push(`Current Location: ${data.get("Location")}`)
      bodyLines.push(`Expected CTC: ${data.get("CTC") || "Not specified"}`)
    }

    if (formType === "internship") {
      bodyLines.push(`College: ${data.get("College")}`)
      bodyLines.push(`Branch: ${data.get("Branch")}`)
      bodyLines.push(`Year of Study: ${data.get("Year")}`)
      bodyLines.push(`CGPA: ${data.get("CGPA")}`)
      bodyLines.push(`Availability Duration: ${data.get("Duration")}`)
    }

    bodyLines.push(``)
    bodyLines.push(`IMPORTANT:`)
    bodyLines.push(`Please attach your resume to this email before sending.`)

    const mailtoUrl = `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`

    window.open(mailtoUrl, "_blank")
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
          <button
            onClick={() => setActiveTab("jobs")}
            className={`px-6 py-2 rounded-lg font-semibold ${
              activeTab === "jobs" ? "bg-accent text-accent-foreground" : "bg-muted"
            }`}
          >
            Job Openings
          </button>

          <button
            onClick={() => setActiveTab("internships")}
            className={`px-6 py-2 rounded-lg font-semibold ${
              activeTab === "internships"
                ? "bg-accent text-accent-foreground"
                : "bg-muted"
            }`}
          >
            Internships
          </button>
        </div>

        {/* LISTINGS */}
        {(activeTab === "jobs" ? jobOpenings : internships).map((item) => (
          <motion.div
            key={item.id}
            variants={slideUpVariants}
            className="p-6 bg-card border rounded-xl flex justify-between items-center mb-4"
          >
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

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white w-full max-w-md rounded-xl p-6 relative max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute right-4 top-4 text-gray-500"
            >
              <X />
            </button>

            <h3 className="text-2xl font-bold mb-2">
              Apply for {currentRole}
            </h3>

            <p className="text-sm text-gray-500 mb-4">
              Fill the form below. Your email client will open — attach your resume before sending.
            </p>

            {/* FORM */}
            <form onSubmit={handleMailSubmit} className="space-y-4">
              <input required name="Name" placeholder="Full Name" className="w-full border rounded-lg px-4 py-2" />
              <input required name="Email" type="email" placeholder="Email" className="w-full border rounded-lg px-4 py-2" />

              {formType === "job" && (
                <>
                  <input required name="Phone" placeholder="Phone Number" className="w-full border rounded-lg px-4 py-2" />
                  <input required name="CurrentRole" placeholder="Current Role / Status" className="w-full border rounded-lg px-4 py-2" />
                  <input required name="TotalExp" placeholder="Total Experience (Years)" className="w-full border rounded-lg px-4 py-2" />
                  <input required name="RelevantExp" placeholder="Relevant Experience (Years)" className="w-full border rounded-lg px-4 py-2" />
                  <input required name="PrimarySkills" placeholder="Primary Skills" className="w-full border rounded-lg px-4 py-2" />
                  <input required name="TechStack" placeholder="Tech Stack / Tools" className="w-full border rounded-lg px-4 py-2" />
                  <input required name="Portfolio" placeholder="Portfolio / GitHub / LinkedIn URL" className="w-full border rounded-lg px-4 py-2" />
                  <input required name="NoticePeriod" placeholder="Notice Period" className="w-full border rounded-lg px-4 py-2" />
                  <input required name="WorkType" placeholder="Preferred Work Type" className="w-full border rounded-lg px-4 py-2" />
                  <input required name="Location" placeholder="Current Location" className="w-full border rounded-lg px-4 py-2" />
                  <input name="CTC" placeholder="Expected CTC (Optional)" className="w-full border rounded-lg px-4 py-2" />
                </>
              )}

              {formType === "internship" && (
                <>
                  <input required name="College" placeholder="College / University" className="w-full border rounded-lg px-4 py-2" />
                  <input required name="Branch" placeholder="Branch" className="w-full border rounded-lg px-4 py-2" />
                  <input required name="Year" placeholder="Year of Study" className="w-full border rounded-lg px-4 py-2" />
                  <input required name="CGPA" placeholder="CGPA" className="w-full border rounded-lg px-4 py-2" />
                  <input required name="Duration" placeholder="Availability Duration" className="w-full border rounded-lg px-4 py-2" />
                </>
              )}

              <button
                type="submit"
                className="w-full bg-accent text-accent-foreground py-2 rounded-lg font-semibold"
              >
                Submit Application
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </section>
  )
}
