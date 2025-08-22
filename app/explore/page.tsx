"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import {
  Search,
  Filter,
  Grid3X3,
  List,
  TrendingUp,
  TrendingDown,
  Sparkles,
  Brain,
  Dna,
  Zap,
  Cpu,
  DollarSign,
  Heart,
  Building,
  Lightbulb,
  Rocket,
  Globe,
  Atom,
  Microscope,
  Car,
  Home,
  ShoppingCart,
  Music,
  Palette,
  Camera,
  Gamepad2,
  Leaf,
  Shield,
  Waves,
  Calendar,
  Star,
  Eye,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  ExternalLink,
  ChevronDown,
  Users,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Bookmark,
  Share2,
  MoreHorizontal,
  TrendingUp as Fire,
  Award,
  CheckCircle2 as Verified,
  Timer,
  Activity,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface IdeaCollection {
  id: string
  name: string
  creator: string
  description: string
  floorPrice: number
  volume: number
  change: number
  itemCount: number
  image: string
  verified: boolean
}

interface TrendingIdea {
  id: string
  name: string
  symbol: string
  price: number
  change: number
  volume: number
  image: string
}

interface FeaturedDrop {
  id: string
  title: string
  creator: string
  description: string
  launchDate: string
  image: string
  category: string
}

interface TopMover {
  id: string
  title: string
  creator: string
  floorPrice: number
  change: number
  volume: number
  image: string
}

interface CreatorProfile {
  id: string
  name: string
  avatar: string
  totalIdeas: number
  floorPrice: number
  change: number
  verified: boolean
  rank: number
}

interface HeroIdea {
  id: string
  title: string
  creator: string
  description: string
  floorPrice: number
  totalVolume: number
  items: number
  listed: number
  change: number
  image: string
  icon: React.ComponentType<{ className?: string }>
  category: string
  verified: boolean
}

// Sample data with real internet images
const heroIdeas: HeroIdea[] = [
  {
    id: "1",
    title: "BioTech Innovations",
    creator: "Dr. Sarah Chen",
    description: "Revolutionary gene editing and biotech concepts transforming medicine and longevity research",
    floorPrice: 3.62,
    totalVolume: 358.4,
    items: 9999,
    listed: 4.4,
    change: -11.7,
    image: "/digital-identity-blockchain.png",
    icon: Dna,
    category: "Biotechnology",
    verified: true
  },
  {
    id: "2",
    title: "Quantum Computing Systems",
    creator: "Dr. Michael Torres",
    description: "Next-generation quantum algorithms and computing architectures for solving complex problems",
    floorPrice: 12.79,
    totalVolume: 892.1,
    items: 3200,
    listed: 8.2,
    change: 15.3,
    image: "/quantum-computing-abstract.png",
    icon: Atom,
    category: "Quantum Computing",
    verified: true
  },
  {
    id: "3",
    title: "AI Neural Networks",
    creator: "Neural Labs Collective",
    description: "Advanced artificial intelligence systems and neural network innovations",
    floorPrice: 11.59,
    totalVolume: 1250.8,
    items: 5000,
    listed: 6.1,
    change: 12.4,
    image: "/AI-In-Algorithmic-Trading.jpg",
    icon: Brain,
    category: "Artificial Intelligence",
    verified: true
  },
  {
    id: "4",
    title: "Climate Solutions Hub",
    creator: "EcoTech Collective",
    description: "Sustainable technology and green innovations for environmental challenges",
    floorPrice: 47.40,
    totalVolume: 2100.5,
    items: 12500,
    listed: 3.8,
    change: 48.7,
    image: "/sustainable-energy-solutions.jpg",
    icon: Leaf,
    category: "Environmental Tech",
    verified: true
  },
  {
    id: "5",
    title: "Space Exploration Tech",
    creator: "Cosmos Innovations",
    description: "Aerospace engineering and space exploration breakthrough concepts",
    floorPrice: 0.03,
    totalVolume: 675.2,
    items: 1800,
    listed: 12.5,
    change: -8.2,
    image: "/predictive-insights.png",
    icon: Rocket,
    category: "Aerospace",
    verified: true
  }
]

const creatorProfiles: CreatorProfile[] = [
  {
    id: "1",
    name: "BioTech Innovations",
    avatar: "/digital-identity-blockchain.png",
    totalIdeas: 9999,
    floorPrice: 3.62,
    change: 11.7,
    verified: true,
    rank: 1
  },
  {
    id: "2",
    name: "Quantum Research Labs",
    avatar: "/quantum-computing-abstract.png",
    totalIdeas: 3200,
    floorPrice: 12.79,
    change: 0.8,
    verified: true,
    rank: 2
  },
  {
    id: "3",
    name: "Neural AI Collective",
    avatar: "/AI-In-Algorithmic-Trading.jpg",
    totalIdeas: 5000,
    floorPrice: 11.59,
    change: 1.7,
    verified: true,
    rank: 3
  },
  {
    id: "4",
    name: "Climate Tech Solutions",
    avatar: "/sustainable-energy-solutions.jpg",
    totalIdeas: 12500,
    floorPrice: 47.40,
    change: -0.2,
    verified: true,
    rank: 4
  },
  {
    id: "5",
    name: "Space Innovation Labs",
    avatar: "/predictive-insights.png",
    totalIdeas: 1800,
    floorPrice: 0.03,
    change: 0,
    verified: true,
    rank: 5
  },
  {
    id: "6",
    name: "Fusion Energy Research",
    avatar: "/sustainable-energy-solutions.jpg",
    totalIdeas: 2400,
    floorPrice: 1.48,
    change: 4.5,
    verified: true,
    rank: 6
  }
]

const featuredCollections: IdeaCollection[] = [
  {
    id: "1",
    name: "BioTech Innovations",
    creator: "Dr. Sarah Chen",
    description: "Revolutionary gene editing and biotech concepts",
    floorPrice: 0.0309,
    volume: 358.4,
    change: -17.7,
    itemCount: 9999,
    image: "/digital-identity-blockchain.png",
    verified: true
  },
  {
    id: "2",
    name: "AI Future Systems",
    creator: "Neural Labs",
    description: "Next-gen artificial intelligence architectures",
    floorPrice: 0.002,
    volume: 750.2,
    change: 15.3,
    itemCount: 5000,
    image: "/AI-In-Algorithmic-Trading.jpg",
    verified: true
  },
  {
    id: "3",
    name: "Climate Solutions",
    creator: "EcoTech Collective",
    description: "Sustainable technology and green innovations",
    floorPrice: 0.0062,
    volume: 1250.8,
    change: 48.7,
    itemCount: 12500,
    image: "/sustainable-energy-solutions.jpg",
    verified: true
  },
  {
    id: "4",
    name: "Space Tech Concepts",
    creator: "Cosmos Innovations",
    description: "Aerospace and space exploration ideas",
    floorPrice: 0.015,
    volume: 892.1,
    change: 12.4,
    itemCount: 3200,
    image: "/predictive-insights.png",
    verified: true
  }
]

const trendingIdeas: TrendingIdea[] = [
  {
    id: "1",
    name: "Quantum Neural Network",
    symbol: "QNN",
    price: 89.95,
    change: -38.4,
    volume: 1250000,
    image: "/quantum-computing-abstract.png"
  },
  {
    id: "2",
    name: "CRISPR Longevity Protocol",
    symbol: "CLP",
    price: 9.32,
    change: 58.1,
    volume: 890000,
    image: "/digital-identity-blockchain.png"
  },
  {
    id: "3",
    name: "Fusion Energy Cell",
    symbol: "FEC",
    price: 1.78,
    change: 36.8,
    volume: 2100000,
    image: "/sustainable-energy-solutions.jpg"
  },
  {
    id: "4",
    name: "Neural Interface",
    symbol: "NIN",
    price: 89.92,
    change: 32.9,
    volume: 675000,
    image: "/AI-In-Algorithmic-Trading.jpg"
  },
  {
    id: "5",
    name: "Bioprinter 3D",
    symbol: "B3D",
    price: 1.70,
    change: 30.4,
    volume: 1800000,
    image: "/digital-identity-blockchain.png"
  },
  {
    id: "6",
    name: "Synthetic Biology",
    symbol: "SYN",
    price: 89.92,
    change: 21.4,
    volume: 920000,
    image: "/intelligent-analysis.png"
  },
  {
    id: "7",
    name: "Smart Materials",
    symbol: "SMT",
    price: 45.67,
    change: 18.9,
    volume: 756000,
    image: "/quantum-computing-abstract.png"
  },
  {
    id: "8",
    name: "Nano Robotics",
    symbol: "NRB",
    price: 23.45,
    change: 15.2,
    volume: 1420000,
    image: "/collaborative-tools.png"
  },
  {
    id: "9",
    name: "Ocean Mining",
    symbol: "OMN",
    price: 156.78,
    change: 12.7,
    volume: 892000,
    image: "/governance.png"
  },
  {
    id: "10",
    name: "Holographic Display",
    symbol: "HDI",
    price: 78.23,
    change: 8.4,
    volume: 634000,
    image: "/AI-In-Algorithmic-Trading.jpg"
  },
  {
    id: "11",
    name: "Blockchain Identity",
    symbol: "BID",
    price: 34.56,
    change: -5.2,
    volume: 987000,
    image: "/distributed-security.png"
  },
  {
    id: "12",
    name: "Memory Enhancement",
    symbol: "MEM",
    price: 67.89,
    change: -12.1,
    volume: 543000,
    image: "/digital-identity-blockchain.png"
  }
]

const featuredDrops: FeaturedDrop[] = [
  {
    id: "1",
    title: "Quantum Computing Breakthrough",
    creator: "Quantum Labs",
    description: "Revolutionary quantum algorithm concepts",
    launchDate: "August 21 at 6:00 AM PDT",
    image: "/quantum-computing-abstract.png",
    category: "Technology"
  },
  {
    id: "2",
    title: "The Gene Collection",
    creator: "BioGenesis",
    description: "Next-generation CRISPR applications",
    launchDate: "August 21 at 10:00 AM PDT",
    image: "/digital-identity-blockchain.png",
    category: "Biotechnology"
  },
  {
    id: "3",
    title: "Solar Revolution",
    creator: "SolarTech Inc",
    description: "Advanced photovoltaic innovations",
    launchDate: "August 26 at 12:00 PM PDT",
    image: "/sustainable-energy-solutions.jpg",
    category: "Energy"
  },
  {
    id: "4",
    title: "Mars Colony Blueprint",
    creator: "Space Pioneers",
    description: "Comprehensive Mars settlement concepts",
    launchDate: "September 1 at 2:00 PM PDT",
    image: "/predictive-insights.png",
    category: "Aerospace"
  },
  {
    id: "5",
    title: "Neural Enhancement Suite",
    creator: "CogniTech",
    description: "Brain-computer interface innovations",
    launchDate: "September 5 at 8:00 AM PDT",
    image: "/AI-In-Algorithmic-Trading.jpg",
    category: "Neuroscience"
  },
  {
    id: "6",
    title: "Ocean Cleanup Systems",
    creator: "AquaTech",
    description: "Advanced marine pollution solutions",
    launchDate: "September 10 at 11:00 AM PDT",
    image: "/governance.png",
    category: "Environmental"
  },
  {
    id: "7",
    title: "Fusion Power Core",
    creator: "Energy Dynamics",
    description: "Compact fusion reactor designs",
    launchDate: "September 15 at 3:00 PM PDT",
    image: "/sustainable-energy-solutions.jpg",
    category: "Energy"
  },
  {
    id: "8",
    title: "Smart City Infrastructure",
    creator: "UrbanTech",
    description: "IoT-enabled city management systems",
    launchDate: "September 20 at 9:00 AM PDT",
    image: "/rapid-iteration.png",
    category: "Smart Cities"
  }
]

const topMovers: TopMover[] = [
  {
    id: "1",
    title: "Regenerative Medicine",
    creator: "BioRegen Labs",
    floorPrice: 0.449,
    change: 173.1,
    volume: 2500000,
    image: "/digital-identity-blockchain.png"
  },
  {
    id: "2",
    title: "Crypto Algorithms",
    creator: "CryptoDev",
    floorPrice: 0.98,
    change: 102.8,
    volume: 1800000,
    image: "/distributed-security.png"
  },
  {
    id: "3",
    title: "AI Consciousness",
    creator: "Mind Tech",
    floorPrice: 0.005,
    change: 88.5,
    volume: 3200000,
    image: "/AI-In-Algorithmic-Trading.jpg"
  },
  {
    id: "4",
    title: "Molecular Assembly",
    creator: "NanoBuilder",
    floorPrice: 1.234,
    change: 76.4,
    volume: 1600000,
    image: "/collaborative-tools.png"
  },
  {
    id: "5",
    title: "Quantum Sensors",
    creator: "QuantumTech",
    floorPrice: 2.567,
    change: 64.2,
    volume: 1200000,
    image: "/quantum-computing-abstract.png"
  },
  {
    id: "6",
    title: "Carbon Capture",
    creator: "EcoSolutions",
    floorPrice: 0.789,
    change: 55.7,
    volume: 890000,
    image: "/sustainable-energy-solutions.jpg"
  }
]

const categories = [
  { name: "All", icon: Grid3X3, count: 0 },
  { name: "Biotechnology", icon: Dna, count: 12500 },
  { name: "AI & Machine Learning", icon: Brain, count: 8900 },
  { name: "Energy & Climate", icon: Zap, count: 6750 },
  { name: "Space Technology", icon: Rocket, count: 4200 },
  { name: "Quantum Computing", icon: Atom, count: 2800 },
  { name: "Healthcare", icon: Heart, count: 15600 },
  { name: "Finance & Crypto", icon: DollarSign, count: 9200 },
  { name: "Transportation", icon: Car, count: 5400 },
  { name: "Agriculture", icon: Leaf, count: 3600 },
  { name: "Manufacturing", icon: Building, count: 7800 }
]

export default function ExplorePage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [timeRange, setTimeRange] = useState("1d")
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0)
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("trending")
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [showFilters, setShowFilters] = useState(false)
  const [isClient, setIsClient] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    if (!isAutoPlay || !isClient) return
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroIdeas.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlay, isClient])

  const nextHero = () => {
    setCurrentHeroIndex((prev) => (prev + 1) % heroIdeas.length)
  }

  const prevHero = () => {
    setCurrentHeroIndex((prev) => (prev - 1 + heroIdeas.length) % heroIdeas.length)
  }

  const currentIdea = heroIdeas[currentHeroIndex]
  const IconComponent = currentIdea.icon

  // Don't render until client-side hydration is complete
  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="flex items-center justify-center h-screen">
          <div className="text-white">Loading...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Enhanced Header with search and stats */}
      <div className="relative px-4 pt-20 pb-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Stats Bar */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-6 p-3 bg-slate-900/50 backdrop-blur-xl rounded-xl border border-slate-700/50">
            <div className="text-center">
              <div className="text-xl font-bold text-cyan-400">12.7M+</div>
              <div className="text-xs text-slate-400">Innovations Minted</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-purple-400">$2.4B</div>
              <div className="text-xs text-slate-400">Total Volume</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-green-400">50K+</div>
              <div className="text-xs text-slate-400">Active Creators</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-orange-400">75+</div>
              <div className="text-xs text-slate-400">Innovation Sectors</div>
            </div>
          </div>

          {/* Enhanced Search and filters bar */}
          <div className="flex flex-col lg:flex-row items-center justify-between mb-8 gap-4">
            <div className="flex items-center space-x-4 w-full lg:w-auto">
              <div className="relative flex-1 lg:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search ideas across 75+ sectors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-800/80 backdrop-blur border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
                />
                {searchQuery && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white"
                  >
                    ×
                  </Button>
                )}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="border-slate-700 text-slate-300 hover:bg-slate-800 transition-all duration-300"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
                {showFilters && <ChevronDown className="h-4 w-4 ml-2 rotate-180 transition-transform" />}
              </Button>
            </div>

            <div className="flex items-center space-x-2">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40 bg-slate-800/80 border-slate-700 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700">
                  <SelectItem value="trending">🔥 Trending</SelectItem>
                  <SelectItem value="newest">⭐ Newest</SelectItem>
                  <SelectItem value="price-high">💰 Price: High</SelectItem>
                  <SelectItem value="price-low">💸 Price: Low</SelectItem>
                  <SelectItem value="volume">📈 Volume</SelectItem>
                </SelectContent>
              </Select>

              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className={viewMode === "grid" ? "bg-cyan-600 hover:bg-cyan-700" : "border-slate-700 text-slate-300 hover:bg-slate-800"}
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
                className={viewMode === "list" ? "bg-cyan-600 hover:bg-cyan-700" : "border-slate-700 text-slate-300 hover:bg-slate-800"}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Advanced Filters Panel */}
          {showFilters && (
            <div className="mb-8 p-6 bg-slate-900/70 backdrop-blur-xl rounded-2xl border border-slate-700/50 animate-in slide-in-from-top-2 duration-300">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="text-sm font-medium text-slate-300 mb-2 block">Price Range</label>
                  <Select>
                    <SelectTrigger className="bg-slate-800 border-slate-600 text-white">
                      <SelectValue placeholder="Any price" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-slate-700">
                      <SelectItem value="any">Any price</SelectItem>
                      <SelectItem value="under-1">Under 1 FRYE</SelectItem>
                      <SelectItem value="1-10">1-10 FRYE</SelectItem>
                      <SelectItem value="10-100">10-100 FRYE</SelectItem>
                      <SelectItem value="over-100">Over 100 FRYE</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-300 mb-2 block">Status</label>
                  <Select>
                    <SelectTrigger className="bg-slate-800 border-slate-600 text-white">
                      <SelectValue placeholder="All status" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-slate-700">
                      <SelectItem value="all">All status</SelectItem>
                      <SelectItem value="live">🔴 Live</SelectItem>
                      <SelectItem value="upcoming">⏰ Upcoming</SelectItem>
                      <SelectItem value="sold-out">✅ Sold Out</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-300 mb-2 block">Blockchain</label>
                  <Select>
                    <SelectTrigger className="bg-slate-800 border-slate-600 text-white">
                      <SelectValue placeholder="All chains" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-slate-700">
                      <SelectItem value="all">All chains</SelectItem>
                      <SelectItem value="polygon">Polygon</SelectItem>
                      <SelectItem value="ethereum">Ethereum</SelectItem>
                      <SelectItem value="bitcoin">Bitcoin</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-300 mb-2 block">Verification</label>
                  <Select>
                    <SelectTrigger className="bg-slate-800 border-slate-600 text-white">
                      <SelectValue placeholder="All items" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-slate-700">
                      <SelectItem value="all">All items</SelectItem>
                      <SelectItem value="verified">✅ Verified only</SelectItem>
                      <SelectItem value="unverified">Unverified</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Enhanced Hero Section with Carousel + Sidebar */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left: Enhanced Hero Carousel */}
            <div className="flex-1">
              <div className="relative bg-gradient-to-r from-slate-900/90 to-blue-900/90 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden group">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={currentIdea.image}
                    alt={currentIdea.title}
                    fill
                    className="object-cover opacity-30 transition-all duration-700 group-hover:opacity-40 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-transparent" />
                </div>

                {/* Carousel Controls */}
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={prevHero}
                    className="bg-slate-900/80 border-slate-700 text-white hover:bg-slate-800 hover:border-cyan-500 rounded-full p-3 transition-all duration-300 hover:scale-110"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                </div>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={nextHero}
                    className="bg-slate-900/80 border-slate-700 text-white hover:bg-slate-800 hover:border-cyan-500 rounded-full p-3 transition-all duration-300 hover:scale-110"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>

                {/* Auto-play Control */}
                <div className="absolute top-4 right-4 z-10">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsAutoPlay(!isAutoPlay)}
                    className="bg-slate-900/80 border-slate-700 text-white hover:bg-slate-800 rounded-full p-2 transition-all duration-300"
                  >
                    {isAutoPlay ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </Button>
                </div>

                {/* Enhanced Carousel Dots */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
                  {heroIdeas.map((idea, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentHeroIndex(index)}
                      className={`group relative transition-all duration-300 ${
                        index === currentHeroIndex ? 'w-12 h-3' : 'w-3 h-3'
                      }`}
                    >
                      <div className={`w-full h-full rounded-full transition-all duration-300 ${
                        index === currentHeroIndex
                          ? 'bg-gradient-to-r from-cyan-400 to-purple-400'
                          : 'bg-slate-600 hover:bg-slate-500 group-hover:scale-125'
                      }`} />
                      {index === currentHeroIndex && (
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse opacity-50" />
                      )}
                    </button>
                  ))}
                </div>

                {/* Enhanced Content */}
                <div className="relative p-6 lg:p-8">
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-500/30 px-3 py-1">
                          <Fire className="h-3 w-3 mr-1" />
                          Featured Collection
                        </Badge>
                        {currentIdea.verified && (
                          <Badge className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border border-green-500/30 px-3 py-1">
                            <Verified className="h-3 w-3 mr-1" />
                            Verified
                          </Badge>
                        )}
                        <Badge className="bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-300 border border-orange-500/30 px-3 py-1">
                          <Award className="h-3 w-3 mr-1" />
                          Top Rated
                        </Badge>
                      </div>

                      <h1 className="text-3xl lg:text-4xl font-bold text-white mb-3 transition-all duration-500 leading-tight">
                        {currentIdea.title}
                      </h1>

                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 p-0.5">
                          <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                            <IconComponent className="h-3 w-3 text-cyan-400" />
                          </div>
                        </div>
                        <span className="text-base text-slate-300 font-medium">By {currentIdea.creator}</span>
                        <Badge className="bg-slate-700/50 text-slate-300 text-xs">
                          {currentIdea.category}
                        </Badge>
                      </div>

                      <p className="text-base text-slate-300 mb-4 max-w-2xl transition-all duration-500 leading-relaxed">
                        {currentIdea.description}
                      </p>

                      {/* Enhanced Stats Grid */}
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                        <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700/50">
                          <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">Floor Price</p>
                          <p className="text-lg font-bold text-white">{currentIdea.floorPrice} FRYE</p>
                          <div className={`flex items-center gap-1 text-xs ${currentIdea.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                            {currentIdea.change >= 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                            {currentIdea.change >= 0 ? '+' : ''}{currentIdea.change}%
                          </div>
                        </div>
                        <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700/50">
                          <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">Total Volume</p>
                          <p className="text-lg font-bold text-white">{currentIdea.totalVolume}K</p>
                          <p className="text-xs text-slate-400">FRYE</p>
                        </div>
                        <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700/50">
                          <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">Items</p>
                          <p className="text-lg font-bold text-white">{currentIdea.items.toLocaleString()}</p>
                          <p className="text-xs text-slate-400">Total supply</p>
                        </div>
                        <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700/50">
                          <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">Listed</p>
                          <p className="text-lg font-bold text-white">{currentIdea.listed}%</p>
                          <p className="text-xs text-slate-400">Available</p>
                        </div>
                      </div>

                      {/* Action buttons removed */}
                    </div>

                                         {/* Visual elements removed */}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Enhanced Collections Sidebar */}
            <div className="w-full lg:w-80">
              <Card className="bg-slate-900/70 backdrop-blur-xl border border-slate-700/50 shadow-2xl">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-base font-semibold text-white flex items-center gap-2">
                      <Fire className="h-4 w-4 text-orange-400" />
                     Collections
                    </h3>
                    <Badge className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-500/30 text-xs">
                      24h
                    </Badge>
                  </div>

                  <div className="space-y-2">
                    {creatorProfiles.map((profile, index) => (
                      <div key={profile.id} className="group hover:bg-slate-800/50 p-2 rounded-lg transition-all duration-300 cursor-pointer border border-transparent hover:border-slate-600/50">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="relative">
                              <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-slate-600 group-hover:border-cyan-500/50 transition-colors duration-300">
                                <Image
                                  src={profile.avatar}
                                  alt={profile.name}
                                  width={32}
                                  height={32}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="absolute -top-1 -right-1 w-4 h-4 bg-slate-800 rounded-full flex items-center justify-center border border-slate-600">
                                <span className="text-xs font-bold text-cyan-400">#{profile.rank}</span>
                              </div>
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <h4 className="font-medium text-white text-xs group-hover:text-cyan-300 transition-colors truncate max-w-24">
                                  {profile.name}
                                </h4>
                                {profile.verified && (
                                  <Verified className="h-3 w-3 text-blue-400" />
                                )}
                              </div>
                              <p className="text-xs text-slate-400">
                                {profile.totalIdeas.toLocaleString()} items
                              </p>
                            </div>
                          </div>

                          <div className="text-right">
                            <p className="font-semibold text-white text-xs">
                              {profile.floorPrice} FRYE
                            </p>
                            <div className={`flex items-center gap-1 text-xs ${
                              profile.change >= 0 ? 'text-green-400' : 'text-red-400'
                            }`}>
                              {profile.change >= 0 ? (
                                <TrendingUp className="h-3 w-3" />
                              ) : (
                                <TrendingDown className="h-3 w-3" />
                              )}
                              <span>
                                {profile.change >= 0 ? '+' : ''}{profile.change}%
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-700/50">
                    <Button variant="outline" className="w-full border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-cyan-500 transition-all duration-300 group">
                      <TrendingUp className="h-4 w-4 mr-2 group-hover:text-cyan-400 transition-colors" />
                      View All Collections
                      <ArrowUpRight className="h-4 w-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>


            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 pt-8 pb-8">
        {/* Top Collections */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">Featured Collections</h2>
          <div className="flex items-center gap-3">
            <p className="text-slate-400 text-xs">Innovation Floor Price change in the past day</p>
            <div className="flex border border-slate-700 rounded-lg">
              {["1d", "7d", "30d"].map((range) => (
                <Button
                  key={range}
                  variant={timeRange === range ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setTimeRange(range)}
                  className={`rounded-none first:rounded-l-lg last:rounded-r-lg ${
                    timeRange === range 
                      ? "bg-cyan-600 text-white" 
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {range}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Collections ranking list */}
        <div className="grid gap-3 mb-8">
          {featuredCollections.map((collection, index) => (
            <Card key={collection.id} className="bg-slate-900/70 backdrop-blur border border-slate-700/50 hover:border-slate-600 transition-colors">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="text-lg font-bold text-slate-400 w-6 text-center">
                    {index + 1}
                  </div>
                  
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 p-0.5">
                      <div className="w-full h-full rounded-md bg-slate-800 flex items-center justify-center">
                        {index === 0 && <Dna className="h-6 w-6 text-cyan-400" />}
                        {index === 1 && <Brain className="h-6 w-6 text-purple-400" />}
                        {index === 2 && <Leaf className="h-6 w-6 text-green-400" />}
                        {index === 3 && <Rocket className="h-6 w-6 text-orange-400" />}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-base font-semibold text-white">{collection.name}</h3>
                        {collection.verified && (
                          <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 text-xs">
                            ✓
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-slate-400">Floor price: {collection.floorPrice.toFixed(4)} FRYE —</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="flex items-center gap-2 justify-end mb-1">
                      <span className="text-lg font-bold text-white">
                        {collection.floorPrice.toFixed(2)} FRYE
                      </span>
                      <div className={`flex items-center gap-1 ${
                        collection.change >= 0 ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {collection.change >= 0 ? (
                          <ArrowUpRight className="h-4 w-4" />
                        ) : (
                          <ArrowDownRight className="h-4 w-4" />
                        )}
                        <span className="text-sm font-medium">
                          {Math.abs(collection.change).toFixed(1)}%
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-slate-400">
                      {collection.volume.toFixed(1)}K FRYE volume
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Trending Ideas */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <Fire className="h-6 w-6 text-orange-400" />
                Trending Ideas
              </h2>
              <p className="text-slate-400 text-sm">Largest price change in the past hour</p>
            </div>
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-orange-500 transition-all duration-300">
              <Timer className="h-4 w-4 mr-2" />
              View All Trending
            </Button>
          </div>

          <div className="relative">
            <div className="flex overflow-x-auto pb-4 gap-4 scrollbar-hide">
              {trendingIdeas.map((idea, index) => (
                <Card key={idea.id} className="bg-slate-900/70 backdrop-blur-xl border border-slate-700/50 hover:border-slate-600 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 flex-shrink-0 w-64 group cursor-pointer">
                  <CardContent className="p-0">
                    <div className="relative h-24 overflow-hidden rounded-t-lg">
                      <Image
                        src={idea.image}
                        alt={idea.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                      <div className="absolute top-2 left-2">
                        <Badge className={`${
                          idea.change >= 0
                            ? 'bg-green-500/20 text-green-300 border-green-500/30'
                            : 'bg-red-500/20 text-red-300 border-red-500/30'
                        } text-xs`}>
                          {idea.change >= 0 ? '🔥 Hot' : '📉 Dip'}
                        </Badge>
                      </div>
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-slate-800/80 text-slate-300 text-xs">
                          #{index + 1}
                        </Badge>
                      </div>
                    </div>

                    <div className="p-3">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-white text-sm group-hover:text-cyan-300 transition-colors">
                              {idea.name}
                            </h3>
                            <Badge className="bg-slate-700/50 text-slate-300 text-xs">
                              {idea.symbol}
                            </Badge>
                          </div>
                          <p className="text-sm text-slate-400">
                            ${idea.price.toFixed(2)} FRYE
                          </p>
                        </div>

                        <div className={`flex items-center gap-1 px-2 py-1 rounded-lg ${
                          idea.change >= 0
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-red-500/20 text-red-400'
                        }`}>
                          {idea.change >= 0 ? (
                            <TrendingUp className="h-4 w-4" />
                          ) : (
                            <TrendingDown className="h-4 w-4" />
                          )}
                          <span className="font-semibold text-sm">
                            {idea.change >= 0 ? '+' : ''}{idea.change.toFixed(1)}%
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span>Volume: {idea.volume.toLocaleString()}</span>
                        <div className="flex items-center gap-1">
                          <Activity className="h-3 w-3" />
                          <span>24h</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Featured Drops */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <Star className="h-6 w-6 text-yellow-400" />
                Featured Drops
              </h2>
              <p className="text-slate-400 text-sm">This week's curated live and upcoming drops</p>
            </div>
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-yellow-500 transition-all duration-300">
              <Calendar className="h-4 w-4 mr-2" />
              View Calendar
            </Button>
          </div>

          <div className="relative">
            <div className="flex overflow-x-auto pb-4 gap-4 scrollbar-hide">
              {featuredDrops.map((drop, index) => (
                <Card key={drop.id} className="bg-slate-900/70 backdrop-blur-xl border border-slate-700/50 hover:border-slate-600 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 group overflow-hidden flex-shrink-0 w-64 cursor-pointer">
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={drop.image}
                      alt={drop.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />

                    <div className="absolute top-3 left-3">
                      <Badge className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30 px-2 py-1 text-xs">
                        {drop.category}
                      </Badge>
                    </div>

                    <div className="absolute top-3 right-3">
                      <Badge className={`${
                        index < 2
                          ? 'bg-red-500/20 text-red-300 border-red-500/30'
                          : 'bg-blue-500/20 text-blue-300 border-blue-500/30'
                      } px-2 py-1 text-xs`}>
                        {index < 2 ? '🔴 Live' : '⏰ Soon'}
                      </Badge>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="flex items-center gap-2 text-white/90 text-xs">
                        <Calendar className="h-3 w-3" />
                        <span>{drop.launchDate}</span>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <h3 className="font-bold text-white mb-2 group-hover:text-purple-300 transition-colors text-base">
                      {drop.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 p-0.5">
                        <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                          <Users className="h-3 w-3 text-purple-400" />
                        </div>
                      </div>
                      <span className="text-sm text-slate-300 font-medium">{drop.creator}</span>
                    </div>
                    <p className="text-sm text-slate-400 mb-4 line-clamp-2">
                      {drop.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Eye className="h-4 w-4 text-slate-400" />
                        <span className="text-xs text-slate-400">
                          {Math.floor(Math.random() * 1000) + 500} watching
                        </span>
                      </div>
                      <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-4 py-2 text-xs font-semibold transition-all duration-300">
                        {index < 2 ? 'Join Drop' : 'Set Reminder'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Top Movers Today */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-white mb-2">Top Movers Today</h2>
          <p className="text-slate-400 text-sm mb-4">Largest floor price change in the past day</p>
          
          <div className="relative">
            <div className="flex overflow-x-auto pb-4 gap-4 scrollbar-hide">
              {topMovers.map((mover) => (
                <Card key={mover.id} className="bg-slate-900/70 backdrop-blur border border-slate-700/50 hover:border-slate-600 transition-all duration-300 group overflow-hidden flex-shrink-0 w-56">
                  <div className="relative h-32 bg-gradient-to-br from-green-500/20 to-emerald-600/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <TrendingUp className="h-8 w-8 text-green-400" />
                    </div>
                  </div>
                  <CardContent className="p-3">
                    <h3 className="font-semibold text-white text-sm mb-1 group-hover:text-green-300 transition-colors">
                      {mover.title}
                    </h3>
                    <p className="text-xs text-slate-400 mb-2">{mover.creator}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-slate-400">Floor price</p>
                        <p className="font-bold text-white text-sm">{mover.floorPrice.toFixed(3)} FRYE</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-green-400">
                          <TrendingUp className="h-3 w-3" />
                          <span className="font-bold text-sm">+{mover.change.toFixed(1)}%</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Trending Tokens */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-white mb-2">Trending Tokens</h2>
          <p className="text-slate-400 text-sm mb-4">Largest price change in the past day</p>
          
          <div className="relative">
            <div className="grid grid-cols-4 gap-3">
              {[
                { name: "The Invi...", symbol: "IGGT", price: 0.02, change: 83.8, icon: Shield, network: "solana" },
                { name: "FLOCK", symbol: "FLOCK", price: 0.26, change: 43.3, icon: Building, network: "ethereum" },
                { name: "GIZA", symbol: "GIZA", price: 0.33, change: 26.4, icon: Star, network: "ethereum" },
                { name: "OKB", symbol: "OKB", price: 199.81, change: 46.5, icon: Building, network: "ethereum" },
                { name: "Nob...", symbol: "NOBODY", price: 0.05, change: 27.7, icon: Users, network: "solana" },
                { name: "AU79", symbol: "AU79", price: 0.01, change: 18.2, icon: Award, network: "solana" }
              ].map((token, index) => (
                <Card key={index} className="bg-slate-900/70 backdrop-blur-xl border border-slate-700/50 hover:border-slate-600 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="relative">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                          <token.icon className="h-4 w-4 text-white" />
                        </div>
                        <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-sm ${
                          token.network === "solana" ? "bg-black" : "bg-blue-600"
                        } flex items-center justify-center`}>
                          {token.network === "solana" ? (
                            <div className="w-1.5 h-1.5 bg-white rounded-sm opacity-80"></div>
                          ) : (
                            <div className="w-1.5 h-1.5 bg-white rounded-sm opacity-80"></div>
                          )}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-white text-xs group-hover:text-cyan-300 transition-colors truncate">
                          {token.name}
                        </h3>
                        <p className="text-slate-400 text-xs">{token.symbol}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-bold text-white">${token.price}</p>
                      <div className={`flex items-center gap-1 px-1.5 py-0.5 rounded-md ${
                        token.change >= 0 ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                      }`}>
                        {token.change >= 0 ? (
                          <TrendingUp className="h-2.5 w-2.5" />
                        ) : (
                          <TrendingDown className="h-2.5 w-2.5" />
                        )}
                        <span className="font-semibold text-xs">
                          {token.change >= 0 ? '+' : ''}{token.change}%
                        </span>
                      </div>
                    </div>
                    
                    {/* Mini Graph Placeholder */}
                    <div className={`w-full h-6 rounded-md ${
                      token.change >= 0 ? 'bg-green-500/20' : 'bg-red-500/20'
                    } flex items-center justify-center`}>
                      <div className={`w-12 h-3 ${
                        token.change >= 0 ? 'bg-green-400' : 'bg-red-400'
                      } rounded-sm opacity-60`}></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant={selectedCategory === category.name ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.name)}
                className={`${
                  selectedCategory === category.name
                    ? "bg-cyan-600 text-white"
                    : "border-slate-700 text-slate-300 hover:border-slate-600"
                }`}
              >
                <category.icon className="h-4 w-4 mr-2" />
                {category.name}
                {category.count > 0 && (
                  <Badge className="ml-2 bg-slate-600 text-xs">
                    {category.count.toLocaleString()}
                  </Badge>
                )}
              </Button>
            ))}
          </div>
        </div>

        {/* Enhanced Explore Collections Grid */}
        <div className={`grid gap-4 ${
          viewMode === "grid"
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            : "grid-cols-1"
        }`}>
          {featuredCollections.map((collection, index) => (
            <Card key={collection.id} className={`bg-slate-900/70 backdrop-blur-xl border border-slate-700/50 hover:border-slate-600 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 group overflow-hidden cursor-pointer ${
              viewMode === "list" ? "flex flex-row" : ""
            }`}>
              <div className={`relative overflow-hidden ${
                viewMode === "list" ? "w-40 h-24" : "h-40"
              }`}>
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                <div className="absolute top-2 left-2">
                  {collection.verified && (
                    <Badge className="bg-blue-500/20 text-blue-300 border border-blue-500/30 px-2 py-1 text-xs">
                      <Verified className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>

                <div className="absolute top-2 right-2">
                  <Badge className="bg-slate-800/80 text-slate-300 text-xs px-2 py-1">
                    {collection.itemCount.toLocaleString()} items
                  </Badge>
                </div>

                <div className="absolute bottom-2 left-2 right-2">
                  <div className={`flex items-center gap-1 px-2 py-1 rounded-lg backdrop-blur-sm ${
                    collection.change >= 0
                      ? 'bg-green-500/20 text-green-300'
                      : 'bg-red-500/20 text-red-300'
                  }`}>
                    {collection.change >= 0 ? (
                      <TrendingUp className="h-3 w-3" />
                    ) : (
                      <TrendingDown className="h-3 w-3" />
                    )}
                    <span className="text-xs font-semibold">
                      {collection.change >= 0 ? '+' : ''}{collection.change.toFixed(1)}%
                    </span>
                    <span className="text-xs opacity-75 ml-1">24h</span>
                  </div>
                </div>
              </div>

              <CardContent className={`${viewMode === "list" ? "flex-1" : ""} p-4`}>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors text-base">
                      {collection.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 p-0.5">
                        <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                          <Users className="h-2.5 w-2.5 text-cyan-400" />
                        </div>
                      </div>
                      <span className="text-xs text-slate-300 font-medium">{collection.creator}</span>
                    </div>
                  </div>

                  <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white p-1">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>

                <p className="text-xs text-slate-400 mb-3 line-clamp-2">
                  {collection.description}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="bg-slate-800/50 rounded-lg p-2">
                    <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">Floor Price</p>
                    <p className="font-bold text-white text-sm">{collection.floorPrice.toFixed(4)} FRYE</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-2">
                    <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">Volume</p>
                    <p className="font-bold text-white text-sm">{collection.volume.toFixed(1)}K FRYE</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Activity className="h-3 w-3" />
                    <span>{Math.floor(Math.random() * 100) + 50} active</span>
                  </div>
                  <Button size="sm" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-4 py-2 text-xs font-semibold transition-all duration-300">
                    Explore
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Section */}
        <div className="text-center mt-8">
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white px-8 py-3 text-base font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/25"
          >
            <Sparkles className="h-4 w-4 mr-2" />
            Load More Collections
          </Button>
          <p className="text-slate-400 mt-3 text-sm">
            Showing 4 of 12,500+ collections
          </p>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 p-6 bg-gradient-to-r from-slate-900/90 to-blue-900/90 backdrop-blur-xl rounded-xl border border-slate-700/50">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-3">
              Stay Updated with FRYE Ecosystem
            </h3>
            <p className="text-slate-300 mb-4 text-sm">
              Get notified about new drops, trending collections, and exclusive opportunities in the innovation marketplace.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-slate-800/80 border-slate-700 text-white placeholder-slate-400"
              />
              <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-4 font-semibold">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}