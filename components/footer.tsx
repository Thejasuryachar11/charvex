"use client"

import type React from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { slideUpVariants } from "@/lib/animations"
import { Mail, Linkedin, Phone, MapPin, Instagram, X } from "lucide-react"
import { useState } from "react"
import { CharvexLogo } from "./charvex-logo"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const [activePolicy, setActivePolicy] = useState<string | null>(null)
  const [activeTitle, setActiveTitle] = useState<string | null>(null)

  const footerLinks = {
    Product: [
      { label: "Services", href: "/services" },
      { label: "Projects", href: "/projects" },
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
    ],
    Services: [
      { label: "Web Development", href: "/services" },
      { label: "AI & Data Science", href: "/services" },
      { label: "ERP Systems", href: "/services" },
      { label: "Cloud Solutions", href: "/services" },
      { label: "UI/UX Design", href: "/services" },
      { label: "Cybersecurity", href: "/services" },
      { label: "Automation & DevOps", href: "/services" }
    ],
    Legal: [
      {
        label: "Privacy Policy",
        content: `
At Charvex Solutions, we are committed to protecting your privacy and ensuring transparency in how we handle your data. 
We collect only the information necessary to deliver and improve our services, and we process all personal data in accordance 
with applicable data protection laws, including the Information Technology Act, 2000, and GDPR guidelines where applicable.

Our data practices include:
1. **Information Collection** – We collect data such as your name, contact details, and company information when you engage with our services.
2. **Use of Data** – We use your information to enhance user experience, deliver solutions, provide customer support, and improve our offerings.
3. **Data Sharing** – We never sell your personal data. We may share information only with trusted third parties that assist us in operations, under strict confidentiality.
4. **Cookies and Tracking** – Our website uses analytics tools and cookies to monitor site performance and improve user interaction.
5. **Data Security** – We employ advanced encryption, firewalls, and secure storage practices to safeguard all information.
6. **User Rights** – You have the right to access, correct, or delete your personal data upon request.
7. **Retention Policy** – Data is retained only as long as required for business or legal purposes.
8. **Third-Party Links** – External websites linked from our platform are not covered under this policy.
9. **Updates to Policy** – This policy may be updated periodically to reflect new compliance requirements or business practices.

By using Charvex Solutions’ website or services, you consent to our Privacy Policy. For questions, please contact privacy@charvex.com.
        `,
      },
      {
        label: "Terms of Service",
        content: `
Welcome to Charvex Solutions. By accessing or using our website, services, or software, you agree to the following Terms of Service.

1. **Acceptance of Terms** – These terms constitute a legally binding agreement between you and Charvex Solutions.
2. **Scope of Services** – Charvex provides IT consulting, software development, and digital transformation services as described on our website.
3. **User Responsibilities** – You agree not to misuse our services, attempt to breach security, or use them for unlawful purposes.
4. **Intellectual Property** – All content, code, logos, and visuals on our site are owned or licensed by Charvex Solutions and may not be reproduced without permission.
5. **Service Availability** – We strive for uptime and reliability but may temporarily suspend services for maintenance or unforeseen issues.
6. **Limitation of Liability** – Charvex Solutions is not responsible for indirect, incidental, or consequential damages arising from service use.
7. **Termination** – We reserve the right to suspend access or terminate agreements in cases of violation or misuse.
8. **Governing Law** – These terms are governed by the laws of India and subject to the jurisdiction of Bangalore courts.
9. **Amendments** – Charvex reserves the right to modify these terms at any time with appropriate notification.

Continued use of our services after changes indicates acceptance of the revised Terms of Service.
        `,
      },
      {
        label: "Cookie Policy",
        content: `
Charvex Solutions uses cookies to enhance your browsing experience and analyze website traffic. Cookies are small files stored on your device that help us recognize you, remember preferences, and deliver better performance.

1. **Types of Cookies We Use**
   - **Essential Cookies:** Necessary for website functionality.
   - **Analytical Cookies:** Help us understand user behavior and improve site usability.
   - **Functional Cookies:** Store preferences such as language and layout.
   - **Marketing Cookies:** Support personalized advertisements and promotions.

2. **How We Use Cookies**
   We use cookies to:
   - Track site performance and engagement.
   - Personalize content and measure campaign effectiveness.
   - Maintain security and prevent fraud.

3. **Managing Cookies**
   You can control cookies via your browser settings. Disabling cookies may affect certain features of our website.

4. **Third-Party Cookies**
   Some analytics or marketing tools (like Google Analytics) may use third-party cookies, governed by their own privacy policies.

By continuing to use our website, you consent to our cookie usage as described in this policy.
        `,
      },
      {
        label: "Security",
        content: `
At Charvex Solutions, data protection and cybersecurity are top priorities. Our systems are designed following global security standards to ensure the confidentiality, integrity, and availability of all information processed through our networks.

1. **Infrastructure Security**
   - We use cloud-native architecture with firewalls, intrusion detection systems, and encrypted data storage.
2. **Access Control**
   - Strict identity management, MFA (multi-factor authentication), and role-based access are enforced.
3. **Data Encryption**
   - All sensitive data is encrypted in transit (TLS 1.3) and at rest (AES-256).
4. **Regular Audits**
   - We conduct internal and external security audits quarterly to identify and mitigate vulnerabilities.
5. **Incident Response**
   - A dedicated security team monitors systems 24/7 and follows an incident response plan aligned with ISO/IEC 27001.
6. **Employee Training**
   - Every Charvex employee undergoes annual security and compliance training.
7. **Client Responsibility**
   - Clients are encouraged to follow best practices for password management and system hygiene.
8. **Reporting**
   - Any suspected breach or security incident can be reported to security@charvex.com for immediate review.

Charvex Solutions remains committed to maintaining the highest standards of data security and resilience across our products and services.
        `,
      },
    ],
  }

  return (
    <footer className="bg-[#0A0F1C] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUpVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12"
        >
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity">
              <CharvexLogo size="sm" animated={true} />
              <span className="font-heading font-bold text-lg">Charvex</span>
            </Link>
            <p className="text-white/70 text-sm mb-6">
              Empowering digital transformation through AI, ERP, and cloud-driven innovation.
            </p>
            <div className="flex gap-4">
  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/company/charvex/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#FF6B00] hover:scale-110 transition-all"
  >
    <Linkedin size={18} />
  </a>

  {/* Instagram */}
  <a
    href="https://instagram.com/charvex.in"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#FF6B00] hover:scale-110 transition-all"
  >
    <Instagram size={18} />
  </a>

  {/* Mail */}
  <a
    href="mailto:info@charvex.com"
    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#FF6B00] hover:scale-110 transition-all"
  >
    <Mail size={18} />
  </a>

{/* ✅ WhatsApp */}
<a
  href="https://wa.me/919482350233?text=Hello%20Charvex%20Team!%20I%27m%20interested%20in%20learning%20more%20about%20your%20services."
  target="_blank"
  rel="noopener noreferrer"
  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#FF6B00] hover:scale-110 transition-all"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path d="M380.9 97.1C339 55.14 283.2 32 224 32 100.3 32 0 132.3 0 256c0 45 11.7 88.7 34 127L0 480l99.4-33.6C136.5 466.3 179.3 480 224 480c123.7 0 224-100.3 224-224 0-59.2-23.1-115-67.1-158.9zM224 438c-40.9 0-81.1-11.6-115.6-33.5l-8.3-5.3-59 19.9 19.6-57.6-5.4-8.4C36.7 318.8 25 287.9 25 256 25 143.7 111.7 57 224 57c59.4 0 115.3 23.1 157.6 65.4S447 196.6 447 256c0 112.3-86.7 199-223 182zm121.6-121.2l-34.7-10.1c-4.6-1.4-9.5 0.1-12.8 3.8l-10.7 11.4c-3.7 3.9-9.5 5.1-14.4 3-31.3-13.6-88.6-66.9-103.6-94.5-2.7-5 2-10.8 5.7-14.7l9.2-9.5c3.1-3.2 4.1-7.9 2.6-12L173 176.6c-1.4-4.2-5.3-7.1-9.6-7.5l-25.5-2.7c-7.4-.8-14.4 3.9-17.2 10.8-7.2 17.5-10.9 45.3 26.1 93.8 37.6 49.3 84.8 81.8 124.8 97.8 7.5 2.9 15.5 4.4 23.5 4.4 13.3 0 26.4-4.3 37.2-12.5 7-5.3 8.3-15.4 3.1-22.5-1.5-2.1-3.5-3.7-5.8-4.6z"/>
  </svg>
</a>

</div>

          </div>

          {/* Dynamic Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-heading font-bold mb-4 text-sm uppercase tracking-wide">{category}</h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={`${link.label}-${index}`}>
                    {category === "Legal" ? (
                      <button
                        onClick={() => {
                          setActiveTitle(link.label)
                          setActivePolicy(link.content || null)
                        }}
                        className="text-left text-white/70 hover:text-[#FF6B00] transition-colors text-sm"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <Link href={link.href} className="text-white/70 hover:text-[#FF6B00] transition-colors text-sm">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold mb-4 text-sm uppercase tracking-wide">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-[#FF6B00]" />
                <a href="mailto:info@charvex.com" className="text-white/70 hover:text-[#FF6B00] text-sm">info@charvex.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-[#FF6B00]" />
                <a href="tel:+919482350233" className="text-white/70 hover:text-[#FF6B00] text-sm">+91 94823 50233</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#FF6B00]" />
                <span className="text-white/70 text-sm">Bangalore, India</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/70">
            <p>&copy; {currentYear} Charvex Solutions. All rights reserved.</p>
            <p>Built with excellence by <span className="text-[#FF6B00] font-semibold">Charvex Team</span></p>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activePolicy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 px-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white text-black max-w-3xl w-full rounded-2xl p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              <button onClick={() => setActivePolicy(null)} className="absolute top-4 right-4 text-gray-600 hover:text-black">
                <X size={22} />
              </button>
              <h3 className="text-3xl font-bold mb-6 text-[#0A0F1C]">{activeTitle}</h3>
              <div className="text-gray-800 whitespace-pre-line leading-relaxed text-sm md:text-base">{activePolicy}</div>
              <div className="flex justify-center mt-6">
                <button onClick={() => setActivePolicy(null)} className="px-6 py-2 bg-[#FF6B00] text-white rounded-lg hover:bg-[#e85e00] transition">Close</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  )
}
