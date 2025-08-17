"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Wallet, CheckCircle, Loader2, AlertCircle } from "lucide-react"

const walletOptions = [
  {
    name: "MetaMask",
    icon: "/metamask-logo.png",
    description: "Connect using MetaMask browser extension",
  },
  {
    name: "WalletConnect",
    icon: "/placeholder-uevd6.png",
    description: "Scan with WalletConnect to connect",
  },
  {
    name: "Coinbase Wallet",
    icon: "/coinbase-wallet-logo.png",
    description: "Connect with Coinbase Wallet",
  },
]

export default function WalletConnect() {
  const [connectionStatus, setConnectionStatus] = useState<"idle" | "connecting" | "connected" | "error">("idle")
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null)

  const handleConnect = (walletName: string) => {
    setSelectedWallet(walletName)
    setConnectionStatus("connecting")

    // Simulate connection process
    setTimeout(() => {
      setConnectionStatus("connected")
    }, 2000)
  }

  return (
    <div className="pt-16 min-h-screen flex items-center justify-center">
      <div className="max-w-md mx-auto px-4">
        <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Wallet className="h-16 w-16 text-cyan-400 animate-pulse-glow" />
            </div>
            <CardTitle className="text-2xl font-bold text-white">Connect Your Wallet</CardTitle>
            <CardDescription className="text-slate-300 leading-relaxed">
              Connect your wallet to invest in $FRYE on Polygon ($10 = 1,000 $FRYE) and access PromptX, Patent &
              Trademark Forms, White Papers, Pitch Decks, CRISPR Eternity Vault, NFT minting, timestamping, and
              hybridization tools. $FRYE is not directly linked to cryptocurrency. Earn 1 $FRYE per minted idea with a
              unique serial number (e.g., FRYE-000000001), capped at 500M. Pay Respect Fees in $FRYE to hybridize
              existing innovations.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            {connectionStatus === "idle" && (
              <>
                {walletOptions.map((wallet) => (
                  <Button
                    key={wallet.name}
                    variant="outline"
                    className="w-full h-16 justify-start space-x-4 border-slate-600 hover:border-cyan-400 hover:bg-slate-800/50 transition-all duration-200 bg-transparent"
                    onClick={() => handleConnect(wallet.name)}
                  >
                    <img src={wallet.icon || "/placeholder.svg"} alt={wallet.name} className="h-8 w-8" />
                    <div className="text-left">
                      <div className="font-semibold text-white">{wallet.name}</div>
                      <div className="text-sm text-slate-400">{wallet.description}</div>
                    </div>
                  </Button>
                ))}

                <div className="mt-6 p-4 bg-slate-800/30 rounded-lg border border-slate-700/50">
                  <h3 className="text-white font-semibold mb-2">Instructions:</h3>
                  <ul className="text-sm text-slate-300 space-y-1">
                    <li>• Select your preferred wallet from the options above</li>
                    <li>• Follow the prompts to authorize the connection</li>
                    <li>• Once connected, you can access all FRYE features</li>
                  </ul>
                </div>
              </>
            )}

            {connectionStatus === "connecting" && (
              <div className="text-center py-8">
                <Loader2 className="h-12 w-12 text-cyan-400 animate-spin mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Connecting to {selectedWallet}...</h3>
                <p className="text-slate-300">Please check your wallet for connection approval</p>
              </div>
            )}

            {connectionStatus === "connected" && (
              <div className="text-center py-8">
                <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Successfully Connected!</h3>
                <div className="flex items-center justify-center mb-4">
                  <div className="w-6 h-6 mr-2 bg-white rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-sm">P</span>
                  </div>
                  <span className="text-slate-300">Connected to Polygon Network</span>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4 mb-4">
                  <p className="text-sm text-slate-400">Wallet Address:</p>
                  <p className="text-cyan-400 font-mono">0x742d35Cc6634C0532925a3b8D4C0532925a3b8D4</p>
                </div>
                <div className="bg-slate-800/30 rounded-lg p-4 mb-4 border border-slate-700/50">
                  <p className="text-sm text-slate-300 leading-relaxed">
                    <strong className="text-cyan-400">Status:</strong> Use your wallet to invest in $FRYE on Polygon,
                    unlock premium features, and pay Respect Fees for hybridization, independent of crypto markets. Mint
                    ideas to earn $FRYE with serial-linked metadata (500M cap).
                  </p>
                </div>
                <Button className="w-full neon-glow bg-cyan-600 hover:bg-cyan-500">Continue to Dashboard</Button>
              </div>
            )}

            {connectionStatus === "error" && (
              <div className="text-center py-8">
                <AlertCircle className="h-12 w-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Connection Failed</h3>
                <p className="text-slate-300 mb-4">Please try again or select a different wallet</p>
                <Button
                  variant="outline"
                  className="w-full border-red-400 text-red-400 hover:bg-red-400 hover:text-white bg-transparent"
                  onClick={() => setConnectionStatus("idle")}
                >
                  Try Again
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        </div>
      </div>
    </div>
  )
}
