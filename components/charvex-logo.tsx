"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface CharvexLogoProps {
  size?: "sm" | "md" | "lg"
  animated?: boolean
  className?: string
}

export function CharvexLogo({ size = "md", animated = true, className = "" }: CharvexLogoProps) {
  const sizeMap = {
    sm: 40,
    md: 64,
    lg: 96,
  }

  const dimension = sizeMap[size]

  const Wrapper = animated ? motion.div : "div"
  const wrapperProps = animated
    ? {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.6, ease: "easeOut" },
      }
    : {}

  return (
    <Wrapper className={`flex items-center justify-center ${className}`} {...wrapperProps}>
      <motion.div
        whileHover={animated ? { scale: 1.05, rotate: 3 } : {}}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <Image
          src="/logo.png"  // 👈 replace with your actual file name
          alt="Charvex Logo"
          width={dimension}
          height={dimension}
          className="drop-shadow-lg"
        />
      </motion.div>
    </Wrapper>
  )
}
