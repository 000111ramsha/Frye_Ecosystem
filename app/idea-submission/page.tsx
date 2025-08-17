"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Brain, CheckCircle, Lightbulb, Shield, Zap, Lock, Sparkles, DropletsIcon as DragDropIcon } from "lucide-react"

const aiSuggestions = [
  "Consider adding technical specifications to strengthen your IP claim",
  "Include potential market applications for broader appeal",
  "Define the unique value proposition compared to existing solutions",
  "Add implementation timeline and resource requirements",
]

const promptCards = [
  {
    id: 1,
    title: "Biotechnology Solution for Longevity",
    category: "Healthcare",
    description: "Advanced prompt for developing life extension technologies",
    locked: true,
  },
  {
    id: 2,
    title: "Sustainable Energy Innovation",
    category: "Clean Tech",
    description: "Comprehensive prompt for renewable energy solutions",
    locked: true,
  },
  {
    id: 3,
    title: "AI-Powered Financial Systems",
    category: "FinTech",
    description: "Strategic prompt for next-gen financial platforms",
    locked: true,
  },
  {
    id: 4,
    title: "Quantum Computing Applications",
    category: "Technology",
    description: "Expert prompt for quantum computing innovations",
    locked: true,
  },
]

export default function IdeaSubmission() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tags: "",
  })
  const [showSuccess, setShowSuccess] = useState(false)
  const [showCrisprModal, setShowCrisprModal] = useState(false)
  const [draggedPrompt, setDraggedPrompt] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    } else {
      setShowSuccess(true)
    }
  }

  const handleDragStart = (e: React.DragEvent, promptTitle: string) => {
    setDraggedPrompt(promptTitle)
    e.dataTransfer.effectAllowed = "copy"
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = "copy"
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    if (draggedPrompt) {
      setFormData({
        ...formData,
        description: formData.description + `\n\nEnhanced with PromptX: ${draggedPrompt}`,
      })
      setDraggedPrompt(null)
    }
  }

  const progressPercentage = (currentStep / 4) * 100

  if (showSuccess) {
    return (
      <TooltipProvider>
        <div className="pt-16 min-h-screen flex items-center justify-center">
          <div className="max-w-md mx-auto px-4">
            <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl neon-glow text-center">
              <CardContent className="p-8">
                <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-white mb-4">Idea Successfully Submitted!</h2>
                <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
                  <h3 className="text-lg font-semibold text-white mb-2">NFT Details</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Title:</span>
                      <span className="text-white">{formData.title}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Token ID:</span>
                      <span className="text-cyan-400">#FRYE-001</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Serial Number:</span>
                      <span className="text-cyan-400 font-mono">FRYE-0000001</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Timestamp:</span>
                      <span className="text-white">{new Date().toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Blockchain:</span>
                      <span className="text-purple-400">Polygon</span>
                    </div>
                  </div>
                </div>
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 mb-6">
                  <p className="text-green-400 text-sm">
                    <strong>Idea minted!</strong> You've earned 1 $FRYE with serial number FRYE-0000001. Eligible for
                    Respect Fees.
                  </p>
                </div>
                <Button
                  className="w-full neon-glow bg-cyan-600 hover:bg-cyan-500"
                  onClick={() => setShowSuccess(false)}
                >
                  View in Innovation Vault
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </TooltipProvider>
    )
  }

  return (
    <TooltipProvider>
      <div className="pt-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold gradient-text mb-2">Submit Your Innovation</h1>
            <p className="text-slate-300">Transform your idea into a tokenized intellectual asset</p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-slate-400">Progress</span>
              <span className="text-sm text-cyan-400">{currentStep}/4</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
            <div className="flex justify-between mt-2 text-xs text-slate-400">
              <span className={currentStep >= 1 ? "text-cyan-400" : ""}>Input Idea</span>
              <span className={currentStep >= 2 ? "text-cyan-400" : ""}>Enhance with PromptX</span>
              <span className={currentStep >= 3 ? "text-cyan-400" : ""}>Verify Originality</span>
              <span className={currentStep >= 4 ? "text-cyan-400" : ""}>Mint NFT</span>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="xl:col-span-2">
              <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl neon-glow">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    {currentStep === 1 && <Lightbulb className="h-6 w-6 mr-2 text-cyan-400" />}
                    {currentStep === 2 && <Sparkles className="h-6 w-6 mr-2 text-cyan-400" />}
                    {currentStep === 3 && <Shield className="h-6 w-6 mr-2 text-cyan-400" />}
                    {currentStep === 4 && <Zap className="h-6 w-6 mr-2 text-cyan-400" />}

                    {currentStep === 1 && "Describe Your Innovation"}
                    {currentStep === 2 && "Enhance with PromptX"}
                    {currentStep === 3 && "Originality Verification"}
                    {currentStep === 4 && "Ready to Mint"}
                  </CardTitle>
                  <CardDescription className="text-slate-300">
                    {currentStep === 1 && "Provide details about your innovative idea"}
                    {currentStep === 2 && "Use AI-powered prompts to enhance your submission"}
                    {currentStep === 3 && "AI-Overseer is verifying the uniqueness of your submission"}
                    {currentStep === 4 && "Your idea is ready to be minted as an NFT"}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {currentStep === 1 && (
                      <>
                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">Idea Title *</label>
                          <Input
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            placeholder="Enter a descriptive title for your innovation"
                            className="bg-slate-800 border-slate-600 text-white focus:border-cyan-400"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">Description *</label>
                          <Textarea
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            placeholder="Provide a detailed description of your innovation, including its purpose, functionality, and potential applications..."
                            className="bg-slate-800 border-slate-600 text-white focus:border-cyan-400 min-h-32"
                            onDragOver={handleDragOver}
                            onDrop={handleDrop}
                            required
                          />
                          <p className="text-xs text-slate-400 mt-1">
                            💡 Drag PromptX cards here to enhance your description
                          </p>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">Tags</label>
                          <Input
                            value={formData.tags}
                            onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                            placeholder="AI, blockchain, fintech, healthcare (comma-separated)"
                            className="bg-slate-800 border-slate-600 text-white focus:border-cyan-400"
                          />
                        </div>
                      </>
                    )}

                    {currentStep === 2 && (
                      <div className="text-center py-8">
                        <Sparkles className="h-16 w-16 text-cyan-400 mx-auto mb-4 animate-pulse" />
                        <h3 className="text-xl font-semibold text-white mb-2">PromptX Enhancement</h3>
                        <p className="text-slate-300 mb-6">
                          Drag and drop PromptX cards to enhance your innovation description
                        </p>
                        <div className="bg-slate-800/50 rounded-lg p-4">
                          <p className="text-slate-300 text-sm">
                            Your enhanced description will appear here after using PromptX prompts
                          </p>
                        </div>
                      </div>
                    )}

                    {currentStep === 3 && (
                      <div className="text-center py-8">
                        <Brain className="h-16 w-16 text-cyan-400 mx-auto mb-4 animate-pulse" />
                        <h3 className="text-xl font-semibold text-white mb-2">AI-Overseer Analysis</h3>
                        <p className="text-slate-300 mb-6">
                          Analyzing your submission for originality and potential...
                        </p>

                        <div className="space-y-4">
                          <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                            <span className="text-slate-300">Originality Check</span>
                            <CheckCircle className="h-5 w-5 text-green-400" />
                          </div>
                          <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                            <span className="text-slate-300">Market Analysis</span>
                            <CheckCircle className="h-5 w-5 text-green-400" />
                          </div>
                          <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                            <span className="text-slate-300">IP Classification</span>
                            <CheckCircle className="h-5 w-5 text-green-400" />
                          </div>
                        </div>
                      </div>
                    )}

                    {currentStep === 4 && (
                      <div className="space-y-6">
                        <div className="bg-slate-800/50 rounded-lg p-6">
                          <h3 className="text-lg font-semibold text-white mb-4">Minting Summary</h3>
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span className="text-slate-400">Title:</span>
                              <span className="text-white">{formData.title}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Minting Fee:</span>
                              <span className="text-cyan-400">50 $FRYE</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Blockchain:</span>
                              <Badge variant="outline" className="text-purple-400 border-purple-400">
                                Polygon
                              </Badge>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Royalty Rate:</span>
                              <span className="text-green-400">5%</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4">
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div className="cursor-help">
                                <h4 className="text-cyan-400 font-semibold mb-2 flex items-center">
                                  Add to CRISPR Vault
                                  <div className="w-5 h-5 ml-2 bg-white rounded-full flex items-center justify-center">
                                    <span className="text-purple-600 font-bold text-xs">P</span>
                                  </div>
                                </h4>
                                <p className="text-slate-300 text-sm">
                                  Invest $FRYE on Polygon to mint and timestamp your idea as an NFT or add to CRISPR
                                  Vault ($10 = 1,000 $FRYE). Earn 1 $FRYE with serial number FRYE-XXXXXXX (500M cap).
                                  Receive Respect Fees when others hybridize your idea.
                                </p>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Permanent storage with blockchain verification and Respect Fee eligibility</p>
                            </TooltipContent>
                          </Tooltip>
                        </div>
                      </div>
                    )}

                    <Button
                      type="submit"
                      className="w-full neon-glow bg-cyan-600 hover:bg-cyan-500"
                      disabled={currentStep === 1 && (!formData.title || !formData.description)}
                    >
                      {currentStep === 1 && "Continue to PromptX"}
                      {currentStep === 2 && "Continue to Verification"}
                      {currentStep === 3 && "Proceed to Minting"}
                      {currentStep === 4 && "Mint NFT"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* PromptX Panel */}
            <div className="xl:col-span-1">
              <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Sparkles className="h-5 w-5 mr-2 text-cyan-400" />
                    PromptX
                  </CardTitle>
                  <CardDescription className="text-slate-300 leading-relaxed">
                    PromptX delivers AI-powered prompts across 75+ sectors. Unlock with $FRYE ($10 = 1,000 $FRYE)
                    invested on Polygon, not directly linked to crypto. Mint your idea to earn 1 $FRYE with a unique
                    serial number (e.g., FRYE-000000001), capped at 500M. Pay Respect Fees to hybridize existing ideas.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-6">
                    {promptCards.map((prompt) => (
                      <Card
                        key={prompt.id}
                        className={`bg-slate-800/50 border border-slate-700/50 transition-all duration-300 ${
                          prompt.locked
                            ? "opacity-60 cursor-not-allowed"
                            : "hover:bg-slate-800/70 cursor-grab active:cursor-grabbing"
                        }`}
                        draggable={!prompt.locked}
                        onDragStart={(e) => handleDragStart(e, prompt.title)}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex-1">
                              <h4 className="text-white font-semibold text-sm mb-1">{prompt.title}</h4>
                              <Badge variant="outline" className="text-xs text-slate-400 border-slate-600 mb-2">
                                {prompt.category}
                              </Badge>
                              <p className="text-slate-400 text-xs">{prompt.description}</p>
                            </div>
                            {prompt.locked && <Lock className="h-4 w-4 text-cyan-400 ml-2 animate-pulse" />}
                            {!prompt.locked && <DragDropIcon className="h-4 w-4 text-slate-400 ml-2" />}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <Button className="w-full neon-glow bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white">
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 mr-2 bg-white rounded-full flex items-center justify-center">
                        <span className="text-purple-600 font-bold text-xs">P</span>
                      </div>
                      Purchase $FRYE to Unlock
                    </div>
                  </Button>

                  <div className="mt-4 p-3 bg-slate-800/30 rounded-lg border border-slate-700/50">
                    <p className="text-xs text-slate-400 text-center">
                      💡 Drag unlocked prompts to your description area to enhance your innovation
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  )
}
