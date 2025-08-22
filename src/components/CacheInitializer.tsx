"use client"

import { useEffect } from 'react'
import { initializeCaching } from '@/lib/cache-strategy'
import { initImageOptimizations } from '@/lib/image-optimization'
import { optimizeInitialLoad } from '@/lib/critical-css'

const CacheInitializer = () => {
  useEffect(() => {
    // Initialize all performance optimizations
    const initializeOptimizations = async () => {
      try {
        // Initialize critical CSS and resource preloading
        optimizeInitialLoad()
        
        // Initialize image optimizations
        initImageOptimizations()
        
        // Initialize caching strategies
        await initializeCaching()
        
        console.log('All performance optimizations initialized')
      } catch (error) {
        console.error('Failed to initialize performance optimizations:', error)
      }
    }
    
    // Run optimizations after the page has loaded
    if (document.readyState === 'complete') {
      initializeOptimizations()
    } else {
      window.addEventListener('load', initializeOptimizations)
      return () => window.removeEventListener('load', initializeOptimizations)
    }
  }, [])
  
  return null // This component doesn't render anything
}

export default CacheInitializer
