"use client"

import Image from "next/image"
import { useState, memo, useEffect, useRef } from "react"
import { createIntersectionObserver } from "@/lib/performance"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  sizes?: string
  className?: string
  priority?: boolean
  quality?: number
  placeholder?: "blur" | "empty"
  blurDataURL?: string
  lazy?: boolean
  progressive?: boolean
}

// Generate a simple blur data URL for better loading experience
const generateBlurDataURL = (width: number = 10, height: number = 10): string => {
  // Return a simple base64 encoded SVG as fallback
  const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#1e293b"/></svg>`
  return `data:image/svg+xml;base64,${btoa(svg)}`
}

const OptimizedImage = memo(function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  className = "",
  priority = false,
  quality = 85,
  placeholder = "blur",
  blurDataURL,
  lazy = true,
  progressive = true,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [isInView, setIsInView] = useState(!lazy || priority)
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null)
  const imgRef = useRef<HTMLDivElement>(null)

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!lazy || priority || isInView) return

    const element = imgRef.current
    if (!element) return

    const observer = createIntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.disconnect()
          }
        })
      },
      { rootMargin: '50px' }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [lazy, priority, isInView])

  // Progressive loading effect
  useEffect(() => {
    if (!isInView || !progressive) return

    const img = new window.Image()
    img.onload = () => {
      setLoadedSrc(src)
      setIsLoading(false)
    }
    img.onerror = () => {
      setHasError(true)
      setIsLoading(false)
    }
    img.src = src
  }, [isInView, src, progressive])

  const handleLoad = () => {
    setIsLoading(false)
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  // Generate blur data URL if not provided
  const effectiveBlurDataURL = blurDataURL || 
    (placeholder === "blur" ? generateBlurDataURL(10, 10) : undefined)

  if (hasError) {
    return (
      <div className={`bg-slate-800 flex items-center justify-center text-slate-400 text-sm ${className}`}>
        <span>Failed to load image</span>
      </div>
    )
  }

  const imageProps = {
    src: progressive ? (loadedSrc || src) : src,
    alt,
    quality,
    className: `${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500 ease-out`,
    onLoad: progressive ? undefined : handleLoad,
    onError: progressive ? undefined : handleError,
    placeholder: placeholder as "blur" | "empty",
    blurDataURL: effectiveBlurDataURL,
    priority,
    sizes: fill ? sizes : undefined,
  }

  return (
    <div ref={imgRef} className="relative">
      {isLoading && (
        <div className={`absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 animate-pulse rounded-lg ${className}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-600/50 to-transparent animate-shimmer" />
        </div>
      )}

      {isInView && (
        <>
          {fill ? (
            <Image
              {...imageProps}
              fill
            />
          ) : (
            <Image
              {...imageProps}
              width={width!}
              height={height!}
            />
          )}
        </>
      )}
    </div>
  )
})

export default OptimizedImage
