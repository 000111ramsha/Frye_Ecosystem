/**
 * Critical CSS utilities for above-the-fold content optimization
 */

// Critical CSS for hero section and initial viewport
export const criticalCSS = `
  /* Critical styles for immediate rendering */
  body {
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #0f172a 50%, #1e293b 75%, #0f172a 100%);
    background-attachment: fixed;
    min-height: 100vh;
    font-family: 'Montserrat', system-ui, sans-serif;
    color: white;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Hero section critical styles */
  .hero-bg {
    background: radial-gradient(ellipse at center, rgba(6, 182, 212, 0.1) 0%, transparent 70%),
      radial-gradient(ellipse at 80% 20%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
      radial-gradient(ellipse at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
  }

  /* Gradient text for hero */
  .gradient-text {
    background: linear-gradient(to right, #67e8f9, #60a5fa, #a78bfa);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 200%;
  }

  /* Navigation critical styles */
  nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 50;
    background: rgba(15, 23, 42, 0.8);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(71, 85, 105, 0.3);
  }

  /* Button critical styles */
  .btn-primary {
    background: linear-gradient(to right, #06b6d4, #2563eb);
    color: white;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    border: none;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .btn-primary:hover {
    background: linear-gradient(to right, #0891b2, #1d4ed8);
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(6, 182, 212, 0.3);
  }

  /* Loading states */
  .loading-skeleton {
    background: linear-gradient(90deg, #1e293b 25%, #334155 50%, #1e293b 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
  }

  @keyframes loading {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }

  /* GPU acceleration for smooth animations */
  .gpu-accelerated {
    transform: translateZ(0);
    backface-visibility: hidden;
    perspective: 1000px;
  }

  /* Reduce motion for accessibility */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }

  /* Critical responsive utilities */
  @media (max-width: 768px) {
    .hero-title {
      font-size: 2.5rem;
      line-height: 1.1;
    }
  }

  @media (min-width: 769px) {
    .hero-title {
      font-size: 4rem;
      line-height: 1.1;
    }
  }

  @media (min-width: 1024px) {
    .hero-title {
      font-size: 5rem;
      line-height: 1.1;
    }
  }

  @media (min-width: 1280px) {
    .hero-title {
      font-size: 6rem;
      line-height: 1.1;
    }
  }
`

// Function to inject critical CSS
export function injectCriticalCSS(): void {
  if (typeof document !== 'undefined') {
    const existingStyle = document.getElementById('critical-css')
    if (!existingStyle) {
      const style = document.createElement('style')
      style.id = 'critical-css'
      style.textContent = criticalCSS
      document.head.insertBefore(style, document.head.firstChild)
    }
  }
}

// Function to preload critical fonts
export function preloadCriticalFonts(): void {
  if (typeof document !== 'undefined') {
    const fonts = [
      'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap'
    ]

    fonts.forEach((fontUrl) => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'style'
      link.href = fontUrl
      link.onload = () => {
        link.rel = 'stylesheet'
      }
      document.head.appendChild(link)
    })
  }
}

// Function to preload critical images
export function preloadCriticalImages(): void {
  if (typeof document !== 'undefined') {
    const criticalImages = [
      '/polygon.png',
      '/ethereum.png',
      '/bitcoin.png',
      '/minting.png',
      '/earn-frye.png'
    ]

    criticalImages.forEach((imageSrc) => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = imageSrc
      document.head.appendChild(link)
    })
  }
}

// Function to optimize initial page load
export function optimizeInitialLoad(): void {
  if (typeof window !== 'undefined') {
    // Inject critical CSS immediately
    injectCriticalCSS()
    
    // Preload critical resources
    preloadCriticalFonts()
    preloadCriticalImages()
    
    // Optimize font loading
    if ('fonts' in document) {
      document.fonts.ready.then(() => {
        console.log('Fonts loaded')
      })
    }
  }
}

// Resource hints for better performance
export function addResourceHints(): void {
  if (typeof document !== 'undefined') {
    const hints = [
      { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },

      { rel: 'preconnect', href: 'https://fonts.googleapis.com', crossorigin: 'anonymous' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' }
    ]

    hints.forEach((hint) => {
      const link = document.createElement('link')
      link.rel = hint.rel
      link.href = hint.href
      if (hint.crossorigin) {
        link.crossOrigin = hint.crossorigin
      }
      document.head.appendChild(link)
    })
  }
}
