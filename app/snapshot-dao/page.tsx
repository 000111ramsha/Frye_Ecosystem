"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Vote, CheckCircle, XCircle, Clock, Users, Plus, TrendingUp } from "lucide-react"

const proposals = [
  {
    id: 1,
    title: "Increase Minting Fees to 75 $FRYE",
    description:
      "Proposal to increase the base minting fee from 50 to 75 $FRYE tokens to better reflect platform value and reduce spam submissions.",
    status: "active",
    votesFor: 12500,
    votesAgainst: 3200,
    totalVotes: 15700,
    endDate: "2024-02-15",
    proposer: "0x742d35...8D4",
  },
  {
    id: 2,
    title: "Add Support for Arbitrum Network",
    description:
      "Integrate Arbitrum as a supported blockchain for NFT minting and trading to reduce gas costs and improve user experience.",
    status: "active",
    votesFor: 8900,
    votesAgainst: 1100,
    totalVotes: 10000,
    endDate: "2024-02-20",
    proposer: "0x1a2b3c...9E5",
  },
  {
    id: 3,
    title: "Implement Quarterly Token Burns",
    description:
      "Establish a quarterly token burn mechanism using 10% of platform fees to reduce total supply and increase token value.",
    status: "passed",
    votesFor: 18500,
    votesAgainst: 2300,
    totalVotes: 20800,
    endDate: "2024-01-30",
    proposer: "0x9f8e7d...2A1",
  },
  {
    id: 4,
    title: "Reduce Royalty Cap to 15%",
    description:
      "Lower the maximum royalty percentage from 20% to 15% to make IP more attractive to potential licensees.",
    status: "rejected",
    votesFor: 4200,
    votesAgainst: 11800,
    totalVotes: 16000,
    endDate: "2024-01-25",
    proposer: "0x5c4b3a...7F9",
  },
]

export default function SnapshotDAO() {
  const [showNewProposal, setShowNewProposal] = useState(false)
  const [newProposal, setNewProposal] = useState({
    title: "",
    description: "",
  })

  const handleVote = (proposalId: number, vote: "for" | "against") => {
    // Simulate voting
    console.log(`Voted ${vote} on proposal ${proposalId}`)
  }

  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold gradient-text mb-2">Snapshot DAO</h1>
            <p className="text-slate-300">Participate in FRYE Ecosystem governance</p>
          </div>

          {/* Voting Power */}
          <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl mt-4 md:mt-0">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Vote className="h-5 w-5 text-cyan-400" />
                <span className="text-white font-medium">Voting Power:</span>
                <Badge variant="outline" className="text-cyan-400 border-cyan-400">
                  1,200 $FRYE
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Proposals List */}
          <div className="lg:col-span-3 space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">Governance Proposals</h2>
              <Button
                onClick={() => setShowNewProposal(!showNewProposal)}
                className="neon-glow bg-cyan-600 hover:bg-cyan-500"
              >
                <Plus className="h-4 w-4 mr-2" />
                New Proposal
              </Button>
            </div>

            {showNewProposal && (
              <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl neon-glow">
                <CardHeader>
                  <CardTitle className="text-white">Submit New Proposal</CardTitle>
                  <CardDescription className="text-slate-300">
                    Create a new governance proposal for the community to vote on
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Proposal Title</label>
                    <Input
                      value={newProposal.title}
                      onChange={(e) => setNewProposal({ ...newProposal, title: e.target.value })}
                      placeholder="Enter proposal title"
                      className="bg-slate-800 border-slate-600 text-white focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Description</label>
                    <Textarea
                      value={newProposal.description}
                      onChange={(e) => setNewProposal({ ...newProposal, description: e.target.value })}
                      placeholder="Provide a detailed description of your proposal..."
                      className="bg-slate-800 border-slate-600 text-white focus:border-cyan-400 min-h-24"
                    />
                  </div>

                  <div className="flex space-x-2">
                    <Button className="neon-glow bg-cyan-600 hover:bg-cyan-500">Submit Proposal</Button>
                    <Button
                      variant="outline"
                      onClick={() => setShowNewProposal(false)}
                      className="border-slate-600 text-slate-300 hover:bg-slate-800"
                    >
                      Cancel
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {proposals.map((proposal) => (
              <Card
                key={proposal.id}
                className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl hover:neon-glow transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-white text-xl mb-2">{proposal.title}</CardTitle>
                      <CardDescription className="text-slate-300">{proposal.description}</CardDescription>
                    </div>
                    <Badge
                      variant="outline"
                      className={`ml-4 ${
                        proposal.status === "active"
                          ? "text-cyan-400 border-cyan-400"
                          : proposal.status === "passed"
                            ? "text-green-400 border-green-400"
                            : "text-red-400 border-red-400"
                      }`}
                    >
                      {proposal.status === "active" && <Clock className="h-3 w-3 mr-1" />}
                      {proposal.status === "passed" && <CheckCircle className="h-3 w-3 mr-1" />}
                      {proposal.status === "rejected" && <XCircle className="h-3 w-3 mr-1" />}
                      {proposal.status.charAt(0).toUpperCase() + proposal.status.slice(1)}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <div className="text-sm text-slate-400">
                      Proposed by {proposal.proposer} • Ends {proposal.endDate}
                    </div>

                    {/* Voting Progress */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-green-400">For: {proposal.votesFor.toLocaleString()}</span>
                        <span className="text-red-400">Against: {proposal.votesAgainst.toLocaleString()}</span>
                      </div>
                      <Progress value={(proposal.votesFor / proposal.totalVotes) * 100} className="h-2" />
                      <div className="text-center text-sm text-slate-400">
                        Total Votes: {proposal.totalVotes.toLocaleString()}
                      </div>
                    </div>

                    {/* Voting Buttons */}
                    {proposal.status === "active" && (
                      <div className="flex space-x-2 pt-4">
                        <Button
                          onClick={() => handleVote(proposal.id, "for")}
                          className="flex-1 neon-glow bg-green-600 hover:bg-green-500"
                        >
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Vote For
                        </Button>
                        <Button
                          onClick={() => handleVote(proposal.id, "against")}
                          variant="outline"
                          className="flex-1 border-red-400 text-red-400 hover:bg-red-400 hover:text-white"
                        >
                          <XCircle className="h-4 w-4 mr-2" />
                          Vote Against
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Voting Stats */}
            <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl neon-glow">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-cyan-400" />
                  Voting Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-slate-400">Active Proposals:</span>
                  <span className="text-white font-semibold">2</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Total Proposals:</span>
                  <span className="text-white font-semibold">4</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Your Votes Cast:</span>
                  <span className="text-cyan-400 font-semibold">3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Participation Rate:</span>
                  <span className="text-green-400 font-semibold">75%</span>
                </div>
              </CardContent>
            </Card>

            {/* Governance Info */}
            <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Users className="h-5 w-5 mr-2 text-purple-400" />
                  Governance Info
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="p-3 bg-slate-800/30 rounded-lg">
                  <p className="text-slate-300">
                    <strong className="text-white">Voting Power:</strong> Based on $FRYE token holdings
                  </p>
                </div>
                <div className="p-3 bg-slate-800/30 rounded-lg">
                  <p className="text-slate-300">
                    <strong className="text-white">Proposal Threshold:</strong> 1,000 $FRYE minimum
                  </p>
                </div>
                <div className="p-3 bg-slate-800/30 rounded-lg">
                  <p className="text-slate-300">
                    <strong className="text-white">Voting Period:</strong> 7 days per proposal
                  </p>
                </div>
                <div className="p-3 bg-slate-800/30 rounded-lg">
                  <p className="text-slate-300">
                    <strong className="text-white">Quorum:</strong> 10% of total supply
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
