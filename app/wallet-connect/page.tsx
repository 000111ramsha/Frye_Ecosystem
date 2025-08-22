"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Wallet, 
  CheckCircle, 
  Loader2, 
  AlertCircle, 
  Shield, 
  Zap, 
  Globe,
  ArrowRight,
  Copy,
  ExternalLink
} from "lucide-react"
import Link from "next/link"

const walletOptions = [
  {
    name: "MetaMask",
    icon: "/metamask-logo.png",
    description: "Most popular Ethereum wallet",
    features: ["Browser Extension", "Mobile App", "Hardware Support"],
  },
  {
    name: "WalletConnect",
    icon: "/wallet-connect.png", 
    description: "Scan QR code with any mobile wallet",
    features: ["Mobile First", "250+ Wallets", "Secure Connection"],
  },
  {
    name: "Coinbase Wallet",
    icon: "/coinbase-wallet-logo.jpg",
    description: "Self-custody wallet by Coinbase",
    features: ["Easy Setup", "DeFi Ready", "Trusted Platform"],
  },
]

const benefits = [
  {
    icon: Zap,
    title: "Instant Access",
    description: "Connect once and access all LUHPHOL features instantly",
    color: "text-cyan-400",
  },
  {
    icon: Shield,
    title: "Secure Connection",
    description: "Your wallet stays secure with encrypted connections",
    color: "text-green-400",
  },
  {
    icon: Globe,
    title: "Multi-Chain Support",
    description: "Works with Polygon, Ethereum, and Bitcoin networks",
    color: "text-purple-400",
  },
]

export default function WalletConnect() {
  const [connectionStatus, setConnectionStatus] = useState<"idle" | "connecting" | "connected" | "error">("idle")
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null)
  const [copiedAddress, setCopiedAddress] = useState(false)

  const handleConnect = (walletName: string) => {
    setSelectedWallet(walletName)
    setConnectionStatus("connecting")

    // Simulate connection process
    setTimeout(() => {
      if (Math.random() > 0.1) { // 90% success rate
        setConnectionStatus("connected")
      } else {
        setConnectionStatus("error")
      }
    }, 2000)
  }

  const copyAddress = async () => {
    await navigator.clipboard.writeText("0x742d35Cc6634C0532925a3b8D4C0532925a3b8D4")
    setCopiedAddress(true)
    setTimeout(() => setCopiedAddress(false), 2000)
  }

  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Wallet className="h-20 w-20 text-cyan-400 animate-pulse-glow" />
              <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Connect Your Wallet</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Connect your wallet to invest in $FRYE on Polygon and unlock the full potential of the LUHPHOL ecosystem
          </p>
        </div>

        {connectionStatus === "idle" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Wallet Options */}
            <div className="lg:col-span-2">
              <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl neon-glow">
                <CardHeader>
                  <CardTitle className="text-white text-xl">Choose Your Wallet</CardTitle>
                  <CardDescription className="text-slate-300">
                    Select your preferred wallet to get started with LUHPHOL
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {walletOptions.map((wallet) => (
                    <Card
                      key={wallet.name}
                      className="bg-slate-800/50 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer group hover:neon-glow"
                      onClick={() => handleConnect(wallet.name)}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 rounded-xl bg-slate-800/50 p-3 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                            <img 
                              src={wallet.icon || "/placeholder.svg"} 
                              alt={wallet.name} 
                              className="w-10 h-10 object-contain" 
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="font-semibold text-white text-lg">{wallet.name}</h3>
                              <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                            </div>
                            <p className="text-slate-400 text-sm mb-3">{wallet.description}</p>
                            <div className="flex gap-2">
                              {wallet.features.map((feature, index) => (
                                <Badge key={index} variant="outline" className="text-xs text-slate-400 border-slate-600">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Benefits Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-cyan-400" />
                    Why Connect?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="p-2 rounded-lg bg-slate-800/50">
                        <benefit.icon className={`h-5 w-5 ${benefit.color}`} />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-sm">{benefit.title}</h4>
                        <p className="text-slate-400 text-xs leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-white">Network Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-slate-800/30 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <span className="text-white font-medium">Polygon</span>
                      </div>
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Primary</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-800/30 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="text-white font-medium">Ethereum</span>
                      </div>
                      <Badge variant="outline" className="text-slate-400 border-slate-600">Supported</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-800/30 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                        <span className="text-white font-medium">Bitcoin</span>
                      </div>
                      <Badge variant="outline" className="text-slate-400 border-slate-600">Ordinals</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {connectionStatus === "connecting" && (
          <div className="max-w-md mx-auto">
            <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl neon-glow">
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <Loader2 className="h-16 w-16 text-cyan-400 animate-spin mx-auto" />
                  <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">Connecting to {selectedWallet}...</h3>
                <p className="text-slate-300 mb-6">Please check your wallet for connection approval</p>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <p className="text-sm text-slate-400">
                    ⏱️ This usually takes a few seconds. Make sure to approve the connection in your wallet.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {connectionStatus === "connected" && (
          <div className="max-w-2xl mx-auto">
            <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl neon-glow">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="relative mb-6">
                    <CheckCircle className="h-16 w-16 text-green-400 mx-auto" />
                    <div className="absolute inset-0 bg-green-400/20 rounded-full blur-xl animate-pulse"></div>
                  </div>
                  <h3 className="text-3xl font-semibold text-white mb-2">Successfully Connected!</h3>
                  <p className="text-slate-300">Your wallet is now connected to LUHPHOL</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      <div className="w-6 h-6 mr-2 bg-white rounded-full flex items-center justify-center">
                        <span className="text-purple-600 font-bold text-sm">P</span>
                      </div>
                      <span className="text-white font-semibold">Network</span>
                    </div>
                    <p className="text-slate-300">Connected to Polygon</p>
                  </div>

                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-white font-semibold">Wallet Address</span>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-6 w-6 p-0 text-slate-400 hover:text-cyan-400"
                        onClick={copyAddress}
                      >
                        {copiedAddress ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                    <p className="text-cyan-400 font-mono text-sm">0x742d...8D4</p>
                  </div>
                </div>

                <div className="bg-slate-800/30 rounded-lg p-6 mb-6 border border-slate-700/50">
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-cyan-400" />
                    What's Next?
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
                        <span className="text-cyan-400 font-bold text-sm">1</span>
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">Invest in $FRYE</p>
                        <p className="text-slate-400 text-xs">$10 = 1,000 $FRYE</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                        <span className="text-green-400 font-bold text-sm">2</span>
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">Start Minting</p>
                        <p className="text-slate-400 text-xs">Earn 1 $FRYE per idea</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                  <Link href="/dashboard" className="flex-1">
                    <Button className="w-full neon-glow bg-cyan-600 hover:bg-cyan-500">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      Continue to Dashboard
                    </Button>
                  </Link>
                  <Link href="/token-dashboard" className="flex-1">
                    <Button variant="outline" className="w-full border-slate-600 text-slate-300 hover:bg-slate-800">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Token Dashboard
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {connectionStatus === "error" && (
          <div className="max-w-md mx-auto">
            <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <AlertCircle className="h-16 w-16 text-red-400 mx-auto" />
                  <div className="absolute inset-0 bg-red-400/20 rounded-full blur-xl animate-pulse"></div>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">Connection Failed</h3>
                <p className="text-slate-300 mb-6">Unable to connect to {selectedWallet}. Please try again.</p>
                
                <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
                  <h4 className="text-white font-semibold mb-2">Common Issues:</h4>
                  <ul className="text-sm text-slate-400 space-y-1 text-left">
                    <li>• Wallet extension not installed</li>
                    <li>• Connection rejected in wallet</li>
                    <li>• Network connectivity issues</li>
                  </ul>
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-800"
                    onClick={() => setConnectionStatus("idle")}
                  >
                    Try Different Wallet
                  </Button>
                  <Button
                    className="flex-1 neon-glow bg-red-600 hover:bg-red-500"
                    onClick={() => handleConnect(selectedWallet || "MetaMask")}
                  >
                    Retry Connection
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

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
