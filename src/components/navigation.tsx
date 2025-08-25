"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Zap, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/explore", label: "Explore" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/docs", label: "Docs" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text">LUHPHOL</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative overflow-hidden",
                  pathname === item.href
                    ? "text-cyan-300 bg-slate-800/60 shadow-lg shadow-cyan-500/20"
                    : "text-slate-200 hover:text-cyan-300 hover:bg-slate-800/40",
                )}
              >
                {pathname === item.href && (
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg" />
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Right Side - Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              asChild
              size="sm"
              className="bg-gradient-to-r from-purple-600 to-blue-400 text-white hover:from-purple-500 hover:to-blue-500 shadow-md shadow-purple-400/30 hover:shadow-purple-400/50 transition-shadow"
            >
              <Link href="/wallet-connect">
                Connect Wallet
              </Link>
            </Button>

            {/* Join Us Button with Gradient Border and Text */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-lg p-[1px]">
                <div className="bg-slate-950 rounded-lg h-full w-full"></div>
              </div>
              <Button
                asChild
                size="sm"
                className="relative bg-transparent border-0 hover:bg-slate-900/50 transition-all duration-300 h-9 px-7 py-1"
              >
                <Link href="/join-us">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-bold">
                    Join Us
                  </span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-200 hover:text-cyan-300 hover:bg-slate-800/40"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/90 backdrop-blur-lg rounded-lg mt-2 border border-slate-700/50">
              {/* Mobile Connect Wallet Button */}
              <div className="px-2 py-2">
                <Button
                  asChild
                  size="sm"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-500 hover:to-blue-500 shadow-md shadow-purple-400/30 hover:shadow-purple-400/50 transition-shadow"
                >
                  <Link href="/wallet-connect" onClick={() => setIsOpen(false)}>
                    Connect Wallet
                  </Link>
                </Button>
              </div>

              {/* Mobile Join Us Button with Gradient Border and Text */}
              <div className="px-2 py-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-lg p-[1px]">
                    <div className="bg-slate-950 rounded-lg h-full w-full"></div>
                  </div>
                  <Button
                    asChild
                    size="sm"
                    className="relative w-full bg-transparent border-0 hover:bg-slate-900/50 transition-all duration-300 h-10"
                    onClick={() => setIsOpen(false)}
                  >
                    <Link href="/join-us">
                      <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
                        Join Us
                      </span>
                    </Link>
                  </Button>
                </div>
              </div>

              
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300",
                    pathname === item.href
                      ? "text-cyan-300 bg-slate-800/60 shadow-lg shadow-cyan-500/20"
                      : "text-slate-200 hover:text-cyan-300 hover:bg-slate-800/40",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
