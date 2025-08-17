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
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  // Mock data for the innovation counter
  const innovationsMinted = 127543
  const maxInnovations = 500000000
  const progressPercentage = (innovationsMinted / maxInnovations) * 100

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

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <div className="mb-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800/60 backdrop-blur-sm border border-cyan-500/30 text-cyan-300 text-sm font-medium mb-8">
              <Star className="h-4 w-4 mr-2" />
              Next-Generation IP Platform
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-8 gradient-text animate-float text-shadow">
            Transform Ideas into
            <br />
            Liquid Assets
          </h1>

          <p className="text-xl md:text-2xl text-slate-200 mb-12 max-w-3xl mx-auto leading-relaxed text-shadow">
            The revolutionary platform for digital innovation and IP monetization powered by AI-Overseer and blockchain
            technology. Join the future of intellectual property management.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link href="/join-us">
              <Button
                size="lg"
                className="neon-glow bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-4 text-lg font-semibold shadow-xl"
              >
                Join the Ecosystem
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            <Link href="/innovation-vault">
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-200 hover:bg-slate-800/60 hover:text-cyan-300 px-8 py-4 text-lg font-semibold backdrop-blur-sm bg-transparent"
              >
                Explore Platform
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[
              { label: "Active Users", value: "10K+" },
              { label: "NFTs Minted", value: "50K+" },
              { label: "Total Volume", value: "$2M+" },
              { label: "Partnerships", value: "100+" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-cyan-300">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-24 px-4 section-bg">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl p-6 rounded-xl transition-all duration-300 hover:bg-slate-900/80 hover:border-slate-600/70 hover:shadow-2xl">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-4xl font-bold text-white mb-6">Executive Summary</CardTitle>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
            </CardHeader>
            <CardContent>
              <p className="text-xl text-slate-200 leading-relaxed text-center max-w-4xl mx-auto">
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
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold gradient-text mb-6">$FRYE Token Ecosystem</h2>
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-xl text-slate-300 leading-relaxed mb-6">
                Invest in $FRYE on Polygon ($10 = 1,000 $FRYE) to unlock PromptX, Patent & Trademark Forms, White
                Papers, Pitch Decks, CRISPR Eternity Vault, NFT minting, timestamping, and hybridization tools. $FRYE is
                not directly linked to cryptocurrency.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                Every original idea minted on LUHPHOL.com creates 1 $FRYE token with a unique serial number (e.g.,
                FRYE-000000001), capped at 500M, ensuring proof-of-creation, verifiable scarcity, tradeable IP, and a
                traceable ecosystem. Pay Respect Fees in $FRYE to hybridize existing innovations, fostering a
                collaborative economy.
              </p>
            </div>

            {/* Innovation Counter */}
            <div className="max-w-2xl mx-auto mb-12">
              <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl neon-glow">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Innovations Minted</h3>
                    <div className="text-4xl font-bold gradient-text mb-4">
                      {innovationsMinted.toLocaleString()}/500M
                    </div>
                    <Progress value={progressPercentage} className="h-3 mb-4 bg-slate-800" />
                    <p className="text-slate-300">Each innovation creates 1 $FRYE token with a serial number</p>
                  </div>

                  <div className="flex justify-center mb-6">
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 text-sm font-semibold">
                      Respect Fee Protocol™ Powered by $FRYE
                    </Badge>
                  </div>

                  <Button className="w-full neon-glow bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-8 py-4 text-lg font-semibold">
                    <div className="flex items-center justify-center">
                      <div className="w-6 h-6 mr-3 bg-white rounded-full flex items-center justify-center">
                        <span className="text-purple-600 font-bold text-sm">P</span>
                      </div>
                      Invest in $FRYE on Polygon
                    </div>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Minting",
                description: "Pay fees to mint intellectual property NFTs with AI-verified originality",
                color: "from-cyan-400 to-blue-500",
              },
              {
                icon: Sparkles,
                title: "Earn 1 $FRYE per Minted Idea",
                description: "Every original innovation you mint automatically generates 1 $FRYE token",
                color: "from-green-400 to-emerald-500",
              },
              {
                icon: Layers,
                title: "Pay Respect Fees to Hybridize",
                description: "Use $FRYE tokens to pay Respect Fees and build upon existing innovations",
                color: "from-orange-400 to-red-500",
              },
              {
                icon: Shield,
                title: "Licensing",
                description: "Access exclusive licensing auctions and premium marketplace features",
                color: "from-purple-400 to-pink-500",
              },
              {
                icon: Vote,
                title: "Governance",
                description: "Vote on ecosystem proposals and shape the future of the platform",
                color: "from-yellow-400 to-orange-500",
              },
              {
                icon: Coins,
                title: "Staking",
                description: "Stake tokens for enhanced platform benefits and passive rewards",
                color: "from-indigo-400 to-purple-500",
              },
              {
                icon: Globe,
                title: "Royalties",
                description: "Earn continuous royalties from IP monetization and licensing",
                color: "from-blue-400 to-indigo-500",
              },
              {
                icon: TrendingUp,
                title: "Premium Access",
                description: "Unlock advanced AI features and priority platform support",
                color: "from-red-400 to-rose-500",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl p-6 rounded-xl transition-all duration-300 hover:bg-slate-900/80 hover:border-slate-600/70 hover:shadow-2xl group hover:scale-105"
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${item.color} p-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-white">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 text-center leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Chain Integrations */}
      <section className="py-24 px-4 section-bg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold gradient-text mb-6">Multi-Chain Integration</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Seamlessly operate across multiple blockchain networks for maximum flexibility
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Polygon",
                description:
                  "Polygon enables fast, scalable investment in $FRYE, low-cost NFT minting, and secure Respect Fee transactions for hybridization.",
                color: "from-purple-500 to-violet-600",
                features: ["Fast $FRYE Investment", "Low-Cost Minting", "Respect Fee Transactions"],
              },
              {
                name: "Ethereum",
                description: "Secure smart contracts and DeFi integrations with maximum decentralization",
                color: "from-blue-500 to-cyan-600",
                features: ["Maximum Security", "DeFi Integration", "Large Ecosystem"],
              },
              {
                name: "Bitcoin Ordinals",
                description: "Immutable IP storage on the Bitcoin network with unparalleled permanence",
                color: "from-orange-500 to-yellow-600",
                features: ["Immutable Storage", "Maximum Security", "Digital Artifacts"],
              },
            ].map((chain, index) => (
              <Card
                key={index}
                className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl p-6 rounded-xl transition-all duration-300 hover:bg-slate-900/80 hover:border-slate-600/70 hover:shadow-2xl group hover:scale-105"
              >
                <CardHeader className="text-center pb-6">
                  <div
                    className={`w-20 h-20 mx-auto mb-4 rounded-3xl bg-gradient-to-r ${chain.color} p-5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                      <span className="text-2xl font-bold text-slate-800">{chain.name[0]}</span>
                    </div>
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
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold gradient-text mb-6">PromptX</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Advanced prompt engineering and AI interaction tools for enhanced creativity
            </p>
          </div>

          <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl p-6 rounded-xl transition-all duration-300 hover:bg-slate-900/80 hover:border-slate-600/70 hover:shadow-2xl">
            <CardContent className="p-12">
              <div className="flex items-center justify-center mb-12">
                <div className="relative">
                  <Sparkles className="h-24 w-24 text-cyan-400 animate-pulse-glow" />
                  <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl p-4">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Smart Prompting</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Advanced prompt engineering tools for optimal AI interactions and creative outputs
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl p-4">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Rapid Iteration</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Quick iteration and refinement of ideas through intelligent prompt suggestions
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl p-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Collaborative Tools</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Share and collaborate on prompts with the community for enhanced innovation
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CRISPR Eternity Vault */}
      <section className="py-24 px-4 section-bg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold gradient-text mb-6">CRISPR Eternity Vault</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Permanent, immutable storage for your most valuable intellectual property
            </p>
          </div>

          <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl p-6 rounded-xl transition-all duration-300 hover:bg-slate-900/80 hover:border-slate-600/70 hover:shadow-2xl">
            <CardContent className="p-12">
              <div className="flex items-center justify-center mb-12">
                <div className="relative">
                  <Shield className="h-24 w-24 text-purple-400 animate-pulse-glow" />
                  <div className="absolute inset-0 bg-purple-400/20 rounded-full blur-xl animate-pulse"></div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-400 to-indigo-500 rounded-2xl p-4">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Eternal Storage</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Immutable storage ensuring your IP remains accessible and verifiable forever
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl p-4">
                    <Network className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Distributed Security</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Multi-chain redundancy ensures maximum security and accessibility
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl p-4">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Value Preservation</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Maintain and enhance the value of your intellectual property over time
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FRYE AI Concept */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold gradient-text mb-6">AI-Overseer Interface</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Advanced artificial intelligence powering the future of intellectual property
            </p>
          </div>

          <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl p-6 rounded-xl transition-all duration-300 hover:bg-slate-900/80 hover:border-slate-600/70 hover:shadow-2xl">
            <CardContent className="p-12">
              <div className="flex items-center justify-center mb-12">
                <div className="relative">
                  <Brain className="h-24 w-24 text-cyan-400 animate-pulse-glow" />
                  <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl p-4">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Intelligent Analysis</h3>
                  <p className="text-slate-300 leading-relaxed">
                    AI-powered IP evaluation and originality verification with advanced pattern recognition
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl p-4">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Smart Recommendations</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Automated suggestions for IP optimization and monetization strategies
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl p-4">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Predictive Insights</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Market analysis and revenue forecasting for your innovations
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Visual Architecture Overview */}
      <section className="py-24 px-4 section-bg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold gradient-text mb-6">System Architecture</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              A comprehensive ecosystem designed for seamless IP management and monetization
            </p>
          </div>

          <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl p-6 rounded-xl transition-all duration-300 hover:bg-slate-900/80 hover:border-slate-600/70 hover:shadow-2xl">
            <CardContent className="p-12">
              <div className="flex flex-wrap justify-center items-center gap-12">
                {[
                  { icon: Network, label: "AI-Overseer", color: "from-cyan-400 to-blue-500" },
                  { icon: Globe, label: "LUHPHOL.com", color: "from-purple-400 to-pink-500" },
                  { icon: Shield, label: "Innovation Vault", color: "from-green-400 to-emerald-500" },
                  { icon: Zap, label: "NFT Ecosystem", color: "from-yellow-400 to-orange-500" },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center group">
                    <div
                      className={`w-20 h-20 mb-4 rounded-3xl bg-gradient-to-r ${item.color} p-5 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <item.icon className="h-10 w-10 text-white" />
                    </div>
                    <span className="text-white font-semibold text-lg">{item.label}</span>
                    {index < 3 && (
                      <div className="hidden lg:block absolute w-24 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transform translate-x-20 -translate-y-10"></div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950/90 border-t border-slate-800/50 py-16 px-4">
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
    </div>
  )
}
