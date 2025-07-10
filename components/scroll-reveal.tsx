"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "scale"
  threshold?: number
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  threshold = 0.1,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay, threshold])

  const getTransformClass = () => {
    if (isVisible) return "opacity-100 translate-x-0 translate-y-0 scale-100"

    switch (direction) {
      case "up":
        return "opacity-0 translate-y-8"
      case "down":
        return "opacity-0 -translate-y-8"
      case "left":
        return "opacity-0 translate-x-8"
      case "right":
        return "opacity-0 -translate-x-8"
      case "scale":
        return "opacity-0 scale-95"
      default:
        return "opacity-0 translate-y-8"
    }
  }

  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${getTransformClass()} ${className}`}>
      {children}
    </div>
  )
}
