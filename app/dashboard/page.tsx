"use client"

import { useState } from "react"
import {
  Coins,
  Handshake,
  Sparkles,
  Home,
  Settings,
  ChevronsLeft,
  ChevronsRight,
  Shield,
  Vote,
  Menu,
  X,
} from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

// Import dashboard content components
import DashboardOverview from "@/components/dashboard/DashboardOverview"
import TokenDashboardContent from "@/components/dashboard/TokenDashboardContent"
import InnovationVaultContent from "@/components/dashboard/InnovationVaultContent"
import IdeaSubmissionContent from "@/components/dashboard/IdeaSubmissionContent"
import SnapshotDAOContent from "@/components/dashboard/SnapshotDAOContent"
import SettingsContent from "@/components/dashboard/SettingsContent"

export default function Dashboard() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [activeView, setActiveView] = useState("overview")
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)
  

  
  const sidebarItems = [
    { key: "overview", label: "Overview", icon: Home },
    { key: "token-dashboard", label: "Token Dashboard", icon: Coins },
    { key: "innovation-vault", label: "Innovation Vault", icon: Shield },
    { key: "idea-submission", label: "Idea Submission", icon: Sparkles },
    { key: "snapshot-dao", label: "Snapshot DAO", icon: Vote },
    { key: "respect-fees", label: "Respect Fees", icon: Handshake },
    { key: "settings", label: "Settings", icon: Settings },
  ] as const

  const handleItemClick = (viewKey: string) => {
    setActiveView(viewKey)
    setIsMobileSidebarOpen(false) // Close mobile sidebar when item is clicked
  }

  const renderContent = () => {
    switch (activeView) {
      case "overview":
        return <DashboardOverview />
      case "token-dashboard":
        return <TokenDashboardContent />
      case "innovation-vault":
        return <InnovationVaultContent />
      case "idea-submission":
        return <IdeaSubmissionContent />
      case "snapshot-dao":
        return <SnapshotDAOContent />
      case "respect-fees":
        return <TokenDashboardContent /> // Reuse token dashboard for now
      case "settings":
        return <SettingsContent />
      default:
        return <DashboardOverview />
    }
  }

  return (
    <>
      {/* Mobile Hamburger Menu Button */}
      <Button
        onClick={() => setIsMobileSidebarOpen(true)}
        className="lg:hidden fixed top-20 left-4 z-50 bg-slate-900/90 backdrop-blur-lg border border-slate-700/60 hover:bg-slate-800/90"
        size="sm"
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Mobile Sidebar Overlay */}
      {isMobileSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40 top-16"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={cn(
          "lg:hidden fixed left-0 top-16 bottom-0 w-80 bg-slate-950/95 backdrop-blur-xl border-r border-slate-800/50 shadow-xl transform transition-transform duration-300 ease-in-out z-40",
          isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <nav className="h-full flex flex-col">
          <div className="flex items-center justify-between p-4 border-b border-slate-800/60">
            <h2 className="text-lg font-semibold text-white">Dashboard Menu</h2>
            <Button
              onClick={() => setIsMobileSidebarOpen(false)}
              variant="ghost"
              size="sm"
              className="text-slate-400 hover:text-white"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <ul className="flex-1 py-4 space-y-1">
            {sidebarItems.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => handleItemClick(item.key)}
                  className={cn(
                    "group flex items-center gap-3 px-4 py-3 text-sm rounded-md transition-colors w-full text-left",
                    activeView === item.key
                      ? "text-cyan-300 bg-slate-800/60 shadow-lg shadow-cyan-500/20"
                      : "text-slate-300 hover:text-cyan-300 hover:bg-slate-800/50",
                  )}
                >
                  <item.icon className={cn(
                    "h-5 w-5 transition-colors",
                    activeView === item.key ? "text-cyan-300" : "text-slate-400 group-hover:text-cyan-300"
                  )} />
                  <span className="truncate">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
          <div className="p-4 border-t border-slate-800/60">
            <div className="flex items-center gap-3">
              <div className="p-[2px] rounded-full bg-gradient-to-r from-cyan-400 to-purple-500">
                <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-900">
                  <img src="/AI-In-Algorithmic-Trading.jpg" alt="Profile" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="leading-tight">
                <p className="text-sm text-white">Guest User</p>
                <p className="text-xs text-slate-400">Not connected</p>
              </div>
            </div>
          </div>
        </nav>
      </aside>

      {/* Desktop Sidebar */}
      <aside
        className={cn(
          "hidden lg:block fixed left-0 top-16 bottom-0 bg-slate-950/95 backdrop-blur-xl border-r border-slate-800/50 shadow-xl transition-all duration-300",
          isSidebarCollapsed ? "w-16" : "w-64",
        )}
      >
        <nav className="h-full flex flex-col">
          <ul className="flex-1 py-4 space-y-1">
            {sidebarItems.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => handleItemClick(item.key)}
                  className={cn(
                    "group flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors w-full text-left",
                    activeView === item.key
                      ? "text-cyan-300 bg-slate-800/60 shadow-lg shadow-cyan-500/20"
                      : "text-slate-300 hover:text-cyan-300 hover:bg-slate-800/50",
                  )}
                  title={isSidebarCollapsed ? item.label : undefined}
                >
                  <item.icon className={cn(
                    "h-5 w-5 transition-colors",
                    activeView === item.key ? "text-cyan-300" : "text-slate-400 group-hover:text-cyan-300"
                  )} />
                  {!isSidebarCollapsed && <span className="truncate">{item.label}</span>}
                </button>
              </li>
            ))}
          </ul>
          <div className="p-3 border-t border-slate-800/60">
            {isSidebarCollapsed ? (
              <div className="flex flex-col items-center gap-2">
                <div className="p-[2px] rounded-full bg-gradient-to-r from-cyan-400 to-purple-500">
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-900">
                    <img src="/AI-In-Algorithmic-Trading.jpg" alt="Profile" className="w-full h-full object-cover" />
                  </div>
                </div>
                <button
                  onClick={() => setIsSidebarCollapsed((prev) => !prev)}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-700/60 text-slate-300 hover:bg-slate-800/60 hover:text-cyan-300 transition-colors"
                  aria-label="Expand sidebar"
                >
                  <ChevronsRight className="h-5 w-5" />
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-[2px] rounded-full bg-gradient-to-r from-cyan-400 to-purple-500">
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-900">
                      <img src="/AI-In-Algorithmic-Trading.jpg" alt="Profile" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="leading-tight">
                    <p className="text-sm text-white">Guest User</p>
                    <p className="text-xs text-slate-400">Not connected</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsSidebarCollapsed((prev) => !prev)}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-700/60 text-slate-300 hover:bg-slate-800/60 hover:text-cyan-300 transition-colors"
                  aria-label="Collapse sidebar"
                >
                  <ChevronsLeft className="h-5 w-5" />
                </button>
              </div>
            )}
          </div>
        </nav>
      </aside>

      {/* Content */}
      <div className={cn("pt-24 lg:pt-16 min-h-screen transition-all px-4 sm:px-6 md:px-8", isSidebarCollapsed ? "lg:pl-16" : "lg:pl-64")}> 

        {renderContent()}
      </div>
    </>
  )
}
