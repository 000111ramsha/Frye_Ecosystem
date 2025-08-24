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
} from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

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
  

  
  const sidebarItems = [
    { key: "overview", label: "Overview", icon: Home },
    { key: "token-dashboard", label: "Token Dashboard", icon: Coins },
    { key: "innovation-vault", label: "Innovation Vault", icon: Shield },
    { key: "idea-submission", label: "Idea Submission", icon: Sparkles },
    { key: "snapshot-dao", label: "Snapshot DAO", icon: Vote },
    { key: "respect-fees", label: "Respect Fees", icon: Handshake },
    { key: "settings", label: "Settings", icon: Settings },
  ] as const

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
      {/* Sidebar */}
      <aside
        className={cn(
          "hidden md:block fixed left-0 top-16 bottom-0 bg-slate-950/95 backdrop-blur-xl border-r border-slate-800/50 shadow-xl transition-all duration-300",
          isSidebarCollapsed ? "w-16" : "w-64",
        )}
      >
        <nav className="h-full flex flex-col">
          <ul className="flex-1 py-4 space-y-1">
            {sidebarItems.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => setActiveView(item.key)}
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
      <div className={cn("pt-16 min-h-screen transition-all", isSidebarCollapsed ? "md:pl-16" : "md:pl-64")}> 

        {renderContent()}
      </div>
    </>
  )
}
