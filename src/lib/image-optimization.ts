/**
 * Image optimization utilities for the FRYE Ecosystem
 */

// Image format detection and optimization
export interface ImageOptimizationOptions {
  quality?: number
  format?: 'webp' | 'avif' | 'auto'
  width?: number
  height?: number
  blur?: boolean
}

// Generate optimized image URLs
export function getOptimizedImageUrl(
  src: string, 
  options: ImageOptimizationOptions = {}
): string {
  const { quality = 85, format = 'auto', width, height } = options
  
  // For Next.js Image component, we'll let it handle optimization
  // This function can be extended for custom CDN integration
  if (src.startsWith('/')) {
    return src // Local images handled by Next.js
  }
  
  // For external images, you could integrate with a CDN like Cloudinary
  // Example: return `https://res.cloudinary.com/your-cloud/image/fetch/f_${format},q_${quality}/${encodeURIComponent(src)}`
  
  return src
}

// Generate blur data URL for better loading experience
export function generateBlurDataURL(
  width: number = 10, 
  height: number = 10, 
  color: string = '#1e293b'
): string {
  if (typeof window === 'undefined') {
    // Server-side fallback
    return `data:image/svg+xml;base64,${Buffer.from(
      `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="${color}"/></svg>`
    ).toString('base64')}`
  }
  
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')
  
  if (ctx) {
    ctx.fillStyle = color
    ctx.fillRect(0, 0, width, height)
  }
  
  return canvas.toDataURL()
}

// Preload critical images
export function preloadCriticalImages(imageSrcs: string[]): Promise<void[]> {
  const preloadPromises = imageSrcs.map((src) => {
    return new Promise<void>((resolve, reject) => {
      const img = new Image()
      img.onload = () => resolve()
      img.onerror = () => reject(new Error(`Failed to preload image: ${src}`))
      img.src = src
    })
  })
  
  return Promise.all(preloadPromises)
}

// Image format support detection
export function supportsWebP(): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') {
      resolve(false)
      return
    }
    
    const webP = new Image()
    webP.onload = webP.onerror = () => {
      resolve(webP.height === 2)
    }
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
  })
}

export function supportsAVIF(): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') {
      resolve(false)
      return
    }
    
    const avif = new Image()
    avif.onload = avif.onerror = () => {
      resolve(avif.height === 2)
    }
    avif.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgABogQEAwgMg8f8D///8WfhwB8+ErK42A='
  })
}

// Responsive image sizes generator
export function generateResponsiveSizes(breakpoints: { [key: string]: number } = {}): string {
  const defaultBreakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
    ...breakpoints
  }
  
  const sizes = [
    `(max-width: ${defaultBreakpoints.sm}px) 100vw`,
    `(max-width: ${defaultBreakpoints.md}px) 50vw`,
    `(max-width: ${defaultBreakpoints.lg}px) 33vw`,
    `(max-width: ${defaultBreakpoints.xl}px) 25vw`,
    '20vw'
  ]
  
  return sizes.join(', ')
}

// Image lazy loading with Intersection Observer
export class LazyImageLoader {
  private observer: IntersectionObserver | null = null
  private images: Set<HTMLImageElement> = new Set()
  
  constructor(options: IntersectionObserverInit = {}) {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(
        this.handleIntersection.bind(this),
        {
          rootMargin: '50px',
          threshold: 0.1,
          ...options
        }
      )
    }
  }
  
  private handleIntersection(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement
        this.loadImage(img)
        this.unobserve(img)
      }
    })
  }
  
  private loadImage(img: HTMLImageElement) {
    const src = img.dataset.src
    if (src) {
      img.src = src
      img.removeAttribute('data-src')
      img.classList.add('loaded')
    }
  }
  
  observe(img: HTMLImageElement) {
    if (this.observer) {
      this.images.add(img)
      this.observer.observe(img)
    }
  }
  
  unobserve(img: HTMLImageElement) {
    if (this.observer) {
      this.images.delete(img)
      this.observer.unobserve(img)
    }
  }
  
  disconnect() {
    if (this.observer) {
      this.observer.disconnect()
      this.images.clear()
    }
  }
}

// Image performance metrics
export function measureImageLoadTime(src: string): Promise<number> {
  return new Promise((resolve, reject) => {
    const startTime = performance.now()
    const img = new Image()
    
    img.onload = () => {
      const loadTime = performance.now() - startTime
      resolve(loadTime)
    }
    
    img.onerror = () => {
      reject(new Error(`Failed to load image: ${src}`))
    }
    
    img.src = src
  })
}

// Critical images for preloading
export const CRITICAL_IMAGES = [
  '/polygon.png',
  '/ethereum.png',
  '/bitcoin.png',
  '/minting.png',
  '/earn-frye.png',
  '/premium-access.png'
]

// Initialize image optimizations
export function initImageOptimizations(): void {
  if (typeof window !== 'undefined') {
    // Preload critical images
    preloadCriticalImages(CRITICAL_IMAGES).catch((error) => {
      console.warn('Failed to preload some critical images:', error)
    })
    
    // Check format support
    Promise.all([supportsWebP(), supportsAVIF()]).then(([webp, avif]) => {
      console.log('Image format support:', { webp, avif })
    })
  }
}
