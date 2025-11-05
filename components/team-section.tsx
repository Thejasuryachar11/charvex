"use client"

import { motion } from "framer-motion"
import { containerVariants, slideUpVariants, flipInVariants } from "@/lib/animations"
import { Mail, Linkedin } from "lucide-react"

const team = [
  {
    name: "Yatish P V",
    role: "CEO",
    email: "yatish.pv@gmail.com",
    linkedin: "https://www.linkedin.com/in/yatishpv?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    name: "Theja Suryachar P J",
    role: "Founder & CFO",
    email: "thejasuryacharpj@gmail.com",
    linkedin: "https://linkedin.com/in/thejasuryachar11/",
  },
  {
    name: "Ebenezer Mathew",
    role: "COO",
    email: "ebenezermathew0711@gmail.com",
    linkedin: "https://www.linkedin.com/in/ebenezer-mathew-32b6521ba/",
  },
  {
    name: "Jeevan",
    role: "CPO",
    email: "jeevanjeevajibbi@gmail.com",
    linkedin: "https://www.linkedin.com/in/jeevan-k-157994356/",
  },
  {
    name: "Rahul A G",
    role: "CMO & VP",
    email: "rahulraj79186@gmail.com",
    linkedin: "https://www.linkedin.com/in/rahul-a-g-651056241/",
  },
  {
    name: "Mohammed Ahazar",
    role: "CTO",
    email: "mdahazar.8675@gmail.com",
    linkedin: "https://www.linkedin.com/in/mohammed-ahazar-829629266/",
  },
  {
    name: "Chethan H S",
    role: "HR Manager",
    email: "chethanhs829@gmail.com",
    linkedin: "https://linkedin.com/in/chethan-h-s-991084310/",
  },
  {
    name: "Abhi M S",
    role: "Head of Engineering",
    email: "abhimsuma03@gmail.com",
    linkedin: "https://www.linkedin.com/in/abhi-m-s-9a19a82a4/?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    name: "Siddharth",
    role: "Strategy Lead",
    email: "94siddharthkanabargi@gmail.com",
    linkedin: "https://www.linkedin.com/in/siddharth-kanabargi/",
  },
  {
    name: "Thirumala",
    role: "UI/UX Designer",
    email: "@gmail.com",
    linkedin: "https://www.linkedin.com/in/thirumala-b066b2266/",
  },
]

// Separate leadership from others
const leadership = team.filter((m) =>
  ["CEO", "Founder & CFO"].includes(m.role)
)
const others = team.filter(
  (m) => !["CEO", "Founder & CFO"].includes(m.role)
)

export function TeamSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-15">
        <div
          style={{
            backgroundImage:
              "url(/placeholder.svg?height=800&width=1600&query=people network connection nodes abstract)",
            backgroundSize: "500px 500px",
            backgroundPosition: "0 0",
          }}
          className="absolute inset-0"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideUpVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4">
            Our Leadership Team
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Experienced professionals dedicated to your success
          </p>
        </motion.div>

        {/* CEO & Founder */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16 justify-center max-w-3xl mx-auto"
        >
          {leadership.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </motion.div>

        {/* Other Members (4 per row) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {others.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Reusable TeamCard Component (No Photo)
function TeamCard({ member }) {
  return (
    <motion.div
      variants={flipInVariants}
      className="bg-background rounded-xl p-6 border border-border hover:border-accent/50 transition-all duration-300 text-center group relative overflow-hidden"
      whileHover={{ y: -8 }}
    >
      {/* Animated overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        animate={{ opacity: [0, 0.1, 0] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="relative z-10">
        <h3 className="text-base font-heading font-bold text-foreground mb-1">
          {member.name}
        </h3>
        <p className="text-sm font-semibold text-accent mb-3">{member.role}</p>

        {/* CEO Badge */}
        {member.role === "CEO" && (
          <motion.span
            className="inline-block bg-[#FF6B00]/10 text-[#FF6B00] text-xs font-medium px-3 py-1 rounded-full mb-3 animate-pulse"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            15+ Years of Experience
          </motion.span>
        )}

        {/* Contact Icons */}
        <div className="flex gap-3 justify-center">
          <motion.a
            href={`mailto:${member.email}`}
            className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 hover:bg-accent/20 text-accent transition-colors"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            title={member.email}
          >
            <Mail size={16} />
          </motion.a>

          <motion.a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 hover:bg-accent/20 text-accent transition-colors"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            title="LinkedIn Profile"
          >
            <Linkedin size={16} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}
