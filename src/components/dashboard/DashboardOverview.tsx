"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Wallet,
  Zap,
  Shield,
  Vote,
  TrendingUp,
  Activity,
  ArrowRight,
  Coins,
  FileText,
  Handshake,
  Sparkles,
} from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const chartData = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 800 },
  { name: "May", value: 700 },
  { name: "Jun", value: 900 },
]

const recentActivity = [
  { action: "Minted NFT", item: "AI Trading Algorithm", time: "2 hours ago", type: "mint" },
  { action: "Received Royalty", item: "0.5 ETH", time: "1 day ago", type: "royalty" },
  { action: "Voted on Proposal", item: "Governance #12", time: "3 days ago", type: "vote" },
  { action: "Staked Tokens", item: "1000 $FRYE", time: "1 week ago", type: "stake" },
]

export default function DashboardOverview() {
  // Mock data for the innovation counter
  const innovationsMinted = 12750000  // More realistic early adoption number
  const maxInnovations = 500000000
  const progressPercentage = (innovationsMinted / maxInnovations) * 100

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold gradient-text mb-2">Dashboard</h1>
          <p className="text-slate-300">Manage your FRYE Ecosystem interactions</p>
        </div>

        {/* Wallet Status */}
        <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl mt-4 md:mt-0">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Wallet className="h-5 w-5 text-cyan-400" />
              <span className="text-white font-medium">0x...1234</span>
              <Badge variant="outline" className="text-green-400 border-green-400">
                <div className="flex items-center">
                  <div className="w-3 h-3 mr-1 bg-white rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-xs">P</span>
                  </div>
                  Polygon
                </div>
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Overview Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl hover:neon-glow transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">$FRYE Balance</CardTitle>
            <div className="flex items-center">
              <Coins className="h-4 w-4 text-cyan-400 mr-1" />
              <div className="w-3 h-3 bg-white rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold text-xs">P</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">2,450</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Invest in $FRYE on Polygon ($10 = 1,000 $FRYE). Earn 1 $FRYE per minted idea and Respect Fees for
              hybridization.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl hover:neon-glow transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">NFTs Owned</CardTitle>
            <Shield className="h-4 w-4 text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">8</div>
            <p className="text-xs text-slate-400">+2 this week</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl hover:neon-glow transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Respect Fees Earned</CardTitle>
            <Handshake className="h-4 w-4 text-orange-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">50 $FRYE</div>
            <p className="text-xs text-slate-400">From hybridization</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl hover:neon-glow transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Governance Power</CardTitle>
            <Vote className="h-4 w-4 text-yellow-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">1,200</div>
            <p className="text-xs text-slate-400">Voting tokens</p>
          </CardContent>
        </Card>
      </div>

      {/* Innovation Counter Widget */}
      <div className="mb-8">
        <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl neon-glow">
          <CardContent className="p-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Innovations Minted</h3>
              <div className="text-4xl font-bold gradient-text mb-4">
                {innovationsMinted.toLocaleString()}/500,000,000
              </div>
              <Progress value={progressPercentage} className="h-3 mb-4 bg-slate-800 [&>div]:bg-gradient-to-r [&>div]:from-cyan-400 [&>div]:to-purple-400" />
              <p className="text-slate-300">Each innovation creates 1 $FRYE token with a serial number</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* CRISPR Vault Access Widget */}
      <div className="mb-8">
        <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl hover:neon-glow transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Shield className="h-5 w-5 mr-2 text-cyan-400" />
              CRISPR Vault Access
              <div className="w-5 h-5 ml-2 bg-white rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold text-xs">P</span>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300 leading-relaxed">
              Unlock more vaults by investing in $FRYE on Polygon ($10 = 1,000 $FRYE), not linked to crypto. Earn 1
              $FRYE per minted idea with a serial number (500M cap). Pay Respect Fees to hybridize.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Navigation Tiles */}
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl hover:neon-glow transition-all duration-300 cursor-pointer group">
              <CardHeader>
                <CardTitle className="text-white flex items-center justify-between">
                  <div className="flex items-center">
                    <Shield className="h-6 w-6 mr-2 text-cyan-400" />
                    Innovation Vault
                  </div>
                  <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                </CardTitle>
                <CardDescription className="text-slate-300">Manage your tokenized IP assets</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl hover:neon-glow transition-all duration-300 cursor-pointer group">
              <CardHeader>
                <CardTitle className="text-white flex items-center justify-between">
                  <div className="flex items-center">
                    <Coins className="h-6 w-6 mr-2 text-purple-400" />
                    Token Dashboard
                  </div>
                  <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-purple-400 transition-colors" />
                </CardTitle>
                <CardDescription className="text-slate-300">Manage $FRYE token activities</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl hover:neon-glow transition-all duration-300 cursor-pointer group">
              <CardHeader>
                <CardTitle className="text-white flex items-center justify-between">
                  <div className="flex items-center">
                    <Vote className="h-6 w-6 mr-2 text-yellow-400" />
                    Snapshot DAO
                  </div>
                  <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-yellow-400 transition-colors" />
                </CardTitle>
                <CardDescription className="text-slate-300">Participate in governance</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl hover:neon-glow transition-all duration-300 cursor-pointer group">
              <CardHeader>
                <CardTitle className="text-white flex items-center justify-between">
                  <div className="flex items-center">
                    <Sparkles className="h-6 w-6 mr-2 text-green-400" />
                    PromptX Tools
                  </div>
                  <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-green-400 transition-colors" />
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Invest in $FRYE on Polygon to unlock. Earn $FRYE with serial-linked metadata by minting ideas and
                  Respect Fees for hybridization.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Activity Chart */}
          <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl neon-glow">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Activity className="h-5 w-5 mr-2 text-cyan-400" />
                Token Activity
              </CardTitle>
              <CardDescription className="text-slate-300">
                Your $FRYE token activity over the last 6 months
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="name" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1F2937",
                        border: "1px solid #374151",
                        borderRadius: "8px",
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#00D4FF"
                      strokeWidth={2}
                      dot={{ fill: "#00D4FF", strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <div className="lg:col-span-1">
          <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl neon-glow">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <FileText className="h-5 w-5 mr-2 text-cyan-400" />
                Recent Activity
              </CardTitle>
              <CardDescription className="text-slate-300">Your latest ecosystem interactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-slate-800/30 rounded-lg">
                    <div
                      className={`p-2 rounded-full ${
                        activity.type === "mint"
                          ? "bg-cyan-500/20"
                          : activity.type === "royalty"
                            ? "bg-green-500/20"
                            : activity.type === "vote"
                              ? "bg-yellow-500/20"
                              : "bg-purple-500/20"
                      }`}
                    >
                      {activity.type === "mint" && <Zap className="h-4 w-4 text-cyan-400" />}
                      {activity.type === "royalty" && <TrendingUp className="h-4 w-4 text-green-400" />}
                      {activity.type === "vote" && <Vote className="h-4 w-4 text-yellow-400" />}
                      {activity.type === "stake" && <Coins className="h-4 w-4 text-purple-400" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white">{activity.action}</p>
                      <p className="text-sm text-slate-400 truncate">{activity.item}</p>
                      <p className="text-xs text-slate-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
