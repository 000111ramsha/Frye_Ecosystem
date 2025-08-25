"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Mail, Users, Zap } from "lucide-react"

export default function JoinUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 sm:px-6 md:px-8">
          <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl neon-glow text-center">
            <CardContent className="p-8">
              <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-4">Welcome to the Future!</h2>
              <p className="text-slate-300 mb-6">
                Thank you for joining! Invest in $FRYE on Polygon to start innovating with PromptX, CRISPR Vault, and
                premium IP tools. Mint ideas to earn serial-linked $FRYE and Respect Fees.
              </p>
              <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
                <h3 className="text-lg font-semibold text-white mb-2">What's Next?</h3>
                <ul className="text-sm text-slate-300 space-y-1 text-left">
                  <li>• Early access to platform beta</li>
                  <li>• Exclusive token pre-sale opportunities</li>
                  <li>• Priority support and onboarding</li>
                  <li>• Community Discord access</li>
                </ul>
              </div>
              <Button onClick={() => setIsSubmitted(false)} className="w-full neon-glow bg-cyan-600 hover:bg-cyan-500">
                Continue Exploring
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6 animate-float">
            Join the Future of Innovation
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            Sign up to purchase $FRYE utility tokens ($10 = 1,000 $FRYE) and unlock PromptX, CRISPR Eternity Vault, Patent
            Forms, White Papers, Pitch Decks, and more, without direct crypto linkage. Earn 1 $FRYE per minted idea with
            a unique serial number, capped at 500M tokens, and Respect Fees when others hybridize your ideas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Form Section */}
          <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl neon-glow">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center">
                <Mail className="h-6 w-6 mr-2 text-cyan-400" />
                Join Our Community
              </CardTitle>
              <CardDescription className="text-slate-300">
                Get exclusive updates, early access, and be part of the innovation revolution
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Full Name *</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="bg-slate-800 border-slate-600 text-white focus:border-cyan-400"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Email Address *</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email address"
                    className="bg-slate-800 border-slate-600 text-white focus:border-cyan-400"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">I'm interested as a... *</label>
                  <Select
                    value={formData.interest}
                    onValueChange={(value: string) => setFormData({ ...formData, interest: value })}
                  >
                    <SelectTrigger className="bg-slate-800 border-slate-600 text-white focus:border-cyan-400">
                      <SelectValue placeholder="Select your primary interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="investor">Investor</SelectItem>
                      <SelectItem value="creator">Creator/Innovator</SelectItem>
                      <SelectItem value="user">Platform User</SelectItem>
                      <SelectItem value="developer">Developer/Partner</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  className="w-full neon-glow bg-cyan-600 hover:bg-cyan-500 text-lg py-3"
                  disabled={!formData.name || !formData.email || !formData.interest}
                >
                  <Zap className="h-5 w-5 mr-2" />
                  Join the Ecosystem
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Benefits Section */}
          <div className="space-y-6">
            <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Users className="h-5 w-5 mr-2 text-purple-400" />
                  Early Adopter Benefits
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    title: "Beta Access",
                    description: "Be among the first to test and use the FRYE platform",
                    icon: "🚀",
                  },
                  {
                    title: "Token Pre-Sale",
                    description: "Exclusive access to $FRYE token pre-sale events",
                    icon: "💎",
                  },
                  {
                    title: "Community Discord",
                    description: "Join our private Discord for direct access to the team",
                    icon: "💬",
                  },
                  {
                    title: "Governance Rights",
                    description: "Early voting rights on platform development decisions",
                    icon: "🗳️",
                  },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-slate-800/30 rounded-lg">
                    <span className="text-2xl">{benefit.icon}</span>
                    <div>
                      <h3 className="text-white font-semibold">{benefit.title}</h3>
                      <p className="text-sm text-slate-400">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
              <CardHeader>
                <CardTitle className="text-white">Community Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 bg-slate-800/30 rounded-lg">
                    <div className="text-2xl font-bold text-cyan-400">2,500+</div>
                    <div className="text-sm text-slate-400">Early Adopters</div>
                  </div>
                  <div className="p-4 bg-slate-800/30 rounded-lg">
                    <div className="text-2xl font-bold text-purple-400">150+</div>
                    <div className="text-sm text-slate-400">Investors</div>
                  </div>
                  <div className="p-4 bg-slate-800/30 rounded-lg">
                    <div className="text-2xl font-bold text-green-400">50+</div>
                    <div className="text-sm text-slate-400">Partners</div>
                  </div>
                  <div className="p-4 bg-slate-800/30 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-400">24/7</div>
                    <div className="text-sm text-slate-400">Support</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-3/4 left-3/4 w-48 h-48 bg-green-500/5 rounded-full blur-3xl animate-pulse" />
        </div>
      </div>
    </div>
  )
}
