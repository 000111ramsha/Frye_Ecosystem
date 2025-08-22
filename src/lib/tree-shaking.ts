/**
 * Simplified imports for the FRYE Ecosystem
 * All dynamic imports removed for stability
 */

// Direct icon imports from lucide-react
export {
  ArrowRight,
  Coins,
  Shield,
  Vote,
  Zap,
  Globe,
  Brain,
  Network,
  Star,
  TrendingUp,
  Sparkles,
  Users,
  Layers,
  Menu,
  X,
  Wallet,
  ExternalLink,
  FileText,
  Handshake,
  Home,
  Settings,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'

// Direct UI component imports
export { Button } from '@/components/ui/button'
export { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
export { Badge } from '@/components/ui/badge'
export { Progress } from '@/components/ui/progress'
export { Input } from '@/components/ui/input'
export { Textarea } from '@/components/ui/textarea'
export { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

// Note: All dynamic imports and lazy loading removed for maximum stability
// Components are now loaded directly to prevent webpack module issues