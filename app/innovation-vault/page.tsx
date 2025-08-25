"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Eye, Send, DollarSign, Filter, Wallet, CheckCircle, Handshake } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const mockNFTs = [
  {
    id: 1,
    title: "AI-Powered Trading Algorithm",
    author: "John Doe",
    timestamp: "2024-01-15",
    royalty: "5%",
    blockchain: "Polygon",
    image: "/AI-In-Algorithmic-Trading.jpg",
    serial: "FRYE-0000001",
  },
  {
    id: 2,
    title: "Sustainable Energy Solution",
    author: "Jane Smith",
    timestamp: "2024-01-12",
    royalty: "7%",
    blockchain: "Ethereum",
    image: "/sustainable-energy-solutions.jpg",
    serial: "FRYE-0000002",
  },
  {
    id: 3,
    title: "Quantum Computing Framework",
    author: "Alex Johnson",
    timestamp: "2024-01-10",
    royalty: "10%",
    blockchain: "Bitcoin",
    image: "/quantum-computing-abstract.png",
    serial: "FRYE-0000003",
  },
  {
    id: 4,
    title: "Blockchain Identity System",
    author: "Sarah Wilson",
    timestamp: "2024-01-08",
    royalty: "6%",
    blockchain: "Polygon",
    image: "/digital-identity-blockchain.png",
    serial: "FRYE-0000004",
  },
]

export default function InnovationVault() {
  const [sortBy, setSortBy] = useState("date")
  const [filterBy, setFilterBy] = useState("all")

  return (
    <TooltipProvider>
      <div className="pt-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold gradient-text mb-2">Your Innovation Vault</h1>
              <p className="text-slate-300">Manage your tokenized intellectual assets</p>
            </div>

            {/* Wallet Status */}
            <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl mt-4 md:mt-0">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Wallet className="h-5 w-5 text-cyan-400" />
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-white font-medium">Connected</span>
                  <Badge variant="outline" className="text-cyan-400 border-cyan-400">
                    0x...1234
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-64 space-y-4">
              <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Filter className="h-5 w-5 mr-2 text-cyan-400" />
                    Filters
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-slate-300 mb-2 block">Sort by</label>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="bg-slate-800 border-slate-600 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-600">
                        <SelectItem value="date" className="text-white hover:bg-slate-700 focus:bg-slate-700">Date</SelectItem>
                        <SelectItem value="title" className="text-white hover:bg-slate-700 focus:bg-slate-700">Title</SelectItem>
                        <SelectItem value="royalty" className="text-white hover:bg-slate-700 focus:bg-slate-700">Royalty</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-slate-300 mb-2 block">Filter by Blockchain</label>
                    <Select value={filterBy} onValueChange={setFilterBy}>
                      <SelectTrigger className="bg-slate-800 border-slate-600 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-600">
                        <SelectItem value="all" className="text-white hover:bg-slate-700 focus:bg-slate-700">All Chains</SelectItem>
                        <SelectItem value="polygon" className="text-white hover:bg-slate-700 focus:bg-slate-700">Polygon</SelectItem>
                        <SelectItem value="ethereum" className="text-white hover:bg-slate-700 focus:bg-slate-700">Ethereum</SelectItem>
                        <SelectItem value="bitcoin" className="text-white hover:bg-slate-700 focus:bg-slate-700">Bitcoin</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-4">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button className="w-full neon-glow bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white">
                          <div className="flex items-center justify-center">
                            <div className="w-5 h-5 mr-2 bg-white rounded-full flex items-center justify-center">
                              <span className="text-purple-600 font-bold text-xs">P</span>
                            </div>
                            Unlock with $FRYE
                          </div>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          Purchase $FRYE utility tokens to unlock CRISPR assets ($10 = 1,000 $FRYE). Mint an idea to earn 1
                          $FRYE with a serial number, capped at 500M. Pay Respect Fees to hybridize.
                        </p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button className="w-full neon-glow bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white">
                          <Handshake className="h-5 w-5 mr-2" />
                          Pay Respect Fee
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Initiate hybridization by paying Respect Fees to build upon existing innovations</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* NFT Grid */}
            <div className="flex-1">
              {/* CRISPR Note */}
              <div className="mb-6 p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
                <p className="text-slate-300 text-sm leading-relaxed">
                  <strong className="text-cyan-400">CRISPR Breakthrough:</strong> Unlock NFT minting, timestamping, and
                  hybridization tools with $FRYE ($10 = 1,000 $FRYE), purchased as utility tokens. Not directly linked to
                  crypto. Earn 1 $FRYE per minted idea with a serial number (e.g., FRYE-000000001), capped at 500M. Pay
                  Respect Fees to hybridize this idea.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {mockNFTs.map((nft) => (
                  <Card
                    key={nft.id}
                    className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl hover:neon-glow transition-all duration-300 group"
                  >
                    <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-t-lg flex items-center justify-center">
                      <img
                        src={nft.image || "/placeholder.svg"}
                        alt={nft.title}
                        className="w-full h-full object-cover rounded-t-lg"
                      />
                    </div>

                    <CardHeader>
                      <CardTitle className="text-white text-lg">{nft.title}</CardTitle>
                      <CardDescription className="text-slate-300">by {nft.author}</CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-400">Serial:</span>
                          <span className="text-cyan-400 font-mono">{nft.serial}</span>
                        </div>

                        <div className="flex justify-between text-sm">
                          <span className="text-slate-400">Minted:</span>
                          <span className="text-white">{nft.timestamp}</span>
                        </div>

                        <div className="flex justify-between text-sm">
                          <span className="text-slate-400">Royalty:</span>
                          <span className="text-cyan-400 font-semibold">{nft.royalty}</span>
                        </div>

                        <div className="flex justify-between text-sm">
                          <span className="text-slate-400">Chain:</span>
                          <Badge variant="outline" className="text-purple-400 border-purple-400">
                            {nft.blockchain}
                          </Badge>
                        </div>

                        <div className="grid grid-cols-2 gap-2 pt-4">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 bg-transparent"
                          >
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900 bg-transparent"
                          >
                            <Send className="h-4 w-4 mr-1" />
                            Transfer
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="col-span-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900 bg-transparent"
                          >
                            <DollarSign className="h-4 w-4 mr-1" />
                            Royalties
                          </Button>
                        </div>

                        <div className="pt-2">
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button
                                size="sm"
                                className="w-full neon-glow bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white"
                              >
                                <Handshake className="h-4 w-4 mr-2" />
                                Request Hybrid Access
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Pay a Respect Fee (e.g., 50 $FRYE) to unlock hybridization</p>
                            </TooltipContent>
                          </Tooltip>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  )
}
