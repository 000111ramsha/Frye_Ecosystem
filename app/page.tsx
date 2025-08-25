"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
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
  ArrowUp,
  ChevronDown,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
// import ScrollToTopButton from "@/components/ScrollToTopButton" // Temporarily disabled to fix hydration
// import OptimizedImage from "@/components/optimized/OptimizedImage" // Removed to fix hydration issues

export default function HomePage() {
  // Mock data for the innovation counter
  const innovationsMinted = 12750000  // More realistic early adoption number
  const maxInnovations = 500000000
  const progressPercentage = (innovationsMinted / maxInnovations) * 100

  // State for scroll-to-top button visibility
  const [showScrollToTop, setShowScrollToTop] = useState(false)

  // State for FAQ accordion toggles
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  // Handle scroll event to show/hide scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setShowScrollToTop(scrollTop > 300) // Show button after scrolling 300px
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Toggle FAQ accordion
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/60 to-slate-950/80" />

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="mb-6">
            <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-slate-800/60 backdrop-blur-sm border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium mb-6 sm:mb-8">
              <Star className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
              Next-Generation IP Platform
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 gradient-text animate-float text-shadow leading-tight">
            Transform Ideas into
            <br />
            Liquid Assets
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-slate-200 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed text-shadow px-2">
            The revolutionary platform for digital innovation and IP monetization powered by AI-Overseer and blockchain
            technology. Join the future of intellectual property management.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 px-4">
            <Link href="/join-us" className="w-full sm:w-auto max-w-sm sm:max-w-none">
              <Button
                size="lg"
                className="w-full sm:w-auto neon-glow bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-xl gpu-accelerated"
              >
                Join the Ecosystem
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </Link>

            <Link href="/innovation-vault" className="w-full sm:w-auto max-w-sm sm:max-w-none">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-slate-600 text-slate-200 hover:bg-slate-800/60 hover:text-cyan-300 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold backdrop-blur-sm bg-transparent gpu-accelerated"
              >
                Explore Platform
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto px-4">
            {[
              { label: "Active Users", value: "10K+" },
              { label: "NFTs Minted", value: "50K+" },
              { label: "Total Volume", value: "$2M+" },
              { label: "Partnerships", value: "100+" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-300">{stat.value}</div>
                <div className="text-xs sm:text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 section-bg">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl p-4 sm:p-6 rounded-xl transition-all duration-300 hover:bg-slate-900/80 hover:border-slate-600/70 hover:shadow-2xl">
            <CardHeader className="text-center pb-6 sm:pb-8">
              <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">Executive Summary</CardTitle>
              <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
            </CardHeader>
            <CardContent>
              <p className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed text-center max-w-4xl mx-auto px-2">
                The FRYE Ecosystem revolutionizes intellectual property management through AI-powered oversight,
                blockchain integration, and tokenization. Our platform enables creators to transform ideas into liquid
                digital assets, facilitating seamless licensing, governance, and monetization across multiple blockchain
                networks with unprecedented security and transparency.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* $FRYE Token Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-4 sm:mb-6">$FRYE Token Ecosystem</h2>
            <div className="max-w-4xl mx-auto mb-6 sm:mb-8">
              <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-4 sm:mb-6 px-2">
              Purchase $FRYE utility tokens ($10 = 1,000 $FRYE) to access PromptX, Patent & Trademark Forms, White Papers, Pitch Decks, Eternity Vaults, NFT minting, timestamping, and hybridization tools. Each innovation minted is tied to a $FRYE crypto token on Polygon through a smart contract, securing ownership, originality, and royalties.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed px-2">
              Every original idea on LUHPHOL.com creates a unique $FRYE token with a serial number, capped at 500M, ensuring verifiable scarcity, tradeable IP, and a traceable ecosystem. Pay Respect Fees in $FRYE to hybridize innovations, fostering a collaborative economy.
              </p>
            </div>

            {/* Innovation Counter */}
            <div className="max-w-2xl mx-auto mb-8 sm:mb-12 px-4">
              <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl neon-glow">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <div className="text-center mb-4 sm:mb-6">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">Innovations Minted</h3>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-3 sm:mb-4">
                      {innovationsMinted.toLocaleString()}/500M
                    </div>
                    <Progress value={progressPercentage} className="h-2 sm:h-3 mb-3 sm:mb-4 bg-slate-800 [&>div]:bg-gradient-to-r [&>div]:from-cyan-400 [&>div]:to-purple-400" />
                    <p className="text-sm sm:text-base text-slate-300 px-2">Each innovation creates 1 $FRYE token with a serial number</p>
                  </div>

                  <div className="flex justify-center mb-4 sm:mb-6">
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-semibold text-center">
                      Respect Fee Protocol™ Powered by $FRYE
                    </Badge>
                  </div>

                  <Button className="w-full neon-glow bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold">
                    Purchase $FRYE Utility Tokens
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-7xl mx-auto px-4">
            {/* Minting - Large card top left */}
            <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl rounded-xl transition-all duration-300 hover:bg-slate-900/80 hover:border-slate-600/70 hover:shadow-2xl group hover:scale-[1.02] overflow-hidden h-72 sm:h-80 lg:h-96">
              <div className="h-full flex flex-col">
                <div className="h-48 sm:h-56 lg:h-64 overflow-hidden p-3 sm:p-4 relative">
                  <Image
                    src="/minting.png"
                    alt="Minting"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover rounded-lg group-hover:scale-110 transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="p-3 sm:p-4 flex-1 flex flex-col justify-center">
                  <h3 className="text-lg sm:text-xl font-bold text-white text-center mb-1 sm:mb-2">Minting</h3>
                  <p className="text-slate-300 text-center text-xs sm:text-sm leading-relaxed">Pay fees to mint intellectual property NFTs with AI-verified originality</p>
                </div>
              </div>
            </Card>

            {/* Earn $FRYE - Wide card top center */}
            <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl rounded-xl transition-all duration-300 hover:bg-slate-900/80 hover:border-slate-600/70 hover:shadow-2xl group hover:scale-[1.02] overflow-hidden h-72 sm:h-80 lg:h-96">
              <div className="h-full flex flex-col">
                <div className="h-48 sm:h-56 lg:h-64 overflow-hidden p-3 sm:p-4 relative">
                  <Image
                    src="/earn-frye.png"
                    alt="Earn FRYE"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover rounded-lg group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-3 sm:p-4 flex-1 flex flex-col justify-center">
                  <h3 className="text-lg sm:text-xl font-bold text-white text-center mb-1 sm:mb-2">Earn $FRYE</h3>
                  <p className="text-slate-300 text-center text-xs sm:text-sm leading-relaxed">Every original innovation you mint automatically generates 1 $FRYE token</p>
                </div>
              </div>
            </Card>

            {/* Premium Access - Larger card top right */}
            <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl rounded-xl transition-all duration-300 hover:bg-slate-900/80 hover:border-slate-600/70 hover:shadow-2xl group hover:scale-[1.02] overflow-hidden h-72 sm:h-80 lg:h-96">
              <div className="h-full flex flex-col">
                <div className="h-48 sm:h-56 lg:h-64 overflow-hidden p-3 sm:p-4 relative">
                  <Image
                    src="/premium-access.png"
                    alt="Premium Access"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover rounded-lg group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-3 sm:p-4 flex-1 flex flex-col justify-center">
                  <h3 className="text-lg sm:text-xl font-bold text-white text-center mb-1 sm:mb-2">Premium Access</h3>
                  <p className="text-slate-300 text-center text-xs sm:text-sm leading-relaxed">Unlock advanced AI features and priority platform support</p>
                </div>
              </div>
            </Card>

            {/* Respect Fees - Wide card second row */}
            <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl rounded-xl transition-all duration-300 hover:bg-slate-900/80 hover:border-slate-600/70 hover:shadow-2xl group hover:scale-[1.02] overflow-hidden h-72 sm:h-80 lg:h-96">
              <div className="h-full flex flex-col">
                <div className="h-48 sm:h-56 lg:h-64 overflow-hidden p-3 sm:p-4 relative">
                  <Image 
                    src="/paying-respect-fee.png" 
                    alt="Respect Fees" 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover rounded-lg group-hover:scale-110 transition-transform duration-300" 
                  />
                </div>
                <div className="p-3 sm:p-4 flex-1 flex flex-col justify-center">
                  <h3 className="text-lg sm:text-xl font-bold text-white text-center mb-1 sm:mb-2">Pay Respect Fees</h3>
                  <p className="text-slate-300 text-center text-xs sm:text-sm leading-relaxed">Use $FRYE tokens to pay Respect Fees and build upon existing innovations</p>
                </div>
              </div>
            </Card>

            {/* Staking - Card in row 2, position 1 */}
            <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl rounded-xl transition-all duration-300 hover:bg-slate-900/80 hover:border-slate-600/70 hover:shadow-2xl group hover:scale-[1.02] overflow-hidden h-72 sm:h-80 lg:h-96">
              <div className="h-full flex flex-col">
                <div className="h-48 sm:h-56 lg:h-64 overflow-hidden p-3 sm:p-4 relative">
                  <Image 
                    src="/staking.png" 
                    alt="Staking" 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover rounded-lg group-hover:scale-110 transition-transform duration-300" 
                    />
                </div>
                <div className="p-3 sm:p-4 flex-1 flex flex-col justify-center">
                  <h3 className="text-lg sm:text-xl font-bold text-white text-center mb-1 sm:mb-2">Staking</h3>
                  <p className="text-slate-300 text-center text-xs sm:text-sm leading-relaxed">Stake tokens for enhanced platform benefits and passive rewards</p>
                </div>
              </div>
            </Card>

            {/* Licensing - Wider card in row 2, position 2 */}
            <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl rounded-xl transition-all duration-300 hover:bg-slate-900/80 hover:border-slate-600/70 hover:shadow-2xl group hover:scale-[1.02] overflow-hidden h-72 sm:h-80 lg:h-96">
              <div className="h-full flex flex-col">
                <div className="h-48 sm:h-56 lg:h-64 overflow-hidden p-3 sm:p-4 relative">
                  <Image 
                    src="/licensing.png" 
                    alt="Licensing" 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover rounded-lg group-hover:scale-110 transition-transform duration-300" 
                  />
                </div>
                <div className="p-3 sm:p-4 flex-1 flex flex-col justify-center">
                  <h3 className="text-lg sm:text-xl font-bold text-white text-center mb-1 sm:mb-2">Licensing</h3>
                  <p className="text-slate-300 text-center text-xs sm:text-sm leading-relaxed">Access exclusive licensing auctions and premium marketplace features</p>
                </div>
              </div>
            </Card>

            {/* Royalties - Wider card in row 2, position 3 */}
            <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl rounded-xl transition-all duration-300 hover:bg-slate-900/80 hover:border-slate-600/70 hover:shadow-2xl group hover:scale-[1.02] overflow-hidden h-72 sm:h-80 lg:h-96">
              <div className="h-full flex flex-col">
                <div className="h-48 sm:h-56 lg:h-64 overflow-hidden p-3 sm:p-4 relative">
                  <Image 
                    src="/royalties.png" 
                    alt="Royalties" 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover rounded-lg group-hover:scale-110 transition-transform duration-300" 
                  />
                </div>
                <div className="p-3 sm:p-4 flex-1 flex flex-col justify-center">
                  <h3 className="text-lg sm:text-xl font-bold text-white text-center mb-1 sm:mb-2">Royalties</h3>
                  <p className="text-slate-300 text-center text-xs sm:text-sm leading-relaxed">Earn continuous royalties from IP monetization and licensing</p>
                </div>
              </div>
            </Card>

            {/* Governance - Card in row 2, position 4 */}
            <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl rounded-xl transition-all duration-300 hover:bg-slate-900/80 hover:border-slate-600/70 hover:shadow-2xl group hover:scale-[1.02] overflow-hidden h-72 sm:h-80 lg:h-96">
              <div className="h-full flex flex-col">
                <div className="h-48 sm:h-56 lg:h-64 overflow-hidden p-3 sm:p-4 relative">
                  <Image 
                    src="/governance.png" 
                    alt="Governance" 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover rounded-lg group-hover:scale-110 transition-transform duration-300" 
                  />
                </div>
                <div className="p-3 sm:p-4 flex-1 flex flex-col justify-center">
                  <h3 className="text-lg sm:text-xl font-bold text-white text-center mb-1 sm:mb-2">Governance</h3>
                  <p className="text-slate-300 text-center text-xs sm:text-sm leading-relaxed">Vote on ecosystem proposals and shape the future of the platform</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Chain Integrations */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 section-bg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-4 sm:mb-6">Multi-Chain Integration</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto px-4">
              Seamlessly operate across multiple blockchain networks for maximum flexibility
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                name: "Polygon",
                description:
                  "Polygon enables fast, scalable investment in $FRYE, low-cost NFT minting, and secure Respect Fee transactions for hybridization.",
                color: "from-purple-500 to-violet-600",
                features: ["Fast $FRYE Investment", "Low-Cost Minting", "Respect Fee Transactions"],
                icon: "/polygon.png",
              },
              {
                name: "Ethereum",
                description: "Secure smart contracts and DeFi integrations with maximum decentralization",
                color: "from-blue-500 to-cyan-600",
                features: ["Maximum Security", "DeFi Integration", "Large Ecosystem"],
                icon: "/ethereum.png",
              },
              {
                name: "Bitcoin Ordinals",
                description: "Immutable IP storage on the Bitcoin network with unparalleled permanence",
                color: "from-orange-500 to-yellow-600",
                features: ["Immutable Storage", "Maximum Security", "Digital Artifacts"],
                icon: "/bitcoin.png",
              },
            ].map((chain, index) => (
              <Card
                key={index}
                className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl p-6 rounded-xl transition-all duration-300 hover:bg-slate-900/80 hover:border-slate-600/70 hover:shadow-2xl group hover:scale-105"
              >
                <CardHeader className="text-center pb-6">
                  <div
                    className={`w-28 h-28 mx-auto mb-4 rounded-3xl bg-gradient-to-r ${chain.color} p-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}
                  >
                    <Image 
                      src={chain.icon} 
                      alt={chain.name} 
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <CardTitle className="text-2xl font-bold text-white">{chain.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-300 text-center leading-relaxed">{chain.description}</p>
                  <div className="space-y-2">
                    {chain.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center justify-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-2"></div>
                        <span className="text-sm text-slate-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PromptX Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-4 sm:mb-6">PromptX</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto px-4">
              Advanced prompt engineering and AI interaction tools for enhanced creativity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl rounded-xl transition-all duration-300 hover:bg-slate-900/80 hover:border-slate-600/70 hover:shadow-2xl group hover:scale-[1.02] overflow-hidden h-72 sm:h-80 lg:h-96">
              <div className="h-full flex flex-col">
                <div className="h-48 sm:h-56 lg:h-64 overflow-hidden p-3 sm:p-4 relative">
                  <Image 
                    src="/smart-prompting.png" 
                    alt="Smart Prompting" 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover rounded-lg group-hover:scale-110 transition-transform duration-300" 
                  />
                </div>
                <div className="p-3 sm:p-4 flex-1 flex flex-col justify-center">
                  <h3 className="text-lg sm:text-xl font-bold text-white text-center mb-1 sm:mb-2">Smart Prompting</h3>
                  <p className="text-slate-300 text-center text-xs sm:text-sm leading-relaxed">Advanced prompt engineering tools for optimal AI interactions and creative outputs</p>
                </div>
              </div>
            </Card>

            <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl rounded-xl transition-all duration-300 hover:bg-slate-900/80 hover:border-slate-600/70 hover:shadow-2xl group hover:scale-[1.02] overflow-hidden h-72 sm:h-80 lg:h-96">
              <div className="h-full flex flex-col">
                <div className="h-48 sm:h-56 lg:h-64 overflow-hidden p-3 sm:p-4 relative">
                  <Image 
                    src="/rapid-iteration.png" 
                    alt="Rapid Iteration" 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover rounded-lg group-hover:scale-110 transition-transform duration-300" 
                  />
                </div>
                <div className="p-3 sm:p-4 flex-1 flex flex-col justify-center">
                  <h3 className="text-lg sm:text-xl font-bold text-white text-center mb-1 sm:mb-2">Rapid Iteration</h3>
                  <p className="text-slate-300 text-center text-xs sm:text-sm leading-relaxed">Quick iteration and refinement of ideas through intelligent prompt suggestions</p>
                </div>
              </div>
            </Card>

            <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl rounded-xl transition-all duration-300 hover:bg-slate-900/80 hover:border-slate-600/70 hover:shadow-2xl group hover:scale-[1.02] overflow-hidden h-72 sm:h-80 lg:h-96">
              <div className="h-full flex flex-col">
                <div className="h-48 sm:h-56 lg:h-64 overflow-hidden p-3 sm:p-4 relative">
                  <Image 
                    src="/collaborative-tools.png" 
                    alt="Collaborative Tools" 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover rounded-lg group-hover:scale-110 transition-transform duration-300" 
                  />
                </div>
                <div className="p-3 sm:p-4 flex-1 flex flex-col justify-center">
                  <h3 className="text-lg sm:text-xl font-bold text-white text-center mb-1 sm:mb-2">Collaborative Tools</h3>
                  <p className="text-slate-300 text-center text-xs sm:text-sm leading-relaxed">Share and collaborate on prompts with the community for enhanced innovation</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CRISPR Eternity Vault */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 section-bg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-4 sm:mb-6">CRISPR Eternity Vault</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto px-4">
              Permanent, immutable storage for your most valuable intellectual property
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl rounded-xl transition-all duration-300 hover:bg-slate-900/80 hover:border-slate-600/70 hover:shadow-2xl group hover:scale-[1.02] overflow-hidden h-72 sm:h-80 lg:h-96">
              <div className="h-full flex flex-col">
                <div className="h-48 sm:h-56 lg:h-64 overflow-hidden p-3 sm:p-4 relative">
                  <Image 
                    src="/eternal-storage.png" 
                    alt="Eternal Storage" 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover rounded-lg group-hover:scale-110 transition-transform duration-300" 
                  />
                </div>
                <div className="p-3 sm:p-4 flex-1 flex flex-col justify-center">
                  <h3 className="text-lg sm:text-xl font-bold text-white text-center mb-1 sm:mb-2">Eternal Storage</h3>
                  <p className="text-slate-300 text-center text-xs sm:text-sm leading-relaxed">Immutable storage ensuring your IP remains accessible and verifiable forever</p>
                </div>
              </div>
            </Card>

            <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl rounded-xl transition-all duration-300 hover:bg-slate-900/80 hover:border-slate-600/70 hover:shadow-2xl group hover:scale-[1.02] overflow-hidden h-72 sm:h-80 lg:h-96">
              <div className="h-full flex flex-col">
                <div className="h-48 sm:h-56 lg:h-64 overflow-hidden p-3 sm:p-4 relative">
                  <Image 
                    src="/distributed-security.png" 
                    alt="Distributed Security" 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover rounded-lg group-hover:scale-110 transition-transform duration-300" 
                  />
                </div>
                <div className="p-3 sm:p-4 flex-1 flex flex-col justify-center">
                  <h3 className="text-lg sm:text-xl font-bold text-white text-center mb-1 sm:mb-2">Distributed Security</h3>
                  <p className="text-slate-300 text-center text-xs sm:text-sm leading-relaxed">Multi-chain redundancy ensures maximum security and accessibility</p>
                </div>
              </div>
            </Card>

            <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl rounded-xl transition-all duration-300 hover:bg-slate-900/80 hover:border-slate-600/70 hover:shadow-2xl group hover:scale-[1.02] overflow-hidden h-72 sm:h-80 lg:h-96">
              <div className="h-full flex flex-col">
                <div className="h-48 sm:h-56 lg:h-64 overflow-hidden p-3 sm:p-4 relative">
                  <Image 
                    src="/value-preservation.png" 
                    alt="Value Preservation" 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover rounded-lg group-hover:scale-110 transition-transform duration-300" 
                  />
                </div>
                <div className="p-3 sm:p-4 flex-1 flex flex-col justify-center">
                  <h3 className="text-lg sm:text-xl font-bold text-white text-center mb-1 sm:mb-2">Value Preservation</h3>
                  <p className="text-slate-300 text-center text-xs sm:text-sm leading-relaxed">Maintain and enhance the value of your intellectual property over time</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FRYE AI Concept */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-4 sm:mb-6">AI-Overseer Interface</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto px-4">
              Advanced artificial intelligence powering the future of intellectual property
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl rounded-xl transition-all duration-300 hover:bg-slate-900/80 hover:border-slate-600/70 hover:shadow-2xl group hover:scale-[1.02] overflow-hidden h-72 sm:h-80 lg:h-96">
              <div className="h-full flex flex-col">
                <div className="h-48 sm:h-56 lg:h-64 overflow-hidden p-3 sm:p-4 relative">
                  <Image 
                    src="/intelligent-analysis.png" 
                    alt="Intelligent Analysis" 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover rounded-lg group-hover:scale-110 transition-transform duration-300" 
                  />
                </div>
                <div className="p-3 sm:p-4 flex-1 flex flex-col justify-center">
                  <h3 className="text-lg sm:text-xl font-bold text-white text-center mb-1 sm:mb-2">Intelligent Analysis</h3>
                  <p className="text-slate-300 text-center text-xs sm:text-sm leading-relaxed">AI-powered IP evaluation and originality verification with advanced pattern recognition</p>
                </div>
              </div>
            </Card>

            <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl rounded-xl transition-all duration-300 hover:bg-slate-900/80 hover:border-slate-600/70 hover:shadow-2xl group hover:scale-[1.02] overflow-hidden h-72 sm:h-80 lg:h-96">
              <div className="h-full flex flex-col">
                <div className="h-48 sm:h-56 lg:h-64 overflow-hidden p-3 sm:p-4 relative">
                  <Image 
                    src="/smart-recommendations.png" 
                    alt="Smart Recommendations" 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover rounded-lg group-hover:scale-110 transition-transform duration-300" 
                  />
                </div>
                <div className="p-3 sm:p-4 flex-1 flex flex-col justify-center">
                  <h3 className="text-lg sm:text-xl font-bold text-white text-center mb-1 sm:mb-2">Smart Recommendations</h3>
                  <p className="text-slate-300 text-center text-xs sm:text-sm leading-relaxed">Automated suggestions for IP optimization and monetization strategies</p>
                </div>
              </div>
            </Card>

            <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl rounded-xl transition-all duration-300 hover:bg-slate-900/80 hover:border-slate-600/70 hover:shadow-2xl group hover:scale-[1.02] overflow-hidden h-72 sm:h-80 lg:h-96">
              <div className="h-full flex flex-col">
                <div className="h-48 sm:h-56 lg:h-64 overflow-hidden p-3 sm:p-4 relative">
                  <Image 
                    src="/predictive-insights.png" 
                    alt="Predictive Insights" 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover rounded-lg group-hover:scale-110 transition-transform duration-300" 
                  />
                </div>
                <div className="p-3 sm:p-4 flex-1 flex flex-col justify-center">
                  <h3 className="text-lg sm:text-xl font-bold text-white text-center mb-1 sm:mb-2">Predictive Insights</h3>
                  <p className="text-slate-300 text-center text-xs sm:text-sm leading-relaxed">Market analysis and revenue forecasting for your innovations</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* NFT Introduction Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 section-bg relative overflow-hidden">
        {/* Background gradient spots */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-blue-500/15 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-yellow-500/15 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-pink-500/15 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl p-4 sm:p-6 rounded-xl transition-all duration-300 hover:bg-slate-900/80 hover:border-slate-600/70 hover:shadow-2xl relative overflow-hidden">
            {/* Card background gradient spots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-8 left-8 w-24 h-24 bg-green-500/10 rounded-full blur-2xl" />
              <div className="absolute bottom-8 right-8 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl" />
              <div className="absolute top-16 right-16 w-20 h-20 bg-teal-500/10 rounded-full blur-2xl" />
              <div className="absolute bottom-16 left-16 w-28 h-28 bg-amber-500/10 rounded-full blur-2xl" />
            </div>
            <CardContent className="p-0 relative z-10">
              <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-8">
                {/* Left side - 3D elements and image */}
                <div className="lg:w-1/2 relative">
                  <div className="relative w-full h-64 sm:h-80 lg:h-[28rem]">
                    {/* 3D Book with OpenSea logo */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        {/* Blue book */}
                        <div className="w-28 h-36 sm:w-32 sm:h-44 lg:w-40 lg:h-52 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg shadow-2xl transform rotate-12 relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-blue-600 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-sm sm:text-base lg:text-xl">O</span>
                              </div>
                            </div>
                          </div>
          </div>

                        {/* Document/Checklist */}
                        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-24 h-28 sm:w-28 sm:h-32 lg:w-32 lg:h-40 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg shadow-lg transform -rotate-6">
                          <div className="p-2 sm:p-3 lg:p-4 space-y-2 sm:space-y-3">
                            <div className="h-2 sm:h-3 bg-blue-400 rounded-full w-full"></div>
                            <div className="h-2 sm:h-3 bg-blue-400 rounded-full w-3/4"></div>
                            <div className="h-2 sm:h-3 bg-blue-400 rounded-full w-5/6"></div>
                            <div className="h-2 sm:h-3 bg-blue-400 rounded-full w-2/3"></div>
                          </div>
                        </div>

                        {/* Floating crypto coins */}
                        <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-yellow-400 rounded-lg shadow-lg transform rotate-45"></div>
                        <div className="absolute top-8 -right-2 sm:top-10 sm:-right-3 lg:top-12 lg:-right-4 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-orange-400 rounded-full shadow-lg flex items-center justify-center">
                          <span className="text-white font-bold text-xs sm:text-sm lg:text-base">O</span>
                        </div>
                        <div className="absolute -bottom-2 left-8 sm:-bottom-3 sm:left-10 lg:-bottom-4 lg:left-12 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-purple-400 rounded-full shadow-lg flex items-center justify-center">
                          <span className="text-white font-bold text-xs sm:text-sm lg:text-base">∞</span>
                        </div>
                        <div className="absolute bottom-6 right-8 sm:bottom-6 sm:right-10 lg:bottom-8 lg:right-12 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-blue-600 rounded-full shadow-lg flex items-center justify-center">
                          <span className="text-white font-bold text-xs sm:text-sm">Ξ</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side - Text and button */}
                <div className="lg:w-1/2 text-center lg:text-left">
                  <div className="mb-6">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-800/60 backdrop-blur-sm border border-slate-600/30 text-slate-300 text-sm font-medium mb-4">
                      FRYE ECOSYSTEM | LEARN
                    </div>
                  </div>
                  
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4">
                    New to NFTs?
                  </h2>
                  
                  <p className="text-base sm:text-lg lg:text-xl text-slate-300 mb-6 sm:mb-8 leading-relaxed px-2">
                    Find all your answers here.
                  </p>
                  
                  <Link href="/docs?section=what-is-nft">
                    <Button 
                      size="lg"
                      className="bg-blue-600 hover:bg-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-lg rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-4 sm:mb-6">Frequently Asked Questions</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto px-4">
              Get answers to the most common questions about the FRYE Ecosystem
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What is the FRYE Ecosystem?",
                answer: "The FRYE Ecosystem is a revolutionary platform that transforms your ideas into liquid digital assets. Using AI-powered oversight, blockchain integration, and token-based economics, we make it easy to create, protect, and monetize your innovations through NFT minting and tokenization."
              },
              {
                question: "How do I get started with FRYE?",
                answer: "Getting started is simple: 1) Sign up with your Google account, 2) Set up a MetaMask wallet and configure it for Polygon, 3) Purchase $FRYE tokens ($10 = 1,000 $FRYE), and 4) Start exploring features like PromptX, idea submission, and the CRISPR Vault."
              },
              {
                question: "What's the difference between $FRYE and FRYE tokens?",
                answer: "$FRYE tokens are purchased with real money to unlock platform features like PromptX and minting. FRYE tokens are automatically created when you mint an original idea - each idea generates 1 FRYE token with a unique serial number (e.g., FRYE-000000001)."
              },
              {
                question: "How much does it cost to mint an idea?",
                answer: "Minting an original idea costs 50 $FRYE tokens. When you mint, you receive an NFT on the Polygon blockchain and 1 FRYE token with a unique serial number. The AI-Overseer verifies originality before minting."
              },
              {
                question: "What is the CRISPR Eternity Vault?",
                answer: "The CRISPR Eternity Vault is an exclusive archive of 100+ gene-editing breakthroughs and biotechnology concepts. Access costs 50 $FRYE for previews or 200 $FRYE for full details. You can also use the Respect Fee Protocol to remix ideas."
              },
              {
                question: "How does the Respect Fee Protocol work?",
                answer: "The Respect Fee Protocol allows you to build upon existing ideas in the ecosystem. You pay a Respect Fee (typically 50-200 $FRYE) to the original creator, which gives you access to hybridization tools to create new innovations based on their work."
              },
              {
                question: "Which blockchains does FRYE support?",
                answer: "FRYE supports multiple blockchains: Polygon for fast, low-cost transactions and main platform operations; Ethereum for high-value IP and institutional licensing; and Bitcoin for archiving rare ideas as permanent Ordinals."
              },
              {
                question: "What is AI NationVerse?",
                answer: "AI NationVerse is a virtual world where your minted ideas become thriving businesses. You need at least 1 FRYE token to access it. Your NFT ideas can become virtual enterprises like food trucks or shops, with real-world monetization through integrated APIs."
              }
            ].map((faq, index) => (
              <Card key={index} className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl transition-all duration-300 hover:bg-slate-900/80 hover:border-slate-600/70 hover:shadow-2xl overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-4 sm:p-6 text-left hover:bg-slate-800/30 transition-colors duration-200"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white flex items-start">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center mr-3 sm:mr-4 mt-1 flex-shrink-0">
                        <span className="text-white font-bold text-xs sm:text-sm">Q</span>
                      </div>
                      {faq.question}
                    </h3>
                    <div className={`ml-2 sm:ml-4 transition-transform duration-300 ${openFAQ === index ? 'rotate-180' : 'rotate-0'}`}>
                      <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-slate-400" />
                    </div>
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 ml-8 sm:ml-12">
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-400 mb-6">Still have questions?</p>
            <Link href="/docs">
              <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white px-8 py-3 font-semibold shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                Visit Our Documentation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950/90 border-t border-slate-800/50 py-12 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold gradient-text">FRYE</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Transforming ideas into liquid digital assets through AI and blockchain innovation.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Platform</h3>
              <div className="space-y-2">
                <Link href="/innovation-vault" className="block text-slate-400 hover:text-cyan-300 transition-colors">
                  Innovation Vault
                </Link>
                <Link href="/idea-submission" className="block text-slate-400 hover:text-cyan-300 transition-colors">
                  Submit Ideas
                </Link>
                <Link href="/token-dashboard" className="block text-slate-400 hover:text-cyan-300 transition-colors">
                  Token Dashboard
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Community</h3>
              <div className="space-y-2">
                <Link href="/snapshot-dao" className="block text-slate-400 hover:text-cyan-300 transition-colors">
                  Governance
                </Link>
                <Link href="/join-us" className="block text-slate-400 hover:text-cyan-300 transition-colors">
                  Newsletter
                </Link>
                <Link href="#" className="block text-slate-400 hover:text-cyan-300 transition-colors">
                  Discord
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <div className="space-y-2">
                <Link href="#" className="block text-slate-400 hover:text-cyan-300 transition-colors">
                  Twitter
                </Link>
                <Link href="#" className="block text-slate-400 hover:text-cyan-300 transition-colors">
                  LinkedIn
                </Link>
                <Link href="#" className="block text-slate-400 hover:text-cyan-300 transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800/50 pt-8 text-center">
            <p className="text-slate-400">
              © 2024 FRYE Ecosystem. All rights reserved. Built for the future of innovation.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Scroll to Top Button */}
      {showScrollToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 animate-in slide-in-from-bottom-2"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}

      {/* Scroll to Top Button */}
      {/* <ScrollToTopButton /> */}
    </div>
  )
}
