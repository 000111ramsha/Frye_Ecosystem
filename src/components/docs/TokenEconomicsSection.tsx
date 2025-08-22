"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Coins,
  TrendingUp,
  Lock,
  DollarSign,
  Zap,
  Shield,
  Users,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Info,
} from "lucide-react"

export default function TokenEconomicsSection() {
  const tokenUtilities = [
    {
      title: "Minting Fees",
      description: "Pay fees to mint IP NFTs",
      icon: Zap,
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/20",
    },
    {
      title: "Vault Access",
      description: "Unlock CRISPR and innovation vaults",
      icon: Lock,
      color: "text-purple-400",
      bgColor: "bg-purple-500/20",
    },
    {
      title: "Governance Rights",
      description: "Vote on ecosystem proposals",
      icon: Users,
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/20",
    },
    {
      title: "Respect Fees",
      description: "Earn from IP hybridization",
      icon: DollarSign,
      color: "text-green-400",
      bgColor: "bg-green-500/20",
    },
  ]

  const tokenComparison = [
    {
      feature: "Used for actions",
      utility: "Yes: Minting, Access, Hybridization",
      innovation: "No",
    },
    {
      feature: "Tied to an original idea",
      utility: "No",
      innovation: "Yes, 1 Token = 1 Minted Idea",
    },
    {
      feature: "Purchased with fiat",
      utility: "Yes",
      innovation: "No, Minted by innovation",
    },
    {
      feature: "Held in wallet",
      utility: "Yes, Internal wallet",
      innovation: "No, Held in crypto wallet (MetaMask, etc)",
    },
    {
      feature: "Tradable externally",
      utility: "No",
      innovation: "Yes, on Polygon",
    },
    {
      feature: "Max supply",
      utility: "No limit",
      innovation: "500 million hard cap",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
          <Coins className="h-8 w-8 mr-3 text-cyan-400" />
          $FRYE Token Economics
        </h2>
        <p className="text-slate-300 text-lg leading-relaxed">
          Understanding the dual-token system that powers the FRYE Ecosystem.
        </p>
      </div>

      {/* Token Overview */}
      <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
        <CardHeader>
          <CardTitle className="text-white text-xl">Token System Overview</CardTitle>
          <CardDescription className="text-slate-300">
            The FRYE Ecosystem operates on a sophisticated dual-token model
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg">
              <h3 className="text-cyan-300 font-semibold text-lg mb-3 flex items-center">
                <DollarSign className="h-5 w-5 mr-2" />
                Utility $FRYE (Platform Token)
              </h3>
              <ul className="text-slate-300 space-y-2 text-sm">
                <li>• Non-crypto utility token</li>
                <li>• Purchased with fiat currency ($10 = 1,000 $FRYE)</li>
                <li>• Used for platform actions and access</li>
                <li>• Held in internal LUHPHOL account</li>
                <li>• No external trading</li>
              </ul>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg">
              <h3 className="text-purple-300 font-semibold text-lg mb-3 flex items-center">
                <Coins className="h-5 w-5 mr-2" />
                Innovation $FRYE (Blockchain Token)
              </h3>
              <ul className="text-slate-300 space-y-2 text-sm">
                <li>• Blockchain-based token on Polygon</li>
                <li>• Minted automatically when ideas are created</li>
                <li>• 1 token = 1 minted innovation</li>
                <li>• Held in crypto wallets (MetaMask, etc.)</li>
                <li>• Tradable on Polygon network</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Token Utilities */}
      <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
        <CardHeader>
          <CardTitle className="text-white text-xl">$FRYE Token Utilities</CardTitle>
          <CardDescription className="text-slate-300">
            Your master key to the FRYE Ecosystem platform features
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {tokenUtilities.map((utility, index) => (
              <div
                key={index}
                className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-cyan-400/50 transition-colors"
              >
                <div className={`p-3 rounded-lg ${utility.bgColor} w-fit mb-3`}>
                  <utility.icon className={`h-6 w-6 ${utility.color}`} />
                </div>
                <h4 className="text-white font-semibold mb-2">{utility.title}</h4>
                <p className="text-slate-300 text-sm">{utility.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Innovation Minting */}
      <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
        <CardHeader>
          <CardTitle className="text-white text-xl flex items-center">
            <Zap className="h-6 w-6 mr-3 text-cyan-400" />
            Every Original Idea = 1 $FRYE Token Minted
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 rounded-full bg-cyan-500/20">
                  <Info className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-cyan-300 font-semibold mb-2">Innovation-Token Link</h4>
                  <p className="text-slate-300 leading-relaxed">
                    Every time a user mints a new, original innovation, the system rewards them with 1 $FRYE Token. 
                    This creates a 1:1 relationship between human creativity and token supply.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-white font-semibold">Innovation Types That Earn Tokens:</h4>
                <div className="space-y-2">
                  {[
                    "Patentable products",
                    "Gene-editing experiments", 
                    "Trend-predicting prompts",
                    "Viral content formats"
                  ].map((type, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-slate-300">{type}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
                <h4 className="text-white font-semibold mb-3">Supply Limitation</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Innovation Cap:</span>
                    <Badge className="bg-orange-500/20 text-orange-300">500M</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Max $FRYE Tokens:</span>
                    <Badge className="bg-cyan-500/20 text-cyan-300">500M</Badge>
                  </div>
                  <Progress value={2.55} className="h-2 bg-slate-700 [&>div]:bg-gradient-to-r [&>div]:from-cyan-400 [&>div]:to-purple-400" />
                  <p className="text-xs text-slate-400">12,750,000 innovations minted</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Token Comparison Table */}
      <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
        <CardHeader>
          <CardTitle className="text-white text-xl">Token Feature Comparison</CardTitle>
          <CardDescription className="text-slate-300">
            Understanding the differences between Utility and Innovation $FRYE tokens
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left text-white font-semibold py-3 px-4">Features</th>
                  <th className="text-left text-cyan-300 font-semibold py-3 px-4">Utility $FRYE</th>
                  <th className="text-left text-purple-300 font-semibold py-3 px-4">Innovation $FRYE</th>
                </tr>
              </thead>
              <tbody>
                {tokenComparison.map((row, index) => (
                  <tr key={index} className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors">
                    <td className="py-3 px-4 text-slate-300 font-medium">{row.feature}</td>
                    <td className="py-3 px-4 text-slate-300">{row.utility}</td>
                    <td className="py-3 px-4 text-slate-300">{row.innovation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Economic Benefits */}
      <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
        <CardHeader>
          <CardTitle className="text-white text-xl flex items-center">
            <TrendingUp className="h-6 w-6 mr-3 text-green-400" />
            Economic Benefits
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-green-300 font-semibold">Supply-Side Economics</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="p-1 rounded-full bg-green-500/20 mt-1">
                    <CheckCircle className="h-3 w-3 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Supply Backed by Brilliance</p>
                    <p className="text-slate-300 text-sm">Each token tied to real, timestamped innovation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-1 rounded-full bg-green-500/20 mt-1">
                    <CheckCircle className="h-3 w-3 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Fixed Supply, Infinite Demand</p>
                    <p className="text-slate-300 text-sm">500M hard cap drives scarcity as demand rises</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-purple-300 font-semibold">Demand Drivers</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="p-1 rounded-full bg-purple-500/20 mt-1">
                    <ArrowRight className="h-3 w-3 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Platform Access</p>
                    <p className="text-slate-300 text-sm">Required for vault access and premium features</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-1 rounded-full bg-purple-500/20 mt-1">
                    <ArrowRight className="h-3 w-3 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Respect Fee Economy</p>
                    <p className="text-slate-300 text-sm">Continuous demand for IP hybridization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
