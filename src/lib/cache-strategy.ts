/**
 * Advanced caching strategies for the FRYE Ecosystem
 */

// Cache configuration types
export interface CacheConfig {
  name: string
  version: string
  maxAge: number
  strategy: 'cache-first' | 'network-first' | 'stale-while-revalidate'
  resources: string[]
}

// Cache configurations for different resource types
export const CACHE_CONFIGS: Record<string, CacheConfig> = {
  static: {
    name: 'frye-static',
    version: '1.0.0',
    maxAge: 31536000, // 1 year
    strategy: 'cache-first',
    resources: [
      '/_next/static/',
      '/images/',
      '/icons/',
      '*.png',
      '*.jpg',
      '*.jpeg',
      '*.webp',
      '*.avif',
      '*.svg',
      '*.ico',
      '*.woff',
      '*.woff2',
      '*.ttf',
      '*.eot'
    ]
  },
  
  dynamic: {
    name: 'frye-dynamic',
    version: '1.0.0',
    maxAge: 86400, // 1 day
    strategy: 'stale-while-revalidate',
    resources: [
      '/',
      '/innovation-vault',
      '/idea-submission',
      '/token-dashboard',
      '/docs',
      '/explore'
    ]
  },
  
  api: {
    name: 'frye-api',
    version: '1.0.0',
    maxAge: 300, // 5 minutes
    strategy: 'network-first',
    resources: [
      '/api/'
    ]
  }
}

// Browser cache management
export class BrowserCacheManager {
  private static instance: BrowserCacheManager
  private caches: Map<string, Cache> = new Map()
  
  static getInstance(): BrowserCacheManager {
    if (!BrowserCacheManager.instance) {
      BrowserCacheManager.instance = new BrowserCacheManager()
    }
    return BrowserCacheManager.instance
  }
  
  async initializeCaches(): Promise<void> {
    if (typeof window === 'undefined' || !('caches' in window)) {
      return
    }
    
    try {
      for (const [key, config] of Object.entries(CACHE_CONFIGS)) {
        const cacheName = `${config.name}-v${config.version}`
        const cache = await caches.open(cacheName)
        this.caches.set(key, cache)
      }
      
      // Clean up old caches
      await this.cleanupOldCaches()
    } catch (error) {
      console.error('Failed to initialize caches:', error)
    }
  }
  
  private async cleanupOldCaches(): Promise<void> {
    const cacheNames = await caches.keys()
    const currentCacheNames = Object.values(CACHE_CONFIGS).map(
      config => `${config.name}-v${config.version}`
    )
    
    const deletePromises = cacheNames
      .filter(name => !currentCacheNames.includes(name))
      .map(name => caches.delete(name))
    
    await Promise.all(deletePromises)
  }
  
  async cacheResource(url: string, response: Response, cacheType: string): Promise<void> {
    const cache = this.caches.get(cacheType)
    if (cache && response.ok) {
      await cache.put(url, response.clone())
    }
  }
  
  async getCachedResource(url: string, cacheType: string): Promise<Response | undefined> {
    const cache = this.caches.get(cacheType)
    if (cache) {
      return await cache.match(url)
    }
    return undefined
  }
  
  async preloadCriticalResources(): Promise<void> {
    const criticalResources = [
      '/',
      '/polygon.png',
      '/ethereum.png',
      '/bitcoin.png',
      '/minting.png',
      '/earn-frye.png'
    ]
    
    const cache = this.caches.get('static')
    if (!cache) return
    
    const preloadPromises = criticalResources.map(async (url) => {
      try {
        const response = await fetch(url)
        if (response.ok) {
          await cache.put(url, response)
        }
      } catch (error) {
        console.warn(`Failed to preload resource: ${url}`, error)
      }
    })
    
    await Promise.all(preloadPromises)
  }
}

// CDN optimization utilities
export class CDNOptimizer {
  private static readonly CDN_DOMAINS = [
    'cdn.jsdelivr.net',
    'fonts.googleapis.com',
    'fonts.gstatic.com'
  ]
  
  static optimizeImageUrl(url: string, options: {
    width?: number
    height?: number
    quality?: number
    format?: 'webp' | 'avif' | 'auto'
  } = {}): string {
    // Local image optimization handled by Next.js Image component
    if (url.startsWith('/')) {
      // Local images are automatically optimized by Next.js
      return url
    }
    
    return url
  }
  
  static addResourceHints(): void {
    if (typeof document === 'undefined') return
    
    // Add DNS prefetch for CDN domains
    CDNOptimizer.CDN_DOMAINS.forEach(domain => {
      const link = document.createElement('link')
      link.rel = 'dns-prefetch'
      link.href = `//${domain}`
      document.head.appendChild(link)
    })
    
    // Add preconnect for critical domains
    const criticalDomains = ['fonts.googleapis.com', 'fonts.gstatic.com']
    criticalDomains.forEach(domain => {
      const link = document.createElement('link')
      link.rel = 'preconnect'
      link.href = `https://${domain}`
      link.crossOrigin = 'anonymous'
      document.head.appendChild(link)
    })
  }
}

// Local storage cache for API responses
export class LocalStorageCache {
  private static readonly PREFIX = 'frye-cache-'
  private static readonly MAX_AGE = 24 * 60 * 60 * 1000 // 24 hours
  
  static set(key: string, data: any, maxAge: number = LocalStorageCache.MAX_AGE): void {
    if (typeof localStorage === 'undefined') return
    
    const item = {
      data,
      timestamp: Date.now(),
      maxAge
    }
    
    try {
      localStorage.setItem(
        `${LocalStorageCache.PREFIX}${key}`,
        JSON.stringify(item)
      )
    } catch (error) {
      console.warn('Failed to cache data in localStorage:', error)
    }
  }
  
  static get(key: string): any | null {
    if (typeof localStorage === 'undefined') return null
    
    try {
      const item = localStorage.getItem(`${LocalStorageCache.PREFIX}${key}`)
      if (!item) return null
      
      const parsed = JSON.parse(item)
      const isExpired = Date.now() - parsed.timestamp > parsed.maxAge
      
      if (isExpired) {
        LocalStorageCache.remove(key)
        return null
      }
      
      return parsed.data
    } catch (error) {
      console.warn('Failed to retrieve cached data from localStorage:', error)
      return null
    }
  }
  
  static remove(key: string): void {
    if (typeof localStorage === 'undefined') return
    localStorage.removeItem(`${LocalStorageCache.PREFIX}${key}`)
  }
  
  static clear(): void {
    if (typeof localStorage === 'undefined') return
    
    const keys = Object.keys(localStorage)
    keys.forEach(key => {
      if (key.startsWith(LocalStorageCache.PREFIX)) {
        localStorage.removeItem(key)
      }
    })
  }
  
  static cleanup(): void {
    if (typeof localStorage === 'undefined') return
    
    const keys = Object.keys(localStorage)
    keys.forEach(key => {
      if (key.startsWith(LocalStorageCache.PREFIX)) {
        const item = localStorage.getItem(key)
        if (item) {
          try {
            const parsed = JSON.parse(item)
            const isExpired = Date.now() - parsed.timestamp > parsed.maxAge
            if (isExpired) {
              localStorage.removeItem(key)
            }
          } catch (error) {
            localStorage.removeItem(key)
          }
        }
      }
    })
  }
}

// Initialize all caching strategies
export async function initializeCaching(): Promise<void> {
  // Initialize browser cache manager
  const cacheManager = BrowserCacheManager.getInstance()
  await cacheManager.initializeCaches()
  await cacheManager.preloadCriticalResources()
  
  // Add CDN resource hints
  CDNOptimizer.addResourceHints()
  
  // Cleanup old localStorage cache
  LocalStorageCache.cleanup()
  
  console.log('Caching strategies initialized')
}
