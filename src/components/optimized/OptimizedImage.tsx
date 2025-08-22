"use client"

import Image from "next/image"
import { useState, memo } from "react"

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
  placeholder = "empty",
  blurDataURL,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleLoad = () => {
    setIsLoading(false)
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  if (hasError) {
    return (
      <div className={`bg-slate-800 flex items-center justify-center text-slate-400 text-sm ${className}`}>
        Failed to load image
      </div>
    )
  }

  const imageProps = {
    src,
    alt,
    quality,
    className: `${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`,
    onLoad: handleLoad,
    onError: handleError,
    placeholder,
    blurDataURL,
    priority,
    sizes: fill ? sizes : undefined,
  }

  return (
    <>
      {isLoading && (
        <div className={`absolute inset-0 bg-slate-800 animate-pulse rounded-lg ${className}`} />
      )}
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
  )
})

export default OptimizedImage
