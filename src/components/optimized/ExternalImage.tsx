"use client"

import Image from "next/image"
import { useState, memo } from "react"

interface ExternalImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  sizes?: string
  className?: string
  priority?: boolean
  quality?: number
  fallbackSrc?: string
}

const ExternalImage = memo(function ExternalImage({
  src,
  alt,
  width,
  height,
  fill = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  className = "",
  priority = false,
  quality = 85,
  fallbackSrc = "/placeholder-image.svg",
}: ExternalImageProps) {
  const [imageSrc, setImageSrc] = useState(src)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleLoad = () => {
    setIsLoading(false)
    setHasError(false)
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
    if (imageSrc !== fallbackSrc) {
      setImageSrc(fallbackSrc)
    }
  }

  const imageProps = {
    src: imageSrc,
    alt,
    quality,
    className: `${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`,
    onLoad: handleLoad,
    onError: handleError,
    priority,
    sizes: fill ? sizes : undefined,
  }

  return (
    <div className="relative">
      {isLoading && (
        <div className={`absolute inset-0 bg-slate-800 animate-pulse rounded-lg ${className}`} />
      )}
      {hasError && imageSrc === fallbackSrc && (
        <div className={`bg-slate-800 flex items-center justify-center text-slate-400 text-sm ${className}`}>
          <span>Image unavailable</span>
        </div>
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
    </div>
  )
})

export default ExternalImage
