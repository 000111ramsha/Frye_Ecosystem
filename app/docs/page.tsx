"use client"

import React, { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Home,
  PlayCircle,
  Package,
  Shield,
  Code,
  Book,
  Lightbulb,
  Zap,
  Coins,
  FileText,
  Users,
  Settings,
  ChevronRight,
  ChevronDown,
  ExternalLink,
  Sparkles,
  Database,
  Globe,
  Lock,
  DollarSign,
  Handshake,
  Vote,
  TrendingUp,
  Brain,
  Dna,
  Palette,
  Gavel,
  Wallet,
  CreditCard,
  Image,
  ShoppingCart,
  Tag,
  Layers,
  Link2,
  Menu,
  X,
} from "lucide-react"
import Link from "next/link"

// Import documentation sections
import TokenEconomicsSection from "@/components/docs/TokenEconomicsSection"
import RespectFeeSection from "@/components/docs/RespectFeeSection"

interface DocSection {
  id: string
  title: string
  description: string
  icon: any
  color: string
  items?: { title: string; description: string; href: string }[]
}

interface SidebarItem {
  title: string
  icon: any
  href: string
  children?: { title: string; href: string }[]
}

interface SidebarSection {
  title: string
  items: SidebarItem[]
}

const docSections: DocSection[] = [
  {
    id: "quickstart",
    title: "Quickstart & Tutorials",
    description: "Explore our end-to-end tutorials and getting started guides for the FRYE Ecosystem platform.",
    icon: PlayCircle,
    color: "text-blue-500",
    items: [
      { title: "Getting Started", description: "Learn the basics of FRYE Ecosystem", href: "#getting-started" },
      { title: "First Innovation", description: "Mint your first idea as an NFT", href: "#first-innovation" },
      { title: "Token Management", description: "Understanding $FRYE tokens", href: "#token-management" },
    ]
  },
  {
    id: "ecosystem",
    title: "Ecosystem Components",
    description: "FRYE's comprehensive platform gives you a complete innovation management experience.",
    icon: Package,
    color: "text-purple-500",
    items: [
      { title: "AI-Overseer", description: "Powered by SuperGrok Heavy API", href: "#ai-overseer" },
      { title: "Innovation Vault", description: "Store and manage your IP assets", href: "#innovation-vault" },
      { title: "PromptX™", description: "AI-powered idea generation", href: "#promptx" },
    ]
  },
  {
    id: "security",
    title: "Security & Blockchain",
    description: "Security is the top concern of every feature we build. This documentation covers blockchain integration.",
    icon: Shield,
    color: "text-green-500",
    items: [
      { title: "Multi-Chain Support", description: "Ethereum, Polygon, and Bitcoin", href: "#multi-chain" },
      { title: "Smart Contracts", description: "Secure IP protection and royalties", href: "#smart-contracts" },
      { title: "Cryptographic Proof", description: "Immutable timestamping", href: "#crypto-proof" },
    ]
  },
  {
    id: "api",
    title: "API Reference",
    description: "Dig into our API reference documentation and SDKs for platform integration.",
    icon: Code,
    color: "text-orange-500",
    items: [
      { title: "REST API", description: "Complete API documentation", href: "#rest-api" },
      { title: "GraphQL", description: "Query language for APIs", href: "#graphql" },
      { title: "Webhooks", description: "Real-time event notifications", href: "#webhooks" },
    ]
  },
]



const sidebarSections: SidebarSection[] = [
  {
    title: "Core Concepts",
    items: [
      { 
        title: "NFTs", 
        icon: Image, 
        href: "#nfts",
        children: [
          { title: "What is an NFT?", href: "#what-is-nft" },
          { title: "What is minting?", href: "#what-is-minting" },
          { title: "How to buy an NFT", href: "#how-to-buy-nft" },
          { title: "How to sell an NFT", href: "#how-to-sell-nft" },
          { title: "Bitcoin ordinals", href: "#bitcoin-ordinals" },
          { title: "NFT ticketing", href: "#nft-ticketing" },
          { title: "Hybridization", href: "#hybridization" },
        ]
      },
      { 
        title: "Web3", 
        icon: Globe, 
        href: "#web3",
        children: [
          { title: "What is web3?", href: "#what-is-web3" },
          { title: "MetaMask wallet?", href: "#metamask-wallet" },
          { title: "Coinbase wallet?", href: "#coinbase-wallet" },
          { title: "What is a DAO?", href: "#what-is-dao" },
          { title: "Cryptocurrency?", href: "#what-is-cryptocurrency" },
          { title: "Crypto wallet?", href: "#what-is-crypto-wallet" },
        ]
      },
      { 
        title: "Blockchain", 
        icon: Layers, 
        href: "#blockchain",
        children: [
          { title: "What is blockchain?", href: "#what-is-blockchain" },
          { title: "What blockchains are compatible with FRYE Ecosystem?", href: "#compatible-blockchains" },
          { title: "What is polygon?", href: "#what-is-polygon" },
          { title: "What is Ethereum?", href: "#what-is-ethereum" },
          { title: "What is Bitcoin?", href: "#what-is-bitcoin" },
        ]
      },
    ]
  },
  {
    title: "Platform Features",
    items: [
      { title: "Introduction", icon: Home, href: "#introduction" },
      { title: "Getting Started", icon: PlayCircle, href: "#getting-started" },
      { title: "$FRYE Token", icon: Coins, href: "#frye-token" },
      { title: "PromptX™", icon: Sparkles, href: "#promptx" },
      { title: "CRISPR Vault", icon: Dna, href: "#crispr-vault" },
      { title: "Respect Fee Protocol", icon: Handshake, href: "#respect-fee" },
      { title: "Snapshot DAO", icon: Vote, href: "#governance" },
      { title: "AI NationVerse", icon: Globe, href: "#ai-nationverse" },
    ]
  },
  {
    title: "Resources",
    items: [
      { title: "Books and Patents", icon: Book, href: "#books-patents" },
    ]
  },
]

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("introduction")
  const [expandedMenus, setExpandedMenus] = useState<Set<string>>(new Set())
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)

  // Handle query parameters for direct navigation
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search)
      const section = urlParams.get('section')
      if (section === 'what-is-nft') {
        setActiveSection('what-is-nft')
        setExpandedMenus(new Set(['NFTs']))
      }
    }
  }, [])

  const toggleMenu = (menuId: string) => {
    const newExpanded = new Set(expandedMenus)
    if (newExpanded.has(menuId)) {
      newExpanded.delete(menuId)
    } else {
      newExpanded.add(menuId)
    }
    setExpandedMenus(newExpanded)
  }

  const handleItemClick = (href: string, hasChildren?: boolean, itemTitle?: string) => {
    if (hasChildren && itemTitle) {
      toggleMenu(itemTitle)
    } else {
      const sectionId = href.slice(1)
      setActiveSection(sectionId)
      // Close mobile sidebar when item is selected
      setIsMobileSidebarOpen(false)
    }
  }

  return (
    <>
      {/* Mobile Hamburger Menu Button */}
      <div className="lg:hidden fixed top-20 left-4 z-50">
        <Button
          onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
          variant="outline"
          size="sm"
          className="bg-slate-900/90 backdrop-blur-sm border-slate-700 text-white hover:bg-slate-800 hover:border-slate-600"
        >
          {isMobileSidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileSidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40 top-16"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <aside className={`lg:hidden fixed left-0 top-16 bottom-0 w-80 bg-slate-950/95 backdrop-blur-xl border-r border-slate-800/50 shadow-xl transform transition-transform duration-300 ease-in-out z-40 ${
        isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <nav className="h-full flex flex-col">
          <div className="flex-1 py-4 space-y-6 px-4 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800">
            {sidebarSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">
                  {section.title}
                </h3>
                <div className="space-y-1">
                  {section.items.map((item) => (
                    <div key={item.href}>
                      <button
                        onClick={() => handleItemClick(item.href, !!item.children, item.title)}
                        className={`flex items-center w-full px-3 py-2 text-sm rounded-lg transition-colors ${
                          activeSection === item.href.slice(1)
                            ? "bg-slate-800/60 text-cyan-300 shadow-lg shadow-cyan-500/20"
                            : "text-slate-300 hover:text-cyan-300 hover:bg-slate-800/50"
                        }`}
                      >
                        <item.icon className="h-4 w-4 mr-3" />
                        {item.title}
                        {item.children && (
                          <div className="ml-auto">
                            {expandedMenus.has(item.title) ? (
                              <ChevronDown className="h-4 w-4" />
                            ) : (
                              <ChevronRight className="h-4 w-4" />
                            )}
                          </div>
                        )}
                      </button>
                      {item.children && expandedMenus.has(item.title) && (
                        <div className="ml-4 mt-1 space-y-1">
                          {item.children.map((child) => (
                            <button
                              key={child.href}
                              onClick={() => handleItemClick(child.href)}
                              className={`flex items-center w-full px-3 py-2 text-sm rounded-lg transition-colors ${
                                activeSection === child.href.slice(1)
                                  ? "bg-slate-800/60 text-cyan-300 shadow-lg shadow-cyan-500/20"
                                  : "text-slate-300 hover:text-cyan-300 hover:bg-slate-800/50"
                              }`}
                            >
                              <div className="h-2 w-2 rounded-full bg-slate-500 mr-3" />
                              {child.title}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </nav>
      </aside>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block fixed left-0 top-16 bottom-0 w-64 bg-slate-950/95 backdrop-blur-xl border-r border-slate-800/50 shadow-xl">
        <nav className="h-full flex flex-col">
          <div className="flex-1 py-4 space-y-6 px-4 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800">
            {sidebarSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">
                  {section.title}
                </h3>
                <div className="space-y-1">
                  {section.items.map((item) => (
                    <div key={item.href}>
                      <button
                        onClick={() => handleItemClick(item.href, !!item.children, item.title)}
                        className={`flex items-center w-full px-3 py-2 text-sm rounded-lg transition-colors ${
                          activeSection === item.href.slice(1)
                            ? "bg-slate-800/60 text-cyan-300 shadow-lg shadow-cyan-500/20"
                            : "text-slate-300 hover:text-cyan-300 hover:bg-slate-800/50"
                        }`}
                      >
                        <item.icon className="h-4 w-4 mr-3" />
                        {item.title}
                        {item.children && (
                          <div className="ml-auto">
                            {expandedMenus.has(item.title) ? (
                              <ChevronDown className="h-4 w-4" />
                            ) : (
                              <ChevronRight className="h-4 w-4" />
                            )}
                          </div>
                        )}
                      </button>
                      {item.children && expandedMenus.has(item.title) && (
                        <div className="ml-4 mt-1 space-y-1">
                          {item.children.map((child) => (
                            <button
                              key={child.href}
                              onClick={() => setActiveSection(child.href.slice(1))}
                              className={`flex items-center w-full px-3 py-2 text-sm rounded-lg transition-colors ${
                                activeSection === child.href.slice(1)
                                  ? "bg-slate-800/60 text-cyan-300 shadow-lg shadow-cyan-500/20"
                                  : "text-slate-300 hover:text-cyan-300 hover:bg-slate-800/50"
                              }`}
                            >
                              <div className="h-2 w-2 rounded-full bg-slate-500 mr-3" />
                              {child.title}
                    </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </nav>
      </aside>

      {/* Content */}
      <div className="pt-24 lg:pt-16 min-h-screen lg:pl-64 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 md:py-8">

          {/* Hero Section - Only show for non-Core Concepts pages and non-Platform Features pages and non-Resources pages */}
          {!["what-is-nft", "what-is-minting", "how-to-buy-nft", "how-to-sell-nft", "bitcoin-ordinals", "nft-ticketing", "hybridization", "what-is-web3", "metamask-wallet", "coinbase-wallet", "what-is-dao", "what-is-cryptocurrency", "what-is-crypto-wallet", "what-is-blockchain", "compatible-blockchains", "what-is-polygon", "what-is-ethereum", "what-is-bitcoin", "introduction", "getting-started", "frye-token", "promptx", "crispr-vault", "ai-nationverse", "respect-fee", "governance", "books-patents"].includes(activeSection) && (
          <div className="mb-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm font-medium mb-6">
                <Sparkles className="h-4 w-4 mr-2" />
                Get setup
              </div>
              <h1 className="text-5xl font-bold gradient-animate mb-4">
                Introducing the new FRYE documentation
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Find all the guides and resources you need to develop with the FRYE Ecosystem.
              </p>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {docSections.map((section) => (
                <Card
                  key={section.id}
                  className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl hover:neon-glow transition-all duration-300 group cursor-pointer"
                  onClick={() => setActiveSection(section.id)}
                >
                  <CardHeader className="pb-4">
                    <div className={`p-3 rounded-lg bg-slate-800/50 w-fit mb-3 group-hover:scale-110 transition-transform`}>
                      <section.icon className={`h-6 w-6 ${section.color}`} />
                    </div>
                    <CardTitle className="text-white text-lg">{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {section.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          )}

          {/* Introduction Page - Show only the heading without badge, cards, and framework section */}
          {activeSection === "introduction" && (
          <div className="mb-12">
              <div className="text-center mb-8">
                <h1 className="text-5xl font-bold gradient-animate mb-4">
                  Introducing the new FRYE documentation
                </h1>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                  Find all the guides and resources you need to learn about the FRYE Ecosystem.
              </p>
            </div>
            </div>
          )}



          {/* Documentation Content - Dynamically rendered based on activeSection */}
          <div className="space-y-8">
            {activeSection === "introduction" && (
              <div className="space-y-8">
                {/* Header */}
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                    <Home className="h-8 w-8 mr-3 text-cyan-400" />
                    Introduction to the FRYE Ecosystem
                  </h2>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    Welcome to the FRYE Ecosystem, a next-generation platform on LUHPHOL.com that transforms your ideas into valuable, tradable assets.
                  </p>
                </div>

                {/* Platform Overview Card */}
                <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Platform Overview</CardTitle>
                    <CardDescription className="text-slate-300">
                      At its core, LUHPHOL.com lets you transform creativity into innovation
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-lg p-6 mb-6">
                      <h4 className="text-cyan-300 font-semibold mb-3">Core Features</h4>
                      <ul className="text-slate-300 space-y-2 text-sm">
                        <li>• Generate ideas with <strong>PromptX</strong>, an AI-powered tool for sparking creativity.</li>
                        <li>• Access the <strong>CRISPR Eternity Vault</strong>, an exclusive archive of gene-editing concepts.</li>
                        <li>• Mint your ideas as <strong>NFTs</strong> on the Polygon blockchain, each tied to a unique <strong>FRYE token</strong>.</li>
                        <li>• Pay <strong>Respect Fees</strong> to collaborate on others' ideas, creating a vibrant economy.</li>
                        <li>• Preview <strong>AI NationVerse</strong>, a game where your ideas become virtual businesses.</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Token System Card */}
                <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Token System</CardTitle>
                    <CardDescription className="text-slate-300">
                      Understanding the dual-token economy that powers the ecosystem
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-6 mb-6">
                      <h4 className="text-purple-300 font-semibold mb-3">Dual Token Model</h4>
                      <p className="text-slate-300 leading-relaxed">
                        The ecosystem uses two tokens: <strong>$FRYE</strong> (purchased with real money to unlock features) and <strong>FRYE</strong> (minted with each original idea, up to a cap of 500 million). Every idea is timestamped on-chain for proof of originality, ensuring your creativity is protected forever.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Why It Matters Card */}
                <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Why It Matters</CardTitle>
                    <CardDescription className="text-slate-300">
                      The vision behind the FRYE Ecosystem platform
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-6 mb-6">
                      <h4 className="text-green-300 font-semibold mb-3">Vision</h4>
                      <p className="text-slate-300 leading-relaxed">
                        Inspired by visionary works like <em>The Patent-Backed Dollar</em>, the FRYE Ecosystem is your platform for turning ingenuity into liquid assets. This section introduces the platform's purpose and sets expectations for what users can achieve, emphasizing the MVP's core features.
                      </p>
                    </div>

                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                      <h4 className="text-blue-300 font-semibold mb-2">🚀 Ready to Start?</h4>
                      <p className="text-slate-300 text-sm">
                        Start creating today! Your creativity is protected forever on the blockchain.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeSection === "getting-started" && (
              <div className="space-y-8">
                {/* Header */}
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                    <PlayCircle className="h-8 w-8 mr-3 text-cyan-400" />
                    Getting Started
                  </h2>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    Ready to dive into the FRYE Ecosystem? Follow these simple steps to start using LUHPHOL.com.
                  </p>
                </div>

                {/* Step-by-Step Guide Card */}
                <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Step-by-Step Guide</CardTitle>
                    <CardDescription className="text-slate-300">
                      Complete onboarding process to get you started
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-lg p-6 mb-6">
                      <h4 className="text-blue-300 font-semibold mb-4 text-lg">Onboarding Steps</h4>
                      <ol className="text-slate-300 space-y-4 text-sm list-decimal list-inside">
                        <li><strong>Sign Up</strong>: Visit the homepage and click "Sign In" to register with your Google account. This creates your secure LUHPHOL account, where you'll manage your ideas and tokens.</li>
                        <li><strong>Set Up a Wallet</strong>: Install <strong>MetaMask</strong>, a crypto wallet, and configure it for the Polygon blockchain. Connect your wallet to LUHPHOL.com to mint NFTs and store <strong>FRYE tokens</strong>.</li>
                        <li><strong>Purchase $FRYE Tokens</strong>: Go to the "Purchase" page and buy <strong>$FRYE</strong> with a credit card (e.g., $10 = 1,000 $FRYE). These tokens unlock platform features like PromptX and the CRISPR Vault.</li>
                        <li><strong>Explore the Platform</strong>: From your Dashboard, access features like submitting ideas, generating prompts with PromptX, browsing the CRISPR Vault, or previewing AI NationVerse.</li>
                      </ol>
                    </div>
                  </CardContent>
                </Card>

                {/* Example Card */}
                <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Example Workflow</CardTitle>
                    <CardDescription className="text-slate-300">
                      See how the onboarding process works in practice
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
                      <h4 className="text-green-300 font-semibold mb-2 flex items-center">
                        <Lightbulb className="h-4 w-4 mr-2" />
                        Example
                      </h4>
                      <p className="text-slate-300 text-sm">
                        Sign up with Google, connect MetaMask, buy 1,000 $FRYE for $10, and head to PromptX to generate your first idea.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Tips Card */}
                <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Tips & Best Practices</CardTitle>
                    <CardDescription className="text-slate-300">
                      Important information to ensure a smooth start
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-6">
                      <h4 className="text-blue-300 font-semibold mb-2">💡 Tip</h4>
                      <p className="text-slate-300 text-sm">
                        Always check your $FRYE balance on the Dashboard before using features like minting (50 $FRYE) or PromptX (10 $FRYE). Need help with MetaMask? Visit their support page for setup guides.
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-6">
                      <h4 className="text-green-300 font-semibold mb-3">Why It Matters</h4>
                      <p className="text-slate-300 leading-relaxed">
                        This section guides new users through onboarding, addressing the need for authentication, wallet setup, and token purchases to get started with the FRYE Ecosystem.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeSection === "promptx" && (
              <div className="space-y-8">
                {/* Header */}
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                    <Sparkles className="h-8 w-8 mr-3 text-cyan-400" />
                    PromptX™
                  </h2>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    PromptX is your on-demand idea generator, designed to spark creativity with one click. Powered by the AI-Overseer, it delivers curated prompts across 10-15 sectors.
                  </p>
                </div>

                {/* How to Use Card */}
                <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">How to Use</CardTitle>
                    <CardDescription className="text-slate-300">
                      Step-by-step guide to using PromptX effectively
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-6 mb-6">
                      <h4 className="text-purple-300 font-semibold mb-4 text-lg">Usage Steps</h4>
                      <ol className="text-slate-300 space-y-3 text-sm list-decimal list-inside">
                        <li>Navigate to the "PromptX" page from your Dashboard.</li>
                        <li>Select a sector from the dropdown (e.g., biotechnology, finance).</li>
                        <li>Pay 10 $FRYE to generate a prompt.</li>
                        <li>View the AI-generated prompt (e.g., "Design a CRISPR-based therapy for longevity").</li>
                        <li>Click "Submit as Idea" to mint it as an NFT (costs 50 $FRYE).</li>
                      </ol>
                    </div>
                  </CardContent>
                </Card>

                {/* Example Card */}
                <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Example Workflow</CardTitle>
                    <CardDescription className="text-slate-300">
                      Real-world example of using PromptX
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
                      <h4 className="text-green-300 font-semibold mb-2 flex items-center">
                        <Lightbulb className="h-4 w-4 mr-2" />
                        Example
                      </h4>
                      <p className="text-slate-300 text-sm">
                        You select "finance," pay 10 $FRYE, and get a prompt: "Create a blockchain-based lending platform for small businesses." You refine it and submit it as an idea, minting an NFT and earning 1 FRYE token.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Tips and Why It Matters Card */}
                <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Tips & Benefits</CardTitle>
                    <CardDescription className="text-slate-300">
                      Best practices and the importance of PromptX
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-6">
                      <h4 className="text-blue-300 font-semibold mb-2">💡 Tip</h4>
                      <p className="text-slate-300 text-sm">
                        Use PromptX when you're stuck or need inspiration. Try different sectors to explore diverse ideas, and save prompts to your Dashboard for later use.
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-6">
                      <h4 className="text-green-300 font-semibold mb-3">Why It Matters</h4>
                      <p className="text-slate-300 leading-relaxed">
                        PromptX is a core feature making idea generation accessible and driving $FRYE usage in the MVP.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeSection === "crispr-vault" && (
              <div className="space-y-8">
                {/* Header */}
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                    <Dna className="h-8 w-8 mr-3 text-cyan-400" />
                    CRISPR Eternity Vault
                  </h2>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    The CRISPR Eternity Vault is an exclusive archive of 100+ gene-editing breakthroughs, including longevity enhancements, hybrid species experiments, and CRISPR trial blueprints.
                  </p>
                </div>

                {/* How to Use Card */}
                <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">How to Use</CardTitle>
                    <CardDescription className="text-slate-300">
                      Step-by-step guide to accessing and using the vault
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-6 mb-6">
                      <h4 className="text-green-300 font-semibold mb-4 text-lg">Access Steps</h4>
                      <ol className="text-slate-300 space-y-3 text-sm list-decimal list-inside">
                        <li>Go to the "Vault" page from your Dashboard.</li>
                        <li>Browse the list of ideas (each shows a title and preview description).</li>
                        <li>Pay 50 $FRYE for a preview or 200 $FRYE for full details, using MetaMask to confirm.</li>
                        <li>View the idea's details (e.g., a blueprint for a longevity therapy).</li>
                        <li>To remix an idea, use the Respect Fee Protocol.</li>
                      </ol>
                    </div>
                  </CardContent>
                </Card>

                {/* Example Card */}
                <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Example Workflow</CardTitle>
                    <CardDescription className="text-slate-300">
                      Real-world example of using the CRISPR Vault
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
                      <h4 className="text-orange-300 font-semibold mb-2 flex items-center">
                        <Lightbulb className="h-4 w-4 mr-2" />
                        Example
                      </h4>
                      <p className="text-slate-300 text-sm">
                        You browse the Vault, see "Longevity Gene Therapy," pay 50 $FRYE for a preview (e.g., "Targets aging genes"), or 200 $FRYE for the full blueprint (e.g., specific CRISPR sequences). You decide to remix it, paying a Respect Fee.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Tips and Why It Matters Card */}
                <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Tips & Benefits</CardTitle>
                    <CardDescription className="text-slate-300">
                      Best practices and the importance of the vault
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-6">
                      <h4 className="text-blue-300 font-semibold mb-2">💡 Tip</h4>
                      <p className="text-slate-300 text-sm">
                        Start with previews to explore ideas affordably, then unlock full access for detailed research. The Vault is your gateway to cutting-edge biotech!
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20 rounded-lg p-6">
                      <h4 className="text-purple-300 font-semibold mb-3">Why It Matters</h4>
                      <p className="text-slate-300 leading-relaxed">
                        The Vault is a flagship feature offering exclusive content and driving $FRYE demand in the MVP.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeSection === "ai-nationverse" && (
              <div className="space-y-8">
                {/* Header */}
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                    <Globe className="h-8 w-8 mr-3 text-cyan-400" />
                    AI NationVerse
                  </h2>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    AI NationVerse is a virtual world where your minted ideas become thriving businesses, like food trucks, shops, or malls, with real-world monetization potential.
                  </p>
                </div>

                {/* How to Use Card */}
                <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">How to Use</CardTitle>
                    <CardDescription className="text-slate-300">
                      Step-by-step guide to entering and using AI NationVerse
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-lg p-6 mb-6">
                      <h4 className="text-blue-300 font-semibold mb-4 text-lg">Getting Started</h4>
                      <ol className="text-slate-300 space-y-3 text-sm list-decimal list-inside">
                        <li>Navigate to the "AI NationVerse" page from your Dashboard.</li>
                        <li>Connect your MetaMask wallet and verify you own at least 1 <strong>FRYE</strong> token (earned by minting an idea).</li>
                        <li>Explore a 3D virtual world with land plots, where you can place your NFT ideas as businesses (e.g., a food truck or carnival).</li>
                        <li>Engage in events like virtual carnivals or fairs to showcase your ideas.</li>
                        <li>License your ideas to earn revenue, integrated with real-world APIs (e.g., Uber Eats, Shopify) for sales.</li>
                      </ol>
                    </div>
                  </CardContent>
                </Card>

                {/* Example Card */}
                <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Example Workflow</CardTitle>
                    <CardDescription className="text-slate-300">
                      Real-world example of using AI NationVerse
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
                      <h4 className="text-green-300 font-semibold mb-2 flex items-center">
                        <Lightbulb className="h-4 w-4 mr-2" />
                        Example
                      </h4>
                      <p className="text-slate-300 text-sm">
                        You mint a "food truck" idea, receive FRYE-000000001, and enter AI NationVerse. You place your food truck on a virtual plot, host a carnival event, and sell food via a Shopify API, earning $FRYE.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Tips and Why It Matters Card */}
                <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Tips & Benefits</CardTitle>
                    <CardDescription className="text-slate-300">
                      Best practices and the importance of AI NationVerse
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-6">
                      <h4 className="text-blue-300 font-semibold mb-2">💡 Tip</h4>
                      <p className="text-slate-300 text-sm">
                        Mint multiple ideas to build a diverse portfolio of virtual businesses. Participate in events to boost visibility and licensing opportunities!
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-6">
                      <h4 className="text-purple-300 font-semibold mb-3">Why It Matters</h4>
                      <p className="text-slate-300 leading-relaxed">
                        AI NationVerse turns ideas into monetizable assets, creating a unique virtual economy where your creativity becomes profitable businesses.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeSection === "governance" && (
              <div className="space-y-8">
                {/* Header */}
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                    <Vote className="h-8 w-8 mr-3 text-cyan-400" />
                    Snapshot DAO
                  </h2>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    Snapshot DAO empowers you to shape the FRYE Ecosystem through community governance. Using $FRYE tokens, you can vote on platform decisions.
                  </p>
                </div>

                {/* How to Use Card */}
                <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">How to Use</CardTitle>
                    <CardDescription className="text-slate-300">
                      Step-by-step guide to participating in governance
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-6 mb-6">
                      <h4 className="text-purple-300 font-semibold mb-4 text-lg">Governance Process</h4>
                      <ol className="text-slate-300 space-y-3 text-sm list-decimal list-inside">
                        <li>Go to the "Governance" page from your Dashboard.</li>
                        <li>Connect your MetaMask wallet with $FRYE tokens (purchased with fiat).</li>
                        <li>Browse active proposals (e.g., "Add a new PromptX sector" or "Adjust Respect Fee rates").</li>
                        <li>Cast your vote using $FRYE tokens, where more tokens equal more voting power.</li>
                        <li>Votes are recorded on the Polygon blockchain via Snapshot for transparency.</li>
                      </ol>
                    </div>
                  </CardContent>
                </Card>

                {/* Example Card */}
                <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Example Workflow</CardTitle>
                    <CardDescription className="text-slate-300">
                      Real-world example of participating in governance
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
                      <h4 className="text-green-300 font-semibold mb-2 flex items-center">
                        <Lightbulb className="h-4 w-4 mr-2" />
                        Example
                      </h4>
                      <p className="text-slate-300 text-sm">
                        You hold 5,000 $FRYE and vote on a proposal to add "space tech" to PromptX. Your vote helps shape the platform, and the result is logged on-chain.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Tips and Why It Matters Card */}
                <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Tips & Benefits</CardTitle>
                    <CardDescription className="text-slate-300">
                      Best practices and the importance of governance
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-6">
                      <h4 className="text-blue-300 font-semibold mb-2">💡 Tip</h4>
                      <p className="text-slate-300 text-sm">
                        Stock up on $FRYE to increase your voting power. Stay active in the DAO to influence LUHPHOL's future and unlock exclusive governance rewards!
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-6">
                      <h4 className="text-green-300 font-semibold mb-3">Why It Matters</h4>
                      <p className="text-slate-300 leading-relaxed">
                        Snapshot DAO gives users control over the platform, enhancing engagement and decentralization in the FRYE Ecosystem.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeSection === "frye-token" && <TokenEconomicsSection />}
            {activeSection === "respect-fee" && <RespectFeeSection />}

            {/* NFT Content Sections */}
            {activeSection === "what-is-nft" && (
              <div className="space-y-8">
                {/* Header */}
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                    <Image className="h-8 w-8 mr-3 text-cyan-400" />
                    What is an NFT?
                  </h2>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    An NFT, or Non-Fungible Token, is a unique digital asset stored on a blockchain, proving ownership and authenticity.
                  </p>
                </div>

                {/* Overview Card */}
                <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Overview</CardTitle>
                    <CardDescription className="text-slate-300">
                      Understanding the basics of non-fungible tokens
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 leading-relaxed mb-4">
                      Unlike cryptocurrencies (e.g., Bitcoin), which are identical and interchangeable, each NFT is one-of-a-kind, like a digital collectible or certificate.
                    </p>
                  </CardContent>
                </Card>

                {/* Relation to FRYE Ecosystem Card */}
                <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Relation to FRYE Ecosystem</CardTitle>
                    <CardDescription className="text-slate-300">
                      How NFTs work within the LUHPHOL platform
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-lg p-6 mb-6">
                      <h4 className="text-cyan-300 font-semibold mb-3">Platform Integration</h4>
                      <p className="text-slate-300 leading-relaxed">
                        On LUHPHOL.com, every original idea you submit is minted as an NFT on the Polygon blockchain, representing your unique innovation (e.g., a gene-editing concept or business idea). Each NFT is tied to a <strong>FRYE token</strong> with a serial number (e.g., FRYE-000000001), ensuring proof of originality and enabling trading or licensing.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Example and Tips Card */}
                <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Examples & Tips</CardTitle>
                    <CardDescription className="text-slate-300">
                      Real-world usage and best practices
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
                      <h4 className="text-green-300 font-semibold mb-2 flex items-center">
                        <Lightbulb className="h-4 w-4 mr-2" />
                        Example
                      </h4>
                      <p className="text-slate-300 text-sm">
                        You submit a "biotech therapy" idea, and it's minted as an NFT on Polygon. This NFT proves you created the idea, and you can trade it or use it in <strong>AI NationVerse</strong> as a virtual business.
                      </p>
                    </div>

                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                      <h4 className="text-blue-300 font-semibold mb-2">💡 Tip</h4>
                      <p className="text-slate-300 text-sm">
                        Think of NFTs as digital deeds for your ideas, securely stored and verifiable on the blockchain.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeSection === "what-is-minting" && (
              <div className="space-y-8">
                {/* Header */}
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                    <Zap className="h-8 w-8 mr-3 text-cyan-400" />
                    What is Minting?
                  </h2>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    Minting is the process of creating an NFT on a blockchain, turning a digital item into a unique, verifiable asset.
                  </p>
                </div>

                {/* Overview Card */}
                <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Overview</CardTitle>
                    <CardDescription className="text-slate-300">
                      Understanding the minting process
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 leading-relaxed mb-4">
                      It involves generating a token with metadata (e.g., title, creator, timestamp) and storing it on-chain.
                    </p>
                  </CardContent>
                </Card>

                {/* Relation to FRYE Ecosystem Card */}
                <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Relation to FRYE Ecosystem</CardTitle>
                    <CardDescription className="text-slate-300">
                      How minting works on LUHPHOL.com
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-6 mb-6">
                      <h4 className="text-purple-300 font-semibold mb-3">Platform Process</h4>
                      <p className="text-slate-300 leading-relaxed">
                        On LUHPHOL.com, minting happens when you submit an original idea via the "Idea Submission" page. The <strong>AI-Overseer</strong> verifies its uniqueness, and the platform mints an NFT on Polygon, along with 1 <strong>FRYE token</strong>, for a fee of 50 <strong>$FRYE</strong>. The NFT includes metadata like the idea's title and serial number, stored on IPFS for permanence.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Example and Tips Card */}
                <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Examples & Tips</CardTitle>
                    <CardDescription className="text-slate-300">
                      Real-world usage and best practices
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
                      <h4 className="text-green-300 font-semibold mb-2 flex items-center">
                        <Lightbulb className="h-4 w-4 mr-2" />
                        Example
                      </h4>
                      <p className="text-slate-300 text-sm">
                        You submit a "CRISPR trial blueprint" idea, pay 50 $FRYE, and the system mints an NFT (FRYE-000000001) on Polygon, sending a FRYE token to your MetaMask wallet.
                      </p>
                    </div>

                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                      <h4 className="text-blue-300 font-semibold mb-2">💡 Tip</h4>
                      <p className="text-slate-300 text-sm">
                        Ensure you have enough $FRYE and a connected MetaMask wallet before minting. Check your Dashboard to view your minted NFTs.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeSection === "how-to-buy-nft" && (
              <div className="space-y-8">
                {/* Header */}
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                    <ShoppingCart className="h-8 w-8 mr-3 text-cyan-400" />
                    How to Buy an NFT
                  </h2>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    Buying an NFT means purchasing a unique digital asset from another owner, typically on a marketplace like OpenSea, using cryptocurrency.
                  </p>
                </div>

                {/* Relation to FRYE Ecosystem Card */}
                <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Relation to FRYE Ecosystem</CardTitle>
                    <CardDescription className="text-slate-300">
                      How to buy NFTs within the FRYE ecosystem
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-6 mb-6">
                      <h4 className="text-green-300 font-semibold mb-3">Platform Integration</h4>
                      <p className="text-slate-300 leading-relaxed">
                        In the FRYE Ecosystem, you can buy <strong>FRYE token NFTs</strong> (representing ideas) on Polygon marketplaces. These NFTs, minted on LUHPHOL.com, can be purchased with cryptocurrencies like MATIC or traded for <strong>$FRYE</strong> in some cases. You can also access NFT-based ideas in the <strong>CRISPR Eternity Vault</strong> by paying $FRYE for previews or full details.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* How to Do It Card */}
                <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">How to Do It</CardTitle>
                    <CardDescription className="text-slate-300">
                      Step-by-step guide to buying NFTs
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
                      <h4 className="text-orange-300 font-semibold mb-3">Purchase Steps:</h4>
                      <ol className="text-slate-300 text-sm space-y-2 list-decimal list-inside">
                        <li>Connect your MetaMask wallet to a Polygon-compatible marketplace (e.g., OpenSea).</li>
                        <li>Search for FRYE Ecosystem NFTs (identified by serial numbers like FRYE-000000001).</li>
                        <li>Purchase the NFT using MATIC or other cryptocurrencies.</li>
                        <li>The NFT appears in your MetaMask wallet, usable on LUHPHOL.com (e.g., in AI NationVerse).</li>
                      </ol>
                    </div>
                  </CardContent>
                </Card>

                {/* Example and Tips Card */}
                <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Examples & Tips</CardTitle>
                    <CardDescription className="text-slate-300">
                      Real-world usage and best practices
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
                      <h4 className="text-green-300 font-semibold mb-2 flex items-center">
                        <Lightbulb className="h-4 w-4 mr-2" />
                        Example
                      </h4>
                      <p className="text-slate-300 text-sm">
                        You find a "hybrid species" NFT on OpenSea, buy it with MATIC, and use it to access related content in the CRISPR Vault or place it as a business in AI NationVerse.
                      </p>
                    </div>

                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                      <h4 className="text-blue-300 font-semibold mb-2">💡 Tip</h4>
                      <p className="text-slate-300 text-sm">
                        Start with the CRISPR Vault to explore ideas before buying NFTs externally. Always verify the NFT's serial number to ensure it's from LUHPHOL.com.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeSection === "how-to-sell-nft" && (
              <div className="space-y-8">
                {/* Header */}
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                    <Tag className="h-8 w-8 mr-3 text-cyan-400" />
                    How to Sell an NFT
                  </h2>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    Selling an NFT involves listing it on a blockchain marketplace, where another user can buy it with cryptocurrency.
                  </p>
                </div>

                {/* Relation to FRYE Ecosystem Card */}
                <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Relation to FRYE Ecosystem</CardTitle>
                    <CardDescription className="text-slate-300">
                      How to sell NFTs within the FRYE ecosystem
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-lg p-6 mb-6">
                      <h4 className="text-yellow-300 font-semibold mb-3">Platform Integration</h4>
                      <p className="text-slate-300 leading-relaxed">
                        You can sell your <strong>FRYE token NFTs</strong> (minted ideas) on Polygon marketplaces like OpenSea. Each NFT represents an idea you created on LUHPHOL.com, and selling it transfers ownership while retaining your original creator status via metadata. You can also license NFTs internally for royalties using the <strong>Respect Fee Protocol</strong>.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* How to Do It Card */}
                <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">How to Do It</CardTitle>
                    <CardDescription className="text-slate-300">
                      Step-by-step guide to selling NFTs
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
                      <h4 className="text-orange-300 font-semibold mb-3">Selling Steps:</h4>
                      <ol className="text-slate-300 text-sm space-y-2 list-decimal list-inside">
                        <li>Connect your MetaMask wallet to a Polygon marketplace (e.g., OpenSea).</li>
                        <li>List your FRYE NFT (e.g., FRYE-000000001) with a price in MATIC or other cryptocurrencies.</li>
                        <li>Once sold, the NFT transfers to the buyer's wallet, and you receive payment.</li>
                        <li>Optionally, license the idea on LUHPHOL.com via Respect Fees for ongoing royalties.</li>
                      </ol>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeSection === "bitcoin-ordinals" && (
              <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-white text-2xl flex items-center">
                    <Coins className="h-6 w-6 mr-3 text-orange-400" />
                    What are Bitcoin Ordinals?
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-slate prose-invert max-w-none">
                  <p className="text-slate-300 leading-relaxed mb-4">
                    <strong>Overview</strong>: Bitcoin Ordinals are a way to inscribe unique data (e.g., text, images, or metadata) directly onto the Bitcoin blockchain, creating rare, one-of-a-kind digital artifacts. Unlike NFTs on other blockchains, Ordinals are embedded in Bitcoin's smallest unit (a satoshi), making them permanent and highly secure.
                  </p>

                  <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-lg p-6 mb-6">
                    <h4 className="text-orange-300 font-semibold mb-3">Relation to FRYE Ecosystem</h4>
                    <p className="text-slate-300 leading-relaxed">
                      In the FRYE Ecosystem, <strong>Bitcoin Ordinals</strong> are used to archive "rare collectible IP" or "historic moments" (e.g., groundbreaking inventions). High-value ideas minted on LUHPHOL.com can be inscribed as Ordinals on Bitcoin for permanent storage, complementing Polygon and Ethereum NFTs.
                    </p>
                  </div>

                  <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
                    <h4 className="text-green-300 font-semibold mb-2 flex items-center">
                      <Lightbulb className="h-4 w-4 mr-2" />
                      Example
                    </h4>
                    <p className="text-slate-300 text-sm">
                      You mint a historic "gene-editing breakthrough" on LUHPHOL.com and choose to archive it as a Bitcoin Ordinal. The idea's metadata (title, timestamp) is inscribed on Bitcoin, ensuring its legacy.
                    </p>
                  </div>

                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                    <h4 className="text-blue-300 font-semibold mb-2">💡 Tip</h4>
                    <p className="text-slate-300 text-sm">
                      Use Bitcoin Ordinals for your most significant ideas to ensure they're preserved forever. Check with the platform for Ordinal minting availability.
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeSection === "nft-ticketing" && (
              <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-white text-2xl flex items-center">
                    <CreditCard className="h-6 w-6 mr-3 text-cyan-400" />
                    What is NFT Ticketing?
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-slate prose-invert max-w-none">
                  <p className="text-slate-300 leading-relaxed mb-4">
                    <strong>Overview</strong>: NFT ticketing uses NFTs as digital tickets for events, granting access to physical or virtual experiences. Each NFT ticket is unique, verifiable on a blockchain, and can be traded or collected.
                  </p>

                  <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-lg p-6 mb-6">
                    <h4 className="text-indigo-300 font-semibold mb-3">Relation to FRYE Ecosystem</h4>
                    <p className="text-slate-300 leading-relaxed">
                      While not explicitly mentioned in the white paper, NFT ticketing aligns with <strong>AI NationVerse</strong>, where events like virtual carnivals or fairs are hosted. In the FRYE Ecosystem, NFT tickets (minted as FRYE NFTs) could grant access to exclusive AI NationVerse events, leveraging your <strong>FRYE tokens</strong> for entry.
                    </p>
                  </div>

                  <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
                    <h4 className="text-green-300 font-semibold mb-2 flex items-center">
                      <Lightbulb className="h-4 w-4 mr-2" />
                      Example
                    </h4>
                    <p className="text-slate-300 text-sm">
                      You own a FRYE NFT and use it to mint an NFT ticket for a virtual carnival in AI NationVerse, granting access to a special event where you showcase your idea.
                    </p>
                  </div>

                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                    <h4 className="text-blue-300 font-semibold mb-2">💡 Tip</h4>
                    <p className="text-slate-300 text-sm">
                      Watch for AI NationVerse updates to participate in events using NFT tickets. Your FRYE tokens may unlock exclusive access!
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeSection === "hybridization" && (
              <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-white text-2xl flex items-center">
                    <Dna className="h-6 w-6 mr-3 text-cyan-400" />
                    What is Hybridization?
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-slate prose-invert max-w-none">
                  <p className="text-slate-300 leading-relaxed mb-4">
                    <strong>Overview</strong>: Hybridization is the process of combining or building upon an existing idea to create a new one, often by remixing or adapting its concepts. In blockchain contexts, it involves using an NFT's data to inspire a new NFT.
                  </p>

                  <div className="bg-gradient-to-r from-green-500/10 to-teal-500/10 border border-green-500/20 rounded-lg p-6 mb-6">
                    <h4 className="text-green-300 font-semibold mb-3">Relation to FRYE Ecosystem</h4>
                    <p className="text-slate-300 leading-relaxed">
                      On LUHPHOL.com, hybridization is enabled through the <strong>Respect Fee Protocol</strong>. To remix an idea from the <strong>CRISPR Eternity Vault</strong>, you pay a Respect Fee (e.g., 50 $FRYE or creator-set amount) to access hybridization tools, then mint a new NFT combining the original idea with your own.
                    </p>
                  </div>

                  <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
                    <h4 className="text-green-300 font-semibold mb-2 flex items-center">
                      <Lightbulb className="h-4 w-4 mr-2" />
                      Example
                    </h4>
                    <p className="text-slate-300 text-sm">
                      You find a "longevity enhancement" idea in the CRISPR Vault, pay 100 $FRYE as a Respect Fee, and use hybridization tools to create a new idea combining it with a plant-based gene edit. You mint a new NFT (FRYE-000000002).
                    </p>
                  </div>

                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                    <h4 className="text-blue-300 font-semibold mb-2">💡 Tip</h4>
                    <p className="text-slate-300 text-sm">
                      Use hybridization to innovate on existing ideas. Pay Respect Fees to unlock tools and support original creators!
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Web3 Content Sections */}
            {activeSection === "what-is-web3" && (
              <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-white text-2xl flex items-center">
                    <Globe className="h-6 w-6 mr-3 text-cyan-400" />
                    What is Web3?
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-slate prose-invert max-w-none">
                  <p className="text-slate-300 leading-relaxed mb-4">
                    <strong>Overview</strong>: Web3 is the next evolution of the internet, built on decentralized technologies like blockchain. Unlike Web2 (centralized platforms like Google), Web3 gives users control over their data, assets, and interactions through crypto wallets, smart contracts, and decentralized apps (dApps).
                  </p>

                  <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-lg p-6 mb-6">
                    <h4 className="text-blue-300 font-semibold mb-3">Relation to FRYE Ecosystem</h4>
                    <p className="text-slate-300 leading-relaxed">
                      LUHPHOL.com is a Web3 platform, using blockchain (Polygon, Ethereum, Bitcoin) to mint ideas as NFTs, manage <strong>$FRYE/FRYE tokens</strong>, and enable decentralized governance via <strong>Snapshot DAO</strong>. Users control their ideas and tokens via crypto wallets, ensuring transparency and ownership.
                    </p>
                  </div>

                  <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
                    <h4 className="text-green-300 font-semibold mb-2 flex items-center">
                      <Lightbulb className="h-4 w-4 mr-2" />
                      Example
                    </h4>
                    <p className="text-slate-300 text-sm">
                      You use LUHPHOL.com to mint an idea as an NFT on Polygon, store it in your MetaMask wallet, and vote in Snapshot DAO—all Web3 interactions giving you control over your digital assets.
                    </p>
                  </div>

                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                    <h4 className="text-blue-300 font-semibold mb-2">💡 Tip</h4>
                    <p className="text-slate-300 text-sm">
                      Embrace Web3 by setting up a crypto wallet and exploring LUHPHOL's decentralized features. It's your platform, owned by you!
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeSection === "metamask-wallet" && (
              <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-white text-2xl flex items-center">
                    <Wallet className="h-6 w-6 mr-3 text-orange-400" />
                    What is MetaMask Wallet?
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-slate prose-invert max-w-none">
                  <p className="text-slate-300 leading-relaxed mb-4">
                    <strong>Overview</strong>: MetaMask is a popular crypto wallet and browser extension that lets you interact with blockchain networks like Polygon and Ethereum. It stores your cryptocurrencies, NFTs, and private keys, allowing you to sign transactions securely.
                  </p>

                  <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-lg p-6 mb-6">
                    <h4 className="text-orange-300 font-semibold mb-3">Relation to FRYE Ecosystem</h4>
                    <p className="text-slate-300 leading-relaxed">
                      On LUHPHOL.com, MetaMask is required to mint <strong>FRYE token NFTs</strong>, store <strong>FRYE tokens</strong>, and interact with features like <strong>AI NationVerse</strong> (requires 1 FRYE token) and <strong>Snapshot DAO</strong> (voting with $FRYE). You connect MetaMask to the platform to manage your digital assets.
                    </p>
                  </div>

                  <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
                    <h4 className="text-cyan-300 font-semibold mb-3">How to Use:</h4>
                    <ol className="text-slate-300 text-sm space-y-2 list-decimal list-inside">
                      <li>Install MetaMask (browser extension or mobile app).</li>
                      <li>Create a wallet and back up your seed phrase securely.</li>
                      <li>Configure MetaMask for Polygon and Ethereum networks.</li>
                      <li>Connect MetaMask to LUHPHOL.com via the "Connect Wallet" button.</li>
                    </ol>
                  </div>

                  <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
                    <h4 className="text-green-300 font-semibold mb-2 flex items-center">
                      <Lightbulb className="h-4 w-4 mr-2" />
                      Example
                    </h4>
                    <p className="text-slate-300 text-sm">
                      You connect MetaMask to LUHPHOL.com, mint a "biotech therapy" NFT, and receive a FRYE token in your wallet, which you use to access AI NationVerse.
                    </p>
                  </div>

                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                    <h4 className="text-blue-300 font-semibold mb-2">💡 Tip</h4>
                    <p className="text-slate-300 text-sm">
                      Keep your MetaMask seed phrase safe and never share it. Use Polygon for low-cost transactions on LUHPHOL.com.
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeSection === "coinbase-wallet" && (
              <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-white text-2xl flex items-center">
                    <CreditCard className="h-6 w-6 mr-3 text-blue-400" />
                    What is Coinbase Wallet?
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-slate prose-invert max-w-none">
                  <p className="text-slate-300 leading-relaxed mb-4">
                    <strong>Overview</strong>: Coinbase Wallet is a crypto wallet (app or browser extension) that lets you store cryptocurrencies, NFTs, and private keys, and interact with blockchain networks like Ethereum and Polygon. It's user-friendly for beginners and integrates with Coinbase's exchange.
                  </p>

                  <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg p-6 mb-6">
                    <h4 className="text-blue-300 font-semibold mb-3">Relation to FRYE Ecosystem</h4>
                    <p className="text-slate-300 leading-relaxed">
                      While MetaMask is the primary wallet for LUHPHOL.com, Coinbase Wallet can also be used to store <strong>FRYE token NFTs</strong> and <strong>FRYE tokens</strong> on Polygon or Ethereum. It supports the same Web3 interactions (minting, trading, voting) but offers a different interface.
                    </p>
                  </div>

                  <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
                    <h4 className="text-cyan-300 font-semibold mb-3">How to Use:</h4>
                    <ol className="text-slate-300 text-sm space-y-2 list-decimal list-inside">
                      <li>Download Coinbase Wallet (app or extension).</li>
                      <li>Set up a wallet and secure your recovery phrase.</li>
                      <li>Add Polygon and Ethereum networks.</li>
                      <li>Connect to LUHPHOL.com via the wallet's "Connect" feature.</li>
                    </ol>
                  </div>

                  <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
                    <h4 className="text-green-300 font-semibold mb-2 flex items-center">
                      <Lightbulb className="h-4 w-4 mr-2" />
                      Example
                    </h4>
                    <p className="text-slate-300 text-sm">
                      You use Coinbase Wallet to store a FRYE NFT (FRYE-000000001), trade it on a Polygon marketplace, or vote in Snapshot DAO with $FRYE tokens.
                    </p>
                  </div>

                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                    <h4 className="text-blue-300 font-semibold mb-2">💡 Tip</h4>
                    <p className="text-slate-300 text-sm">
                      Try Coinbase Wallet if you prefer its interface, but MetaMask is widely supported. Always secure your recovery phrase!
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeSection === "what-is-dao" && (
              <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-white text-2xl flex items-center">
                    <Vote className="h-6 w-6 mr-3 text-purple-400" />
                    What is a DAO?
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-slate prose-invert max-w-none">
                  <p className="text-slate-300 leading-relaxed mb-4">
                    <strong>Overview</strong>: A DAO, or Decentralized Autonomous Organization, is a community-run group governed by smart contracts on a blockchain. Members use tokens to vote on decisions, ensuring transparent, decentralized management without a central authority.
                  </p>

                  <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-6 mb-6">
                    <h4 className="text-purple-300 font-semibold mb-3">Relation to FRYE Ecosystem</h4>
                    <p className="text-slate-300 leading-relaxed">
                      LUHPHOL.com uses <strong>Snapshot DAO</strong> (on Polygon) for platform governance. Users with <strong>$FRYE tokens</strong> vote on proposals, like adding new PromptX sectors or adjusting Respect Fees, shaping the ecosystem's future.
                    </p>
                  </div>

                  <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
                    <h4 className="text-green-300 font-semibold mb-2 flex items-center">
                      <Lightbulb className="h-4 w-4 mr-2" />
                      Example
                    </h4>
                    <p className="text-slate-300 text-sm">
                      You hold 5,000 $FRYE and vote in Snapshot DAO to approve a new "space tech" sector for PromptX, influencing LUHPHOL.com's development.
                    </p>
                  </div>

                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                    <h4 className="text-blue-300 font-semibold mb-2">💡 Tip</h4>
                    <p className="text-slate-300 text-sm">
                      Participate in Snapshot DAO to have your say in the platform's evolution. More $FRYE means more voting power!
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeSection === "what-is-cryptocurrency" && (
              <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-white text-2xl flex items-center">
                    <Coins className="h-6 w-6 mr-3 text-yellow-400" />
                    What is Cryptocurrency?
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-slate prose-invert max-w-none">
                  <p className="text-slate-300 leading-relaxed mb-4">
                    <strong>Overview</strong>: Cryptocurrency is digital money secured by cryptography and stored on a blockchain. It's decentralized, meaning no single entity (like a bank) controls it. Examples include Bitcoin, Ethereum (ETH), and Polygon (MATIC).
                  </p>

                  <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-lg p-6 mb-6">
                    <h4 className="text-yellow-300 font-semibold mb-3">Relation to FRYE Ecosystem</h4>
                    <p className="text-slate-300 leading-relaxed">
                      The FRYE Ecosystem uses <strong>$FRYE</strong> (a utility token, purchased with fiat) and <strong>FRYE</strong> (a crypto token, minted on Polygon). $FRYE unlocks platform features, while FRYE tokens (tied to NFTs) are tradable cryptocurrencies on Polygon, representing your ideas' value.
                    </p>
                  </div>

                  <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
                    <h4 className="text-green-300 font-semibold mb-2 flex items-center">
                      <Lightbulb className="h-4 w-4 mr-2" />
                      Example
                    </h4>
                    <p className="text-slate-300 text-sm">
                      You buy 1,000 $FRYE with $10 to use PromptX, then mint an idea to receive a FRYE token, which you trade on a Polygon marketplace for MATIC.
                    </p>
                  </div>

                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                    <h4 className="text-blue-300 font-semibold mb-2">💡 Tip</h4>
                    <p className="text-slate-300 text-sm">
                      Use $FRYE for platform actions and FRYE tokens for trading or AI NationVerse access. Learn about MATIC for low-cost Polygon transactions.
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeSection === "what-is-crypto-wallet" && (
              <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-white text-2xl flex items-center">
                    <Wallet className="h-6 w-6 mr-3 text-green-400" />
                    What is a Crypto Wallet?
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-slate prose-invert max-w-none">
                  <p className="text-slate-300 leading-relaxed mb-4">
                    <strong>Overview</strong>: A crypto wallet is a software tool (e.g., app or browser extension) that stores your private keys, allowing you to manage cryptocurrencies and NFTs on blockchains. It connects to decentralized apps like LUHPHOL.com for transactions.
                  </p>

                  <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-6 mb-6">
                    <h4 className="text-green-300 font-semibold mb-3">Relation to FRYE Ecosystem</h4>
                    <p className="text-slate-300 leading-relaxed">
                      You need a crypto wallet (e.g., MetaMask or Coinbase Wallet) to interact with LUHPHOL.com. It stores your <strong>FRYE token NFTs</strong>, <strong>FRYE tokens</strong>, and facilitates actions like minting, trading, voting in Snapshot DAO, and accessing AI NationVerse.
                    </p>
                  </div>

                  <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
                    <h4 className="text-green-300 font-semibold mb-2 flex items-center">
                      <Lightbulb className="h-4 w-4 mr-2" />
                      Example
                    </h4>
                    <p className="text-slate-300 text-sm">
                      You connect MetaMask to LUHPHOL.com, mint an NFT, and store the FRYE token in your wallet. You later use it to enter AI NationVerse or vote in Snapshot DAO.
                    </p>
                  </div>

                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                    <h4 className="text-blue-300 font-semibold mb-2">💡 Tip</h4>
                    <p className="text-slate-300 text-sm">
                      Choose a wallet like MetaMask for ease of use with LUHPHOL.com. Always back up your wallet's seed phrase in a secure place!
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Blockchain Content Sections */}
            {activeSection === "what-is-blockchain" && (
              <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-white text-2xl flex items-center">
                    <Layers className="h-6 w-6 mr-3 text-indigo-400" />
                    What is Blockchain?
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-slate prose-invert max-w-none">
                  <p className="text-slate-300 leading-relaxed mb-4">
                    <strong>Overview</strong>: A blockchain is a decentralized, digital ledger that records transactions across many computers. It's secure, transparent, and tamper-proof, as each transaction is verified and linked in a chain of blocks. Blockchains power cryptocurrencies, NFTs, and smart contracts.
                  </p>

                  <div className="bg-gradient-to-r from-indigo-500/10 to-blue-500/10 border border-indigo-500/20 rounded-lg p-6 mb-6">
                    <h4 className="text-indigo-300 font-semibold mb-3">Relation to FRYE Ecosystem</h4>
                    <p className="text-slate-300 leading-relaxed">
                      LUHPHOL.com uses blockchains (Polygon, Ethereum, Bitcoin) to mint ideas as NFTs, timestamp them for originality, and manage <strong>$FRYE/FRYE tokens</strong>. Smart contracts automate actions like Respect Fees and Snapshot DAO voting, ensuring trust and transparency.
                    </p>
                  </div>

                  <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
                    <h4 className="text-green-300 font-semibold mb-2 flex items-center">
                      <Lightbulb className="h-4 w-4 mr-2" />
                      Example
                    </h4>
                    <p className="text-slate-300 text-sm">
                      You mint an idea on Polygon, and the blockchain records it as an NFT (FRYE-000000001), verifiable by anyone via the Polygon explorer.
                    </p>
                  </div>

                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                    <h4 className="text-blue-300 font-semibold mb-2">💡 Tip</h4>
                    <p className="text-slate-300 text-sm">
                      Think of blockchain as a permanent, public record of your ideas and transactions on LUHPHOL.com.
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeSection === "compatible-blockchains" && (
              <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-white text-2xl flex items-center">
                    <Link2 className="h-6 w-6 mr-3 text-cyan-400" />
                    Compatible Blockchains
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-slate prose-invert max-w-none">
                  <p className="text-slate-300 leading-relaxed mb-4">
                    <strong>Overview</strong>: The FRYE Ecosystem supports multiple blockchains to meet different needs: <strong>Polygon</strong> for fast, low-cost transactions; <strong>Ethereum</strong> for high-value assets; and <strong>Bitcoin</strong> for rare archives. Each blockchain enhances the platform's flexibility and security.
                  </p>

                  <div className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 rounded-lg p-6 mb-6">
                    <h4 className="text-cyan-300 font-semibold mb-3">LUHPHOL.com uses:</h4>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-purple-500/20 rounded-lg">
                          <span className="text-purple-300 font-bold">Polygon</span>
                        </div>
                        <p className="text-slate-300 text-sm">For scalable NFT minting and <strong>FRYE token</strong> transactions, including Respect Fees and Snapshot DAO.</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-blue-500/20 rounded-lg">
                          <span className="text-blue-300 font-bold">Ethereum</span>
                        </div>
                        <p className="text-slate-300 text-sm">For high-value IPs and legal-grade patents, ideal for institutional licensing.</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-orange-500/20 rounded-lg">
                          <span className="text-orange-300 font-bold">Bitcoin</span>
                        </div>
                        <p className="text-slate-300 text-sm">For archiving rare ideas as Ordinals, ensuring permanent storage.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
                    <h4 className="text-green-300 font-semibold mb-2 flex items-center">
                      <Lightbulb className="h-4 w-4 mr-2" />
                      Example
                    </h4>
                    <p className="text-slate-300 text-sm">
                      You mint a "biotech therapy" NFT on Polygon, bridge a high-value patent to Ethereum, or archive a historic idea as a Bitcoin Ordinal.
                    </p>
                  </div>

                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                    <h4 className="text-blue-300 font-semibold mb-2">💡 Tip</h4>
                    <p className="text-slate-300 text-sm">
                      Use Polygon for most actions due to low costs, Ethereum for premium IPs, and Bitcoin for permanent archives.
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeSection === "what-is-polygon" && (
              <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-white text-2xl flex items-center">
                    <Zap className="h-6 w-6 mr-3 text-purple-400" />
                    What is Polygon?
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-slate prose-invert max-w-none">
                  <p className="text-slate-300 leading-relaxed mb-4">
                    <strong>Overview</strong>: Polygon is a layer-2 blockchain that enhances Ethereum with faster, cheaper transactions. It supports NFTs, smart contracts, and decentralized apps, making it ideal for scalable platforms.
                  </p>

                  <div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20 rounded-lg p-6 mb-6">
                    <h4 className="text-purple-300 font-semibold mb-3">Relation to FRYE Ecosystem</h4>
                    <p className="text-slate-300 leading-relaxed">
                      Polygon is the primary blockchain for LUHPHOL.com, used to mint <strong>FRYE token NFTs</strong>, manage <strong>FRYE tokens</strong>, and execute smart contracts for Respect Fees and Snapshot DAO. Its low fees make it accessible for all users.
                    </p>
                  </div>

                  <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
                    <h4 className="text-green-300 font-semibold mb-2 flex items-center">
                      <Lightbulb className="h-4 w-4 mr-2" />
                      Example
                    </h4>
                    <p className="text-slate-300 text-sm">
                      You pay 50 $FRYE to mint an idea on Polygon, receiving an NFT and FRYE token in your MetaMask wallet, with minimal transaction costs.
                    </p>
                  </div>

                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                    <h4 className="text-blue-300 font-semibold mb-2">💡 Tip</h4>
                    <p className="text-slate-300 text-sm">
                      Configure MetaMask for Polygon to enjoy fast, affordable transactions on LUHPHOL.com.
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeSection === "what-is-ethereum" && (
              <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-white text-2xl flex items-center">
                    <Globe className="h-6 w-6 mr-3 text-blue-400" />
                    What is Ethereum?
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-slate prose-invert max-w-none">
                  <p className="text-slate-300 leading-relaxed mb-4">
                    <strong>Overview</strong>: Ethereum is a leading blockchain platform that supports smart contracts, NFTs, and decentralized apps. It's secure and widely used but has higher transaction costs than Polygon.
                  </p>

                  <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg p-6 mb-6">
                    <h4 className="text-blue-300 font-semibold mb-3">Relation to FRYE Ecosystem</h4>
                    <p className="text-slate-300 leading-relaxed">
                      LUHPHOL.com uses Ethereum for high-value IPs and legal-grade patents, such as those licensed to institutions. You can bridge <strong>FRYE token NFTs</strong> from Polygon to Ethereum for premium applications.
                    </p>
                  </div>

                  <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
                    <h4 className="text-green-300 font-semibold mb-2 flex items-center">
                      <Lightbulb className="h-4 w-4 mr-2" />
                      Example
                    </h4>
                    <p className="text-slate-300 text-sm">
                      You mint an idea on Polygon, then bridge its NFT to Ethereum for licensing to a biotech company, leveraging Ethereum's prestige.
                    </p>
                  </div>

                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                    <h4 className="text-blue-300 font-semibold mb-2">💡 Tip</h4>
                    <p className="text-slate-300 text-sm">
                      Use Ethereum for high-value ideas, but rely on Polygon for cost-effective minting and daily interactions.
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeSection === "what-is-bitcoin" && (
              <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-white text-2xl flex items-center">
                    <Coins className="h-6 w-6 mr-3 text-orange-400" />
                    What is Bitcoin?
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-slate prose-invert max-w-none">
                  <p className="text-slate-300 leading-relaxed mb-4">
                    <strong>Overview</strong>: Bitcoin is the first and most secure blockchain, primarily used as a cryptocurrency (BTC). The Ordinals protocol allows unique data (e.g., NFTs) to be inscribed on Bitcoin's smallest unit (satoshi), creating permanent digital artifacts.
                  </p>

                  <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-lg p-6 mb-6">
                    <h4 className="text-orange-300 font-semibold mb-3">Relation to FRYE Ecosystem</h4>
                    <p className="text-slate-300 leading-relaxed">
                      LUHPHOL.com uses Bitcoin to archive rare, one-of-a-kind ideas as <strong>Ordinals</strong>, ensuring their permanence. These are typically historic or high-impact innovations, complementing Polygon and Ethereum.
                    </p>
                  </div>

                  <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
                    <h4 className="text-green-300 font-semibold mb-2 flex items-center">
                      <Lightbulb className="h-4 w-4 mr-2" />
                      Example
                    </h4>
                    <p className="text-slate-300 text-sm">
                      You mint a groundbreaking "gene-editing experiment" and archive its metadata as a Bitcoin Ordinal, preserving it forever on the Bitcoin blockchain.
                    </p>
                  </div>

                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                    <h4 className="text-blue-300 font-semibold mb-2">💡 Tip</h4>
                    <p className="text-slate-300 text-sm">
                      Reserve Bitcoin Ordinals for your most significant ideas due to higher costs. Use Polygon for everyday minting.
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Resources Content Sections */}
            {activeSection === "books-patents" && (
              <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-white text-2xl flex items-center">
                    <Book className="h-6 w-6 mr-3 text-cyan-400" />
                    Books and Patents
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-slate prose-invert max-w-none">
                  <p className="text-slate-300 leading-relaxed mb-6">
                    The FRYE Ecosystem is backed by visionary works and patented technology, ensuring trust and credibility for our users.
                  </p>

                  <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-lg p-6 mb-6">
                    <h4 className="text-blue-300 font-semibold mb-4 text-lg">Our Books</h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="text-cyan-300 font-semibold mb-2">The Patent-Backed Dollar</h5>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          This book outlines how human ingenuity can become a liquid asset, inspiring LUHPHOL.com's mission to monetize ideas.
                        </p>
                      </div>
                      <div>
                        <h5 className="text-cyan-300 font-semibold mb-2">Digital King of AI NationVerse</h5>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          This work introduces the virtual world of AI NationVerse, where your ideas become thriving businesses.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-6 mb-6">
                    <h4 className="text-purple-300 font-semibold mb-4 text-lg">Our Patents</h4>
                    <p className="text-slate-300 leading-relaxed">
                      LUHPHOL.com and AI NationVerse are protected by Utility Non-Provisional patents, ensuring our platform uses cutting-edge, proprietary technology to safeguard your innovations.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-6 mb-6">
                    <h4 className="text-green-300 font-semibold mb-4 text-lg">How to Learn More</h4>
                    <ul className="text-slate-300 space-y-2 text-sm">
                      <li>• Read excerpts from our books on the homepage or AI NationVerse teaser page.</li>
                      <li>• Look for the "Patented Technology" badge on LUHPHOL.com, reflecting our commitment to innovation.</li>
                    </ul>
                  </div>

                  <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
                    <h4 className="text-orange-300 font-semibold mb-2 flex items-center">
                      <Lightbulb className="h-4 w-4 mr-2" />
                      Example
                    </h4>
                    <p className="text-slate-300 text-sm">
                      On the homepage, read a quote from <strong>The Patent-Backed Dollar</strong>: "Transforming ingenuity into liquid assets." In AI NationVerse, see <strong>Digital King</strong> lore: "Build your virtual empire."
                    </p>
                  </div>

                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                    <h4 className="text-blue-300 font-semibold mb-2">💡 Tip</h4>
                    <p className="text-slate-300 text-sm">
                      Explore our books to understand the vision behind FRYE. Our patents guarantee a secure, innovative platform for your ideas.
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Default content for other sections */}
            {!["introduction", "getting-started", "promptx", "crispr-vault", "ai-nationverse", "governance", "frye-token", "respect-fee", "what-is-nft", "what-is-minting", "how-to-buy-nft", "how-to-sell-nft", "bitcoin-ordinals", "nft-ticketing", "hybridization", "what-is-web3", "metamask-wallet", "coinbase-wallet", "what-is-dao", "what-is-cryptocurrency", "what-is-crypto-wallet", "what-is-blockchain", "compatible-blockchains", "what-is-polygon", "what-is-ethereum", "what-is-bitcoin", "books-patents"].includes(activeSection) && (
              <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
                <CardContent className="p-12 text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Coming Soon</h3>
                  <p className="text-slate-300">
                    This documentation section is currently under development. Check back soon for detailed information about {activeSection.replace('-', ' ')}.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
