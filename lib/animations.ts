"use client"

import type { Variants } from "framer-motion"

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export const slideUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export const slideInLeftVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export const slideInRightVariants: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export const rotateInVariants: Variants = {
  hidden: { opacity: 0, rotateX: -90, rotateY: 0 },
  visible: {
    opacity: 1,
    rotateX: 0,
    rotateY: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

export const bounceInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.8,
    },
  },
}

export const flipInVariants: Variants = {
  hidden: { opacity: 0, rotateY: -180 },
  visible: {
    opacity: 1,
    rotateY: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

export const slideUpScaleVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
}

export const parallaxVariants: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

export const shimmerVariants: Variants = {
  hidden: { opacity: 0.5 },
  visible: {
    opacity: [0.5, 1, 0.5],
    transition: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
  },
}

export const pulseScaleVariants: Variants = {
  hidden: { scale: 1 },
  visible: {
    scale: [1, 1.1, 1],
    transition: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
  },
}

export const floatVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: [0, -20, 0],
    transition: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
  },
}

export const glitchVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  glitch: {
    x: [0, -2, 2, -2, 0],
    transition: { duration: 0.3, repeat: 3 },
  },
}

export const morphVariants: Variants = {
  hidden: { opacity: 0, borderRadius: "0%" },
  visible: {
    opacity: 1,
    borderRadius: "50%",
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

export const staggerContainerFastVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
}
