"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  Coins,
  TrendingUp,
  Lock,
  Gavel,
  ArrowUpRight,
  ArrowDownRight,
  Zap,
  DollarSign,
  Vote,
  Handshake,
  FileText,
  Download,
} from "lucide-react"

const transactions = [
  {
    type: "earned",
    description: "Earned 1 $FRYE for minted idea (Serial: FRYE-0000001)",
    amount: "+1",
    time: "30 minutes ago",
  },
  {
    type: "respect",
    description: "Received 50 $FRYE Respect Fee for hybridization",
    amount: "+50",
    time: "1 hour ago",
  },
  {
    type: "investment",
    description: "Invested 1,000 $FRYE on Polygon for $10",
    amount: "+1000",
    time: "2 hours ago",
  },
  { type: "mint", description: "Minted NFT: AI Trading Algorithm", amount: "-50", time: "1 day ago" },
  { type: "royalty", description: "Royalty Payment Received", amount: "+25", time: "2 days ago" },
  { type: "stake", description: "Staked Tokens", amount: "-1000", time: "3 days ago" },
  { type: "reward", description: "Staking Rewards", amount: "+15", time: "1 week ago" },
  { type: "governance", description: "Governance Participation Reward", amount: "+10", time: "2 weeks ago" },
]

const tokenUtilities = [
  {
    icon: Zap,
    title: "Minting",
    description: "Pay fees to mint IP NFTs",
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/20",
  },
  {
    icon: Vote,
    title: "Governance",
    description: "Vote on ecosystem proposals",
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/20",
  },
  {
    icon: DollarSign,
    title: "Royalties",
    description: "Earn from IP monetization",
    color: "text-green-400",
    bgColor: "bg-green-500/20",
  },
  {
    icon: Lock,
    title: "Staking",
    description: "Stake for enhanced benefits",
    color: "text-purple-400",
    bgColor: "bg-purple-500/20",
  },
  {
    icon: Handshake,
    title: "Respect Fees",
    description: "Earn from hybridization",
    color: "text-orange-400",
    bgColor: "bg-orange-500/20",
  },
  {
    icon: FileText,
    title: "IP Tools",
    description: "Access Patent & Trademark Forms",
    color: "text-blue-400",
    bgColor: "bg-blue-500/20",
  },
]

export default function TokenDashboard() {
  // Mock data for the innovation counter
  const innovationsMinted = 12750000  // More realistic early adoption number
  const maxInnovations = 500000000
  const progressPercentage = (innovationsMinted / maxInnovations) * 100

  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold gradient-text mb-2">Token Dashboard</h1>
          <p className="text-slate-300">Manage your $FRYE token activities and utilities</p>
        </div>

        {/* Token Overview */}
        <div className="mb-8">
          <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl neon-glow">
            <CardHeader>
              <CardTitle className="text-white text-2xl">$FRYE Token Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-slate-300 leading-relaxed">
                Purchase $FRYE utility tokens ($10 = 1,000 $FRYE) to unlock PromptX, Patent & Trademark Forms, White
                Papers, Pitch Decks, CRISPR Eternity Vault, NFT minting, timestamping, and hybridization tools. $FRYE is
                not directly linked to cryptocurrency. Every original idea minted creates 1 $FRYE token with a unique
                serial number (e.g., FRYE-000000001), capped at 500M, ensuring proof-of-creation, verifiable scarcity,
                tradeable IP, and a traceable ecosystem. Pay Respect Fees in $FRYE to hybridize ideas, creating passive
                income for creators.
              </p>

              {/* Innovation Counter */}
              <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-white mb-2">Innovations Minted</h3>
                  <div className="text-3xl font-bold gradient-text mb-4">{innovationsMinted.toLocaleString()}/500M</div>
                  <Progress value={progressPercentage} className="h-3 mb-4 bg-slate-800 [&>div]:bg-gradient-to-r [&>div]:from-cyan-400 [&>div]:to-purple-400" />
                  <p className="text-slate-300 text-sm">
                    Each $FRYE token is serial-linked to an innovation. Respect Fees enable collaboration.
                  </p>
                </div>
              </div>

              <Button className="w-full neon-glow bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-8 py-4 text-lg font-semibold">
                <div className="flex items-center justify-center">
                  <div className="w-6 h-6 mr-3 bg-white rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-sm">P</span>
                  </div>
                  Purchase $FRYE Utility Tokens
                </div>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Token Balance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl neon-glow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">Total Balance</CardTitle>
              <Coins className="h-4 w-4 text-cyan-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">2,450 $FRYE</div>
              <p className="text-xs text-slate-400 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1 text-green-400" />
                +12% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl neon-glow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">Staked Tokens</CardTitle>
              <Lock className="h-4 w-4 text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">1,200 $FRYE</div>
              <p className="text-xs text-slate-400">Earning 8% APY</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl neon-glow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">Auction Access</CardTitle>
              <Gavel className="h-4 w-4 text-yellow-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">Active</div>
              <p className="text-xs text-slate-400">Premium tier unlocked</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Action Buttons */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl neon-glow">
              <CardHeader>
                <CardTitle className="text-white">Token Actions</CardTitle>
                <CardDescription className="text-slate-300">
                  Manage your $FRYE tokens and access ecosystem features
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Button className="h-20 flex flex-col items-center justify-center space-y-2 neon-glow bg-purple-600 hover:bg-purple-500">
                    <Lock className="h-6 w-6" />
                    <span>Stake Tokens</span>
                  </Button>

                  <Button className="h-20 flex flex-col items-center justify-center space-y-2 neon-glow bg-cyan-600 hover:bg-cyan-500">
                    <Zap className="h-6 w-6" />
                    <span>Pay Minting Fee</span>
                  </Button>

                  <Button className="h-20 flex flex-col items-center justify-center space-y-2 neon-glow bg-yellow-600 hover:bg-yellow-500">
                    <Gavel className="h-6 w-6" />
                    <span>Join Auction</span>
                  </Button>

                  <Button className="h-20 flex flex-col items-center justify-center space-y-2 neon-glow bg-orange-600 hover:bg-orange-500">
                    <Handshake className="h-6 w-6" />
                    <span>Pay Respect Fee</span>
                  </Button>
                </div>

                <div className="mt-6 space-y-4">
                  <Button className="w-full neon-glow bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white">
                    <Download className="h-5 w-5 mr-2" />
                    Download IP Tools
                  </Button>
                  <p className="text-xs text-slate-400 text-center">
                    Invest $FRYE on Polygon to unlock Patent Forms, Trademark Templates, Pitch Decks, and White Papers.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Utility Highlights */}
            <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl neon-glow">
              <CardHeader>
                <CardTitle className="text-white">Utility Highlights</CardTitle>
                <CardDescription className="text-slate-300 leading-relaxed">
                  Invest $FRYE on Polygon ($10 = 1,000 $FRYE) to mint NFTs, access CRISPR Vault, pay royalties, unlock
                  Patent Forms, Trademark Templates, Pitch Decks, White Papers, PromptX, and hybridization tools. Earn 1
                  $FRYE per minted idea with a serial number (500M cap) and Respect Fees for hybridization. Not linked
                  to crypto.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {tokenUtilities.map((utility, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center space-y-2 p-3 bg-slate-800/30 rounded-lg border border-slate-700/50"
                    >
                      <div className={`p-2 rounded-full ${utility.bgColor}`}>
                        <utility.icon className={`h-5 w-5 ${utility.color}`} />
                      </div>
                      <div className="text-center">
                        <h3 className="text-white font-semibold text-sm">{utility.title}</h3>
                        <p className="text-xs text-slate-400">{utility.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Transaction History */}
          <div className="lg:col-span-1">
            <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl neon-glow">
              <CardHeader>
                <CardTitle className="text-white">Transaction History</CardTitle>
                <CardDescription className="text-slate-300">
                  Recent $FRYE token transactions and activities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {transactions.map((tx, index) => (
                    <div
                      key={index}
                      className="flex items-start justify-between p-3 bg-slate-800/30 rounded-lg border border-slate-700/50"
                    >
                      <div className="flex items-start space-x-3 flex-1">
                        <div
                          className={`p-2 rounded-full ${
                            tx.type === "earned"
                              ? "bg-green-500/20"
                              : tx.type === "respect"
                                ? "bg-orange-500/20"
                                : tx.type === "investment"
                                  ? "bg-purple-500/20"
                                  : tx.type === "mint"
                                    ? "bg-cyan-500/20"
                                    : tx.type === "royalty"
                                      ? "bg-green-500/20"
                                      : tx.type === "stake"
                                        ? "bg-purple-500/20"
                                        : tx.type === "reward"
                                          ? "bg-yellow-500/20"
                                          : "bg-blue-500/20"
                          }`}
                        >
                          {tx.type === "earned" && <Coins className="h-4 w-4 text-green-400" />}
                          {tx.type === "respect" && <Handshake className="h-4 w-4 text-orange-400" />}
                          {tx.type === "investment" && <TrendingUp className="h-4 w-4 text-purple-400" />}
                          {tx.type === "mint" && <Zap className="h-4 w-4 text-cyan-400" />}
                          {tx.type === "royalty" && <DollarSign className="h-4 w-4 text-green-400" />}
                          {tx.type === "stake" && <Lock className="h-4 w-4 text-purple-400" />}
                          {tx.type === "reward" && <TrendingUp className="h-4 w-4 text-yellow-400" />}
                          {tx.type === "governance" && <Vote className="h-4 w-4 text-blue-400" />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-white font-medium text-sm leading-tight">{tx.description}</p>
                          <p className="text-xs text-slate-400 mt-1">{tx.time}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1 ml-2">
                        <span
                          className={`font-semibold text-sm ${
                            tx.amount.startsWith("+") ? "text-green-400" : "text-red-400"
                          }`}
                        >
                          {tx.amount} $FRYE
                        </span>
                        {tx.amount.startsWith("+") ? (
                          <ArrowUpRight className="h-3 w-3 text-green-400" />
                        ) : (
                          <ArrowDownRight className="h-3 w-3 text-red-400" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
