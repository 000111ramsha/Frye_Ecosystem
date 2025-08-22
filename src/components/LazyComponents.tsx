// Converted from lazy loading to direct imports for stability
// All dynamic imports removed to prevent webpack module loading issues

// Direct imports of dashboard components
export { default as DashboardOverview } from './dashboard/DashboardOverview'
export { default as IdeaSubmissionContent } from './dashboard/IdeaSubmissionContent'
export { default as InnovationVaultContent } from './dashboard/InnovationVaultContent'
export { default as SnapshotDAOContent } from './dashboard/SnapshotDAOContent'
export { default as TokenDashboardContent } from './dashboard/TokenDashboardContent'

// Direct imports of documentation components
export { default as TokenEconomicsSection } from './docs/TokenEconomicsSection'
export { default as RespectFeeSection } from './docs/RespectFeeSection'

// Note: All lazy loading and dynamic imports have been removed for stability
// Performance can be optimized later once the core functionality is working