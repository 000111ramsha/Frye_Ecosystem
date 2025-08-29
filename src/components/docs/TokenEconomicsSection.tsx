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
  FileText,
  Link2,
  Database,
  Smartphone,
  Globe,
  Cpu,
  Lightbulb,
  Clock,
  Wallet,
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

      {/* Core Token Overview */}
      <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
        <CardHeader>
          <CardTitle className="text-white text-xl">$FRYE Utility Token - The Master Key</CardTitle>
          <CardDescription className="text-slate-300">
            The native utility asset powering the entire platform
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg p-6">
              <h4 className="text-cyan-300 font-semibold mb-3">Core Function</h4>
              <p className="text-slate-300 leading-relaxed">
                The $FRYE Token is more than a payment method. It is the fuel that activates every feature of the ecosystem — 
                PromptX innovation generation, LUHPHOL timestamping, NFT minting, and access to the Eternity Vaults of IP.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg">
                <h3 className="text-cyan-300 font-semibold text-lg mb-3 flex items-center">
                  <DollarSign className="h-5 w-5 mr-2" />
                  Utility $FRYE (Platform Token)
                </h3>
                <ul className="text-slate-300 space-y-2 text-sm">
                  <li>• Fiat-based token (purchased with $10 = 1,000 $FRYE)</li>
                  <li>• Fuels platform actions and feature access</li>
                  <li>• Stored in an internal LUHPHOL wallet (off-chain)</li>
                  <li>• Not externally tradable</li>
                  <li>• Flexible entry point (10 to 1,000 tokens)</li>
                </ul>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg">
                <h3 className="text-purple-300 font-semibold text-lg mb-3 flex items-center">
                  <Coins className="h-5 w-5 mr-2" />
                  Innovation $FRYE (Blockchain Token)
                </h3>
                <ul className="text-slate-300 space-y-2 text-sm">
                  <li>• Blockchain-based token on Polygon</li>
                  <li>• Minted automatically when new innovations are created</li>
                  <li>• 1 token = 1 minted innovation</li>
                  <li>• Stored in external crypto wallets (MetaMask, etc.)</li>
                  <li>• Tradable on the Polygon network</li>
                  <li>• Fixed supply: capped at 500 million</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Smart Contract & NFT Integration */}
      <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
        <CardHeader>
          <CardTitle className="text-white text-xl flex items-center">
            <Cpu className="h-6 w-6 mr-3 text-green-400" />
            Every Innovation Tied to $FRYE via Smart Contracts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-6">
              <h4 className="text-green-300 font-semibold mb-3">Smart Contract Architecture</h4>
              <p className="text-slate-300 leading-relaxed">
                Each innovation created or uploaded on the platform is automatically tied to a unique $FRYE crypto token. 
                This token is deployed on Polygon for scalability, low fees, and global reach. Once linked, it is wrapped 
                into a Smart Contract that permanently defines:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-white font-semibold">Smart Contract Defines:</h4>
                <div className="space-y-3">
                  {[
                    "Ownership (Cory S. Frye or designated creator)",
                    "Timestamp of originality (proving it existed first on LUHPHOL.com)",
                    "Royalty flows (ensuring perpetual revenue streams)",
                    "Metadata vaulting (schematics, pitch decks, IP claims, drawings, etc.)"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="p-1 rounded-full bg-green-500/20 mt-1">
                        <CheckCircle className="h-3 w-3 text-green-400" />
                      </div>
                      <div>
                        <p className="text-slate-300 text-sm">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
                <h4 className="text-white font-semibold mb-3">Blockchain Integration</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Globe className="h-4 w-4 text-blue-400" />
                    <span className="text-slate-300 text-sm">Deployed on Polygon</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-green-400" />
                    <span className="text-slate-300 text-sm">Immutable proof of originality</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FileText className="h-4 w-4 text-purple-400" />
                    <span className="text-slate-300 text-sm">NFT minting on blockchain</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Database className="h-4 w-4 text-cyan-400" />
                    <span className="text-slate-300 text-sm">Digital fingerprint of value</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <h4 className="text-blue-300 font-semibold mb-2">💡 Key Insight</h4>
              <p className="text-slate-300 text-sm">
                That Smart Contract is then minted as an NFT on the blockchain, giving the innovation a digital 
                fingerprint of originality and value that cannot be erased or copied.
              </p>
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
                <h4 className="text-white font-semibold mb-3">Token Distribution</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Innovation-Linked:</span>
                    <Badge className="bg-cyan-500/20 text-cyan-300">500M</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Corporate Holdings:</span>
                    <Badge className="bg-purple-500/20 text-purple-300">500M</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Total Supply:</span>
                    <Badge className="bg-orange-500/20 text-orange-300">1B</Badge>
                  </div>
                  <Progress value={2.55} className="h-2 bg-slate-700 [&>div]:bg-gradient-to-r [&>div]:from-cyan-400 [&>div]:to-purple-400" />
                  <p className="text-xs text-slate-400">12,750,000 innovations minted</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Serial-Linked Token System */}
      <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
        <CardHeader>
          <CardTitle className="text-white text-xl flex items-center">
            <Link2 className="h-6 w-6 mr-3 text-cyan-400" />
            Serial-Linked Token Minting System
          </CardTitle>
          <CardDescription className="text-slate-300">
            How each innovation is tied to a unique $FRYE token with serial number
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-lg p-6">
              <h4 className="text-cyan-300 font-semibold mb-3">Serial Number System</h4>
              <p className="text-slate-300 leading-relaxed mb-4">
                Each time a user mints a new innovation on LUHPHOL, the platform generates a <strong>unique serial number</strong> 
                and creates a corresponding <strong>FRYE Token</strong> on the Polygon blockchain with that serial number embedded in its metadata.
              </p>
              
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                <h5 className="text-white font-semibold mb-2">Example Serial Numbers:</h5>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                  <div className="p-2 bg-slate-700/50 rounded">
                    <span className="text-cyan-300 font-mono">FRYE-000000001</span>
                    <p className="text-slate-400 text-xs">First innovation ever</p>
                  </div>
                  <div className="p-2 bg-slate-700/50 rounded">
                    <span className="text-cyan-300 font-mono">FRYE-000000042</span>
                    <p className="text-slate-400 text-xs">Biotech breakthrough</p>
                  </div>
                  <div className="p-2 bg-slate-700/50 rounded">
                    <span className="text-cyan-300 font-mono">FRYE-000001337</span>
                    <p className="text-slate-400 text-xs">AI algorithm patent</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-white font-semibold">Token Creation Process:</h4>
                <div className="space-y-3">
                  {[
                    "User submits original innovation",
                    "System generates unique serial (e.g., FRYE-000000001)", 
                    "FRYE Token minted on Polygon with serial metadata",
                    "Token sent to user's wallet with ownership proof",
                    "Innovation added to permanent blockchain record"
                  ].map((step, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="p-1 rounded-full bg-cyan-500/20 mt-1">
                        <CheckCircle className="h-3 w-3 text-cyan-400" />
                      </div>
                      <div>
                        <p className="text-slate-300 text-sm">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
                <h4 className="text-white font-semibold mb-3">Smart Contract Structure</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <Database className="h-4 w-4 text-blue-400" />
                    <span className="text-slate-300">ERC-721 or ERC-1155 Hybrid</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FileText className="h-4 w-4 text-green-400" />
                    <span className="text-slate-300">Serial number in metadata</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-purple-400" />
                    <span className="text-slate-300">Timestamp of creation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Wallet className="h-4 w-4 text-cyan-400" />
                    <span className="text-slate-300">User wallet address</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="h-4 w-4 text-orange-400" />
                    <span className="text-slate-300">IPFS or Arweave link</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-6">
              <h4 className="text-green-300 font-semibold mb-3">Benefits of Serial-Linked FRYE Tokens</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-slate-300 text-sm"><strong>Proof-of-Creation:</strong> Every token is a digital certificate</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-slate-300 text-sm"><strong>Verifiable Scarcity:</strong> 1 Token = 1 Idea, capped at 500M</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-slate-300 text-sm"><strong>Tradeable IP Units:</strong> Can be sold, licensed, fractionalized</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-slate-300 text-sm"><strong>Traceable Ecosystem:</strong> Innovation leaderboard & royalty flows</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <h4 className="text-blue-300 font-semibold mb-2">📊 Innovation Counter</h4>
              <p className="text-slate-300 text-sm">
                Display innovation count live on LUHPHOL dashboard (e.g., "<strong>12,750,000 / 500,000,000 ideas minted</strong>") 
                showing progress toward the 500M innovation cap.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Corporate Holdings */}
      <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
        <CardHeader>
          <CardTitle className="text-white text-xl flex items-center">
            <Lock className="h-6 w-6 mr-3 text-purple-400" />
            FRYE Corporate Holdings
          </CardTitle>
          <CardDescription className="text-slate-300">
            Strategic token allocation and supply management
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20 rounded-lg p-6">
              <h4 className="text-purple-300 font-semibold mb-3">Reserved Token Supply</h4>
              <p className="text-slate-300 leading-relaxed">
                The other <strong>500,000,000 FRYE tokens</strong> are locked away in the <strong>FRYE Corporate Holdings Private Wallet</strong>. 
                This strategic reserve ensures long-term ecosystem stability and provides options for future platform development and partnerships.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700/50">
                <h4 className="text-white font-semibold mb-3 flex items-center">
                  <Database className="h-5 w-5 mr-2 text-cyan-400" />
                  Innovation-Linked Tokens
                </h4>
                <ul className="text-slate-300 space-y-2 text-sm">
                  <li>• 500M tokens maximum</li>
                  <li>• 1 token per minted innovation</li>
                  <li>• Publicly tradable on Polygon</li>
                  <li>• Backed by real creativity</li>
                </ul>
              </div>
              
              <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700/50">
                <h4 className="text-white font-semibold mb-3 flex items-center">
                  <Lock className="h-5 w-5 mr-2 text-purple-400" />
                  Corporate Holdings
                </h4>
                <ul className="text-slate-300 space-y-2 text-sm">
                  <li>• 500M tokens reserved</li>
                  <li>• Locked in private wallet</li>
                  <li>• Strategic ecosystem reserve</li>
                  <li>• Future development fund</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <h4 className="text-blue-300 font-semibold mb-2">💡 Strategic Purpose</h4>
              <p className="text-slate-300 text-sm">
                This dual-allocation system ensures that while innovation drives immediate token supply, the platform 
                maintains strategic reserves for long-term growth, partnerships, and ecosystem development initiatives.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Why This Makes Sense */}
      <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
        <CardHeader>
          <CardTitle className="text-white text-xl flex items-center">
            <Lightbulb className="h-6 w-6 mr-3 text-yellow-400" />
            Why This Makes Sense
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg">
              <h4 className="text-cyan-300 font-semibold mb-3">Utility Layer</h4>
              <p className="text-slate-300 text-sm">
                The utility layer ($FRYE Token) makes the ecosystem sustainable and scalable.
              </p>
            </div>
            
            <div className="p-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg">
              <h4 className="text-purple-300 font-semibold mb-3">Ownership Layer</h4>
              <p className="text-slate-300 text-sm">
                The ownership layer (Smart Contract + NFT) makes every idea provable, monetizable, and globally tradable.
              </p>
            </div>
            
            <div className="p-4 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg">
              <h4 className="text-green-300 font-semibold mb-3">Polygon Integration</h4>
              <p className="text-slate-300 text-sm">
                The integration with Polygon ensures fast, low-cost, and environmentally friendly transactions.
              </p>
            </div>
          </div>
          
          <div className="mt-6 bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
            <h4 className="text-yellow-300 font-semibold mb-2">🎯 Simple Summary</h4>
            <p className="text-slate-300 text-sm">
              $FRYE is the Currency of Innovation™. Every idea minted on the platform is backed by blockchain proof, 
              tied to a crypto token, and secured forever in a smart contract.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Investment Clarification */}
      <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
        <CardHeader>
          <CardTitle className="text-white text-xl flex items-center">
            <AlertTriangle className="h-6 w-6 mr-3 text-orange-400" />
            Important Investment Clarification
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
              <h4 className="text-orange-300 font-semibold mb-2">⚠️ Key Point</h4>
              <p className="text-slate-300 text-sm">
                There is no investing straight into <strong>FRYE</strong> on Polygon.  Only in the <strong>$FRYE utility tokens</strong>. 
                The actual Crypto tokens are what is linked to each innovation through the Smart Contract setup. 
                <strong>1 FRYE Token</strong> is tied to every <strong>original Innovation</strong>. That's it. Everything 
                is purchased through <strong>$FRYE</strong>.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
                <h4 className="text-white font-semibold mb-3">What You CAN Invest In:</h4>
                <ul className="text-slate-300 text-sm space-y-2">
                  <li>• $FRYE utility tokens (platform access)</li>
                  <li>• Platform features and tools</li>
                  <li>• Innovation creation and minting</li>
                </ul>
              </div>
              
              <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
                <h4 className="text-white font-semibold mb-3">What You CANNOT Directly Invest In:</h4>
                <ul className="text-slate-300 text-sm space-y-2">
                  <li>• FRYE crypto tokens on Polygon</li>
                  <li>• Direct cryptocurrency speculation</li>
                  <li>• Blockchain token trading</li>
                </ul>
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
            Economic Benefits
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-green-300 font-semibold">Supply-Backed by Brilliance</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="p-1 rounded-full bg-green-500/20 mt-1">
                    <CheckCircle className="h-3 w-3 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Each Token Tied to Real Innovation</p>
                    <p className="text-slate-300 text-sm">Every $FRYE token represents a real, timestamped innovation backed by human ingenuity</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-1 rounded-full bg-green-500/20 mt-1">
                    <CheckCircle className="h-3 w-3 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Rarest Resource: Human Creativity</p>
                    <p className="text-slate-300 text-sm">Token supply backed by the most valuable resource: breakthrough ideas and innovations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-1 rounded-full bg-green-500/20 mt-1">
                    <CheckCircle className="h-3 w-3 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Fixed Supply, Infinite Demand</p>
                    <p className="text-slate-300 text-sm">500M hard cap drives scarcity as innovation demand rises globally</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-1 rounded-full bg-green-500/20 mt-1">
                    <CheckCircle className="h-3 w-3 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Innovation Gravity Well</p>
                    <p className="text-slate-300 text-sm">LUHPHOL.com becomes a digital nation of ideas where $FRYE powers all innovation activities</p>
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
