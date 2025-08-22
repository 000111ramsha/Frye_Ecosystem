import dynamic from 'next/dynamic'
import { ComponentType } from 'react'

// Lazy load dashboard components
export const DashboardOverview = dynamic(() => import('./dashboard/DashboardOverview'), {
  loading: () => <div className="flex items-center justify-center h-64 text-slate-400">Loading...</div>,
  ssr: false
})

export const IdeaSubmissionContent = dynamic(() => import('./dashboard/IdeaSubmissionContent'), {
  loading: () => <div className="flex items-center justify-center h-64 text-slate-400">Loading...</div>,
  ssr: false
})

export const InnovationVaultContent = dynamic(() => import('./dashboard/InnovationVaultContent'), {
  loading: () => <div className="flex items-center justify-center h-64 text-slate-400">Loading...</div>,
  ssr: false
})

export const SnapshotDAOContent = dynamic(() => import('./dashboard/SnapshotDAOContent'), {
  loading: () => <div className="flex items-center justify-center h-64 text-slate-400">Loading...</div>,
  ssr: false
})

export const TokenDashboardContent = dynamic(() => import('./dashboard/TokenDashboardContent'), {
  loading: () => <div className="flex items-center justify-center h-64 text-slate-400">Loading...</div>,
  ssr: false
})

// Lazy load documentation components
export const TokenEconomicsSection = dynamic(() => import('./docs/TokenEconomicsSection'), {
  loading: () => <div className="flex items-center justify-center h-32 text-slate-400">Loading...</div>,
  ssr: false
})

export const RespectFeeSection = dynamic(() => import('./docs/RespectFeeSection'), {
  loading: () => <div className="flex items-center justify-center h-32 text-slate-400">Loading...</div>,
  ssr: false
})
