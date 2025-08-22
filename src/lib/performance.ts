/**
 * Performance utilities for the FRYE Ecosystem
 */

// Debounce function for search inputs and other high-frequency events
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func(...args), delay)
  }
}

// Throttle function for scroll events
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

// Intersection Observer hook for lazy loading
export function createIntersectionObserver(
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
): IntersectionObserver {
  const defaultOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '50px',
    ...options,
  }
  
  return new IntersectionObserver(callback, defaultOptions)
}

// Performance monitoring
export function measurePerformance(name: string, fn: () => void): void {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const start = performance.now()
    fn()
    const end = performance.now()
    console.log(`${name} took ${end - start} milliseconds`)
  } else {
    fn()
  }
}

// Memory usage monitoring
export function logMemoryUsage(): void {
  if (typeof window !== 'undefined' && 'performance' in window && 'memory' in performance) {
    const memory = (performance as any).memory
    console.log('Memory Usage:', {
      used: `${Math.round(memory.usedJSHeapSize / 1048576)} MB`,
      total: `${Math.round(memory.totalJSHeapSize / 1048576)} MB`,
      limit: `${Math.round(memory.jsHeapSizeLimit / 1048576)} MB`
    })
  }
}

// Core Web Vitals monitoring
export function reportWebVitals(metric: any): void {
  if (process.env.NODE_ENV === 'production') {
    // In production, you would send this to your analytics service
    console.log('Web Vital:', metric)

    // Example: Send to Google Analytics
    // gtag('event', metric.name, {
    //   value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
    //   event_label: metric.id,
    //   non_interaction: true,
    // })
  }
}

// Performance observer for monitoring various metrics
export function initPerformanceObserver(): void {
  if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
    try {
      // Monitor navigation timing
      const navObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming
            console.log('Navigation Timing:', {
              domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
              loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
              firstByte: navEntry.responseStart - navEntry.requestStart,
              domInteractive: navEntry.domInteractive - navEntry.fetchStart
            })
          }
        })
      })
      navObserver.observe({ entryTypes: ['navigation'] })

      // Monitor resource timing
      const resourceObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          if (entry.duration > 100) { // Only log slow resources
            console.log('Slow Resource:', {
              name: entry.name,
              duration: Math.round(entry.duration),
              size: (entry as any).transferSize || 'unknown'
            })
          }
        })
      })
      resourceObserver.observe({ entryTypes: ['resource'] })

      // Monitor long tasks
      const longTaskObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          console.warn('Long Task detected:', {
            duration: Math.round(entry.duration),
            startTime: Math.round(entry.startTime)
          })
        })
      })
      longTaskObserver.observe({ entryTypes: ['longtask'] })

    } catch (error) {
      console.error('Performance Observer initialization failed:', error)
    }
  }
}

// Image preloader for critical images
export function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve()
    img.onerror = reject
    img.src = src
  })
}

// Detect reduced motion preference
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Dynamic import with error handling
export async function dynamicImport<T>(
  importFn: () => Promise<{ default: T }>
): Promise<T> {
  try {
    const importedModule = await importFn()
    return importedModule.default
  } catch (error) {
    console.error('Failed to load module:', error)
    throw error
  }
}


