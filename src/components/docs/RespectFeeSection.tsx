"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Handshake,
  ArrowRight,
  Coins,
  Users,
  Shield,
  Zap,
  CheckCircle,
  DollarSign,
  Clock,
  Lock,
  TrendingUp,
  FileText,
} from "lucide-react"

export default function RespectFeeSection() {
  const workflowSteps = [
    {
      step: 1,
      title: "Browse Innovation Vault",
      description: "Innovator A finds Innovation #129480 created by User B",
      icon: FileText,
      color: "text-blue-400",
    },
    {
      step: 2,
      title: "Request Hybrid Access",
      description: "Click 'Request Hybrid Access' to begin the process",
      icon: Lock,
      color: "text-yellow-400",
    },
    {
      step: 3,
      title: "Pay Respect Fee",
      description: "System prompts payment (e.g., 50 $FRYE tokens)",
      icon: DollarSign,
      color: "text-green-400",
    },
    {
      step: 4,
      title: "Access Granted",
      description: "Hybridization tools unlocked, payment sent to creator",
      icon: CheckCircle,
      color: "text-cyan-400",
    },
  ]

  const benefits = [
    {
      title: "Passive Income for Creators",
      description: "Original innovators earn ongoing revenue from their foundational ideas",
      icon: TrendingUp,
      color: "text-green-400",
    },
    {
      title: "Incentive for Bold Ideas",
      description: "Creators motivated to mint revolutionary, foundational concepts",
      icon: Zap,
      color: "text-yellow-400",
    },
    {
      title: "Collaborative Development",
      description: "IP evolution without legal bottlenecks or complex licensing",
      icon: Users,
      color: "text-blue-400",
    },
    {
      title: "Cyclical Economy",
      description: "Continuous demand for $FRYE to remix and build upon ideas",
      icon: ArrowRight,
      color: "text-purple-400",
    },
  ]

  const protectionFeatures = [
    {
      title: "Smart Contract Escrow",
      description: "Payments processed automatically via blockchain",
      icon: Shield,
    },
    {
      title: "Timestamped Transactions",
      description: "All respect fees logged on-chain for transparency",
      icon: Clock,
    },
    {
      title: "Programmable Fees",
      description: "Flat rate or percentage-based fee structures",
      icon: Coins,
    },
    {
      title: "Creator-Set Minimums",
      description: "Elite vault ideas can require higher fees",
      icon: Lock,
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
          <Handshake className="h-8 w-8 mr-3 text-orange-400" />
          Respect Fee Protocol™
        </h2>
        <p className="text-slate-300 text-lg leading-relaxed">
          When innovators want to hybridize or build upon existing ideas, they must pay respect to the original creator.
        </p>
      </div>

      {/* Protocol Overview */}
      <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
        <CardHeader>
          <CardTitle className="text-white text-xl">How Respect Fees Work</CardTitle>
          <CardDescription className="text-slate-300">
            A blockchain-powered system that ensures fair compensation for IP creators
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-lg p-6 mb-6">
            <h3 className="text-orange-300 font-semibold text-lg mb-3">Core Principle</h3>
            <p className="text-slate-300 leading-relaxed">
              On LUHPHOL.com, when an innovator wants to hybridize, remix, or build upon someone else's minted idea, 
              they must first send a <strong className="text-orange-300">Respect Fee</strong>—a transfer of $FRYE Tokens—to the original creator.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
              <Coins className="h-6 w-6 text-cyan-400 mb-3" />
              <h4 className="text-white font-semibold mb-2">Paid in $FRYE</h4>
              <p className="text-slate-300 text-sm">All fees paid using platform tokens</p>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
              <Lock className="h-6 w-6 text-purple-400 mb-3" />
              <h4 className="text-white font-semibold mb-2">Required Access</h4>
              <p className="text-slate-300 text-sm">Payment required before tool unlock</p>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
              <Shield className="h-6 w-6 text-green-400 mb-3" />
              <h4 className="text-white font-semibold mb-2">Smart Contract</h4>
              <p className="text-slate-300 text-sm">Automatic escrow processing</p>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
              <Zap className="h-6 w-6 text-yellow-400 mb-3" />
              <h4 className="text-white font-semibold mb-2">Instant Transfer</h4>
              <p className="text-slate-300 text-sm">Immediate payment to creator</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Workflow Steps */}
      <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
        <CardHeader>
          <CardTitle className="text-white text-xl">Step-by-Step Workflow</CardTitle>
          <CardDescription className="text-slate-300">
            How the Respect Fee Protocol works in practice
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {workflowSteps.map((step, index) => (
              <div key={step.step} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className={`p-3 rounded-full bg-slate-800/50 border-2 border-slate-700`}>
                    <step.icon className={`h-6 w-6 ${step.color}`} />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <Badge className="bg-slate-700 text-slate-300">Step {step.step}</Badge>
                    <h4 className="text-white font-semibold">{step.title}</h4>
                  </div>
                  <p className="text-slate-300">{step.description}</p>
                </div>
                {index < workflowSteps.length - 1 && (
                  <div className="flex-shrink-0 hidden md:block">
                    <ArrowRight className="h-6 w-6 text-slate-500" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg">
            <h4 className="text-green-300 font-semibold mb-3 flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Example Transaction
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-slate-400">Innovation ID:</p>
                <p className="text-white font-mono">#129480</p>
              </div>
              <div>
                <p className="text-slate-400">Respect Fee:</p>
                <p className="text-green-300 font-semibold">50 $FRYE</p>
              </div>
              <div>
                <p className="text-slate-400">Processing Time:</p>
                <p className="text-cyan-300">Instant</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Economic Benefits */}
      <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
        <CardHeader>
          <CardTitle className="text-white text-xl flex items-center">
            <TrendingUp className="h-6 w-6 mr-3 text-green-400" />
            What This Creates
          </CardTitle>
          <CardDescription className="text-slate-300">
            The economic and social benefits of the Respect Fee Protocol
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-6 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-cyan-400/50 transition-colors">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-slate-800/50`}>
                    <benefit.icon className={`h-6 w-6 ${benefit.color}`} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">{benefit.title}</h4>
                    <p className="text-slate-300">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Smart Contract Protection */}
      <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
        <CardHeader>
          <CardTitle className="text-white text-xl flex items-center">
            <Shield className="h-6 w-6 mr-3 text-cyan-400" />
            Smart Contract Protection
          </CardTitle>
          <CardDescription className="text-slate-300">
            Blockchain-powered security and transparency features
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {protectionFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-cyan-500/20">
                  <feature.icon className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                  <p className="text-slate-300 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-800/30 rounded-lg p-6 border border-slate-700/50">
            <h4 className="text-white font-semibold mb-3">Key Protection Points</h4>
            <div className="space-y-2 text-sm text-slate-300">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Hybridization cannot proceed unless Respect Fee is paid</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Fees are programmable (flat rate or percentage-based)</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Creator-set fees (e.g., 100 $FRYE minimum for elite vault ideas)</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Respect transactions timestamped and publicly viewable via Polygon explorer</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Participate?</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Start earning Respect Fees by minting your innovations, or pay respect to build upon existing ideas in the vault.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="neon-glow bg-orange-600 hover:bg-orange-500">
              <Handshake className="h-4 w-4 mr-2" />
              Start Minting Ideas
            </Button>
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
              <FileText className="h-4 w-4 mr-2" />
              Browse Innovation Vault
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
