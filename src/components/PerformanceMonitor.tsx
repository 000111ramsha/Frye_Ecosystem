"use client"

import { useEffect } from 'react'
import { logMemoryUsage } from '@/lib/performance'

const PerformanceMonitor = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined' && 'performance' in window) {
      // First Contentful Paint
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          if (process.env.NODE_ENV === 'development') {
            console.log(`${entry.name}: ${entry.startTime}ms`)
          }
        })
      })

      observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] })

      // Log memory usage in development
      if (process.env.NODE_ENV === 'development') {
        const interval = setInterval(logMemoryUsage, 30000) // Every 30 seconds
        return () => clearInterval(interval)
      }

      return () => observer.disconnect()
    }
  }, [])

  // Report Web Vitals to analytics (if needed)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Custom analytics integration can go here
      const reportWebVitals = (metric: any) => {
        if (process.env.NODE_ENV === 'production') {
          // Send to analytics service
          console.log(metric)
        }
      }

      // Example: report CLS, FID, FCP, LCP, TTFB
      // This would typically integrate with your analytics service
    }
  }, [])

  return null // This component doesn't render anything
}

export default PerformanceMonitor
