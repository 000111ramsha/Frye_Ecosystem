"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { memo, useState, useEffect } from "react"
import { prefersReducedMotion } from "@/lib/performance"

interface PerformantCardProps {
  children: React.ReactNode
  className?: string
  title?: string
  description?: string
  hover?: boolean
}

const PerformantCard = memo(function PerformantCard({ 
  children, 
  className = "", 
  title, 
  description,
  hover = true 
}: PerformantCardProps) {
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    setReducedMotion(prefersReducedMotion())
  }, [])

  const baseClasses = "bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl rounded-xl transition-all duration-300"
  const hoverClasses = hover && !reducedMotion 
    ? "hover:bg-slate-900/80 hover:border-slate-600/70 hover:shadow-2xl hover:scale-[1.02]" 
    : ""
  const reducedMotionClasses = reducedMotion ? "reduce-motion" : ""

  return (
    <Card className={`${baseClasses} ${hoverClasses} ${reducedMotionClasses} ${className} gpu-accelerated`}>
      {title && (
        <CardHeader>
          <CardTitle className="text-white">{title}</CardTitle>
          {description && <p className="text-slate-300">{description}</p>}
        </CardHeader>
      )}
      <CardContent>
        {children}
      </CardContent>
    </Card>
  )
})

export default PerformantCard
