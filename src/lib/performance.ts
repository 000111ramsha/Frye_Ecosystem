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
    const module = await importFn()
    return module.default
  } catch (error) {
    console.error('Failed to load module:', error)
    throw error
  }
}

// Memory usage monitoring (development only)
export function logMemoryUsage(): void {
  if (process.env.NODE_ENV === 'development' && 'memory' in performance) {
    const memInfo = (performance as any).memory
    console.log({
      usedJSHeapSize: `${Math.round(memInfo.usedJSHeapSize / 1048576)} MB`,
      totalJSHeapSize: `${Math.round(memInfo.totalJSHeapSize / 1048576)} MB`,
      jsHeapSizeLimit: `${Math.round(memInfo.jsHeapSizeLimit / 1048576)} MB`,
    })
  }
}
