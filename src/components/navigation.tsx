"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/innovation-vault", label: "Innovation Vault" },
  { href: "/wallet-connect", label: "Wallet Connect" },
  { href: "/idea-submission", label: "Idea Submission" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/token-dashboard", label: "Token Dashboard" },
  { href: "/snapshot-dao", label: "Snapshot DAO" },
  { href: "/join-us", label: "Join Us" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text">FRYE</span>
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
