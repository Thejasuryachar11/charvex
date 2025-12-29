"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { containerVariants, slideUpVariants } from "@/lib/animations"
import { Mail, Linkedin } from "lucide-react"

/* ---------------- TEAM DATA ---------------- */

const team = [
  {
    name: "Yatish P V",
    role: "CEO",
    email: "ceo@charvexglobal.com",
    linkedin:
      "https://www.linkedin.com/in/yatishpv?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    photo: "/yati.jpeg",
  },
  {
    name: "Theja Suryachar P J",
    role: "Founder & CFO",
    email: "info@charvexglobal.com",
    linkedin: "https://linkedin.com/in/thejasuryachar11/",
    photo: "/thejas.jpeg",
  },
  {
    name: "Ebenezer Mathew",
    role: "COO",
    email: "mathew@charvexglobal.com",
    linkedin: "https://www.linkedin.com/in/ebenezer-mathew-32b6521ba/",
  },
  {
    name: "Jeevan",
    role: "CPO",
    email: "jeevan@charvexglobal.com",
    linkedin: "https://www.linkedin.com/in/jeevan-k-157994356/",
  },
  {
    name: "Rahul A G",
    role: "CMO & VP",
    email: "rahul@charvexglobal.com",
    linkedin: "https://www.linkedin.com/in/rahul-a-g-651056241/",
  },
  {
    name: "Mohammed Ahazar",
    role: "CTO",
    email: "mdahazar@charvexglobal.com",
    linkedin: "https://www.linkedin.com/in/mohammed-ahazar-829629266/",
  },
  {
    name: "Chethan H S",
    role: "HR Manager",
    email: "hr@charvexglobal.com",
    linkedin: "https://linkedin.com/in/chethan-h-s-991084310/",
  },
  {
    name: "Abhi M S",
    role: "Head of Engineering",
    email: "abhims@charvexglobal.com",
    linkedin: "https://www.linkedin.com/in/abhi-m-s-9a19a82a4/",
  },
  {
    name: "Siddharth",
    role: "Strategy Lead",
    email: "siddharth@charvexglobal.com",
    linkedin: "https://www.linkedin.com/in/siddharth-kanabargi/",
  },
  {
    name: "Thirumala",
    role: "UI/UX Designer",
    email: "thirumala@charvexglobal.com",
    linkedin: "https://www.linkedin.com/in/thirumala-b066b2266/",
  },
  {
    name: "Kushal Kumar",
    role: "Support Engineer",
    email: "kushal@charvexglobal.com",
    linkedin: "https://www.linkedin.com/in/kushal-kumar-70a8b2266/",
  },
  {
    name: "Abhishek Koli",
    role: "Developer",
    email: "abhishek@charvexglobal.com",
    linkedin: "https://www.linkedin.com/in/abhishek-koli18/",
  },
  {
    name: "Suhas",
    role: "Developer",
    email: "suhas@charvexglobal.com",
    linkedin: "https://www.linkedin.com/in/suhas-developer/",
  },
]

/* ---------------- FILTERS ---------------- */

const leadership = team.filter((m) =>
  ["CEO", "Founder & CFO"].includes(m.role)
)

const roleGroups = {
  Leadership: ["COO", "CTO", "CPO", "CMO & VP"],
  Engineering: ["Head of Engineering", "Developer"],
  Design: ["UI/UX Designer", "Support Engineer"],
  Operations: ["HR Manager", "Strategy Lead"],
}

/* ---------------- SECTION ---------------- */

export function TeamSection() {
  const [showTeam, setShowTeam] = useState(false)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUpVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Our Leadership Team
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Experienced professionals dedicated to your success
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 max-w-3xl mx-auto"
        >
          {leadership.map((member, i) => (
            <TeamCard key={i} member={member} />
          ))}
        </motion.div>

        <div className="text-center mb-16">
          <motion.button
            onClick={() => setShowTeam((v) => !v)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-7 py-3 rounded-full bg-accent text-accent-foreground font-semibold"
          >
            {showTeam ? "View Less" : "Meet Our Team"}
          </motion.button>
        </div>

        {showTeam &&
          Object.entries(roleGroups).map(([group, roles]) => {
            const members = team.filter((m) => roles.includes(m.role))
            if (!members.length) return null

            return (
              <div key={group} className="mb-20">
                <h3 className="text-2xl font-bold text-center mb-10">
                  {group}
                </h3>

                <motion.div
                  variants={containerVariants}
                  className="grid gap-6 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(260px,1fr))]"
                >
                  {members.map((member, i) => (
                    <TeamCard key={i} member={member} />
                  ))}
                </motion.div>
              </div>
            )
          })}
      </div>
    </section>
  )
}

/* ---------------- TEAM CARD ---------------- */

function TeamCard({ member }) {
  const isLeadership =
    member.role === "CEO" || member.role === "Founder & CFO"

  const isCEO = member.role === "CEO"

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -6 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="bg-background rounded-xl p-6 border border-border text-center hover:shadow-xl transition-all"
    >
      {/* CEO & FOUNDER */}
      {isLeadership && member.photo ? (
        <>
          {/* ROLE (NOT ORANGE) */}
          <p className="font-bold text-accent mb-3">

            {member.role}
          </p>

          {/* PHOTO */}
          <div className="mb-5 flex justify-center">
            <img
              src={member.photo}
              alt={member.name}
              className="w-40 h-40 object-cover object-top rounded-lg border border-border"
            />
          </div>

          {/* NAME */}
          <h3 className="font-bold text-lg">
            {member.name}
          </h3>

          
        </>
      ) : (
        /* ALL OTHER TEAM MEMBERS */
        <>
          <h3 className="font-bold text-lg mb-1">
            {member.name}
          </h3>

          {/* ROLE — ORANGE */}
          <p className="font-bold text-accent mb-4">
            {member.role}
          </p>
        </>
      )}

      {/* CONTACT ICONS */}
      <div className="flex justify-center gap-4">
        <a
          href={`mailto:${member.email}`}
          className="p-2 rounded-full bg-accent/10 hover:bg-accent/20 transition"
        >
          <Mail size={16} />
        </a>

        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-accent/10 hover:bg-accent/20 transition"
        >
          <Linkedin size={16} />
        </a>
      </div>
    </motion.div>
  )
}
