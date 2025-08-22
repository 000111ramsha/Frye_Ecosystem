"use client"

import { useEffect } from 'react'
import { logMemoryUsage, reportWebVitals, initPerformanceObserver } from '@/lib/performance'

const PerformanceMonitor = () => {
  useEffect(() => {
    // Initialize comprehensive performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Initialize performance observers
      initPerformanceObserver()

      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          if (process.env.NODE_ENV === 'development') {
            console.log(`${entry.name}: ${Math.round(entry.startTime)}ms`)
          }

          // Report to analytics in production
          if (process.env.NODE_ENV === 'production') {
            reportWebVitals({
              name: entry.name,
              value: entry.startTime,
              id: entry.entryType,
              delta: entry.duration || 0
            })
          }
        })
      })

      observer.observe({
        entryTypes: ['navigation', 'paint', 'largest-contentful-paint', 'first-input', 'layout-shift']
      })

      // Log memory usage in development
      if (process.env.NODE_ENV === 'development') {
        const interval = setInterval(logMemoryUsage, 30000) // Every 30 seconds
        return () => {
          clearInterval(interval)
          observer.disconnect()
        }
      }

      return () => observer.disconnect()
    }
  }, [])

  // Monitor page visibility changes for performance optimization
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const handleVisibilityChange = () => {
        if (document.hidden) {
          // Page is hidden, pause non-critical operations
          console.log('Page hidden - pausing non-critical operations')
        } else {
          // Page is visible, resume operations
          console.log('Page visible - resuming operations')
        }
      }

      document.addEventListener('visibilitychange', handleVisibilityChange)
      return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  // Monitor connection quality
  useEffect(() => {
    if (typeof navigator !== 'undefined' && 'connection' in navigator) {
      const connection = (navigator as any).connection
      if (connection) {
        const logConnectionInfo = () => {
          console.log('Connection Info:', {
            effectiveType: connection.effectiveType,
            downlink: connection.downlink,
            rtt: connection.rtt,
            saveData: connection.saveData
          })
        }

        logConnectionInfo()
        connection.addEventListener('change', logConnectionInfo)

        return () => connection.removeEventListener('change', logConnectionInfo)
      }
    }
  }, [])

  return null // This component doesn't render anything
}

export default PerformanceMonitor
