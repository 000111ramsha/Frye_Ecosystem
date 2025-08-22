import { useEffect, useState } from 'react'

/**
 * Custom hook to prevent hydration mismatches in Chrome
 * This is specifically designed to handle Chrome's stricter hydration behavior
 */
export function useChromeHydration() {
  const [isHydrated, setIsHydrated] = useState(false)
  const [isChrome, setIsChrome] = useState(false)

  useEffect(() => {
    // Detect Chrome browser
    const isChromeBrowser = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
    setIsChrome(isChromeBrowser)

    // For Chrome, use a slightly longer delay to ensure proper hydration
    const delay = isChromeBrowser ? 100 : 50

    const timer = setTimeout(() => {
      setIsHydrated(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [])

  return { isHydrated, isChrome }
}

/**
 * Component wrapper to prevent hydration issues in Chrome
 */
export function ChromeHydrationWrapper({ 
  children, 
  fallback = null,
  forceClientOnly = false 
}: { 
  children: React.ReactNode
  fallback?: React.ReactNode
  forceClientOnly?: boolean
}) {
  const { isHydrated, isChrome } = useChromeHydration()

  // If forcing client-only rendering or if it's Chrome and not hydrated yet
  if (forceClientOnly || (isChrome && !isHydrated)) {
    return <>{fallback}</>
  }

  return <>{children}</>
}

/**
 * Utility to safely access browser APIs in Chrome
 */
export function safeBrowserAccess<T>(
  accessor: () => T,
  fallback: T,
  checkChrome = true
): T {
  if (typeof window === 'undefined') {
    return fallback
  }

  if (checkChrome) {
    const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
    if (isChrome) {
      try {
        return accessor()
      } catch (error) {
        console.warn('Chrome-specific API access failed:', error)
        return fallback
      }
    }
  }

  try {
    return accessor()
  } catch (error) {
    return fallback
  }
}
