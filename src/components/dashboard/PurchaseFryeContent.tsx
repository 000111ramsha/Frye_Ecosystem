"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Coins,
  ShoppingCart,
  Wallet,
  CreditCard,
  ArrowRight,
  Info,
  DollarSign,
  Zap,
  Shield,
  CheckCircle,
  AlertTriangle,
  ExternalLink,
  Star,
} from "lucide-react"

export default function PurchaseFryeContent() {
  const [usdAmount, setUsdAmount] = useState("50")
  const [selectedPayment, setSelectedPayment] = useState("credit-card")

  // Fixed exchange rate as per white paper: $10 = 1,000 $FRYE
  const exchangeRate = 100 // 1 USD = 100 FRYE
  const minimumPurchase = 10 // $10 minimum
  
  const calculateFrye = (usd: string) => {
    const amount = parseFloat(usd) || 0
    return amount * exchangeRate
  }

  const fryeAmount = calculateFrye(usdAmount)
  const isValidAmount = parseFloat(usdAmount) >= minimumPurchase

  const purchaseOptions = [
    {
      amount: 10,
      frye: 1000,
      popular: false,
      description: "Starter",
    },
    {
      amount: 50,
      frye: 5000,
      popular: true,
      description: "Most Popular",
    },
    {
      amount: 100,
      frye: 10000,
      popular: false,
      description: "Premium",
    },
    {
      amount: 500,
      frye: 50000,
      popular: false,
      description: "Pro",
    },
  ]

  const benefits = [
    {
      icon: Zap,
      title: "Instant Access",
      description: "PromptX™ tools & ecosystem features",
    },
    {
      icon: Shield,
      title: "Blockchain Security",
      description: "Polygon-protected transactions",
    },
    {
      icon: Coins,
      title: "Serial-Linked",
      description: "Uniquely numbered & verifiable",
    },
  ]

  const paymentMethods = [
    { id: "credit-card", name: "Credit Card", icon: CreditCard, available: true },
    { id: "paypal", name: "PayPal", icon: Wallet, available: true },
    { id: "bank", name: "Bank Transfer", icon: DollarSign, available: true },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
      {/* Header */}
      <div className="mb-6 sm:mb-8 text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold gradient-text mb-2">Purchase $FRYE</h1>
        <p className="text-slate-300 text-lg">Unlock the innovation ecosystem</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
        {/* Purchase Form */}
        <div className="lg:col-span-3 space-y-6">
          {/* Quick Purchase Options */}
          <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl neon-glow">
            <CardHeader className="pb-4">
              <CardTitle className="text-white text-xl">Choose Your Investment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                {purchaseOptions.map((option) => (
                  <Card
                    key={option.amount}
                    className={`relative cursor-pointer transition-all duration-300 min-h-[140px] hover:scale-[1.02] ${
                      parseFloat(usdAmount) === option.amount
                        ? "border-cyan-400 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 shadow-lg shadow-cyan-500/25 ring-2 ring-cyan-400/30"
                        : option.popular
                        ? "border-gradient-to-r from-cyan-400 to-purple-400 bg-gradient-to-br from-slate-800/40 to-slate-700/40 hover:border-cyan-400/50 shadow-lg shadow-purple-500/10 ring-1 ring-purple-400/20"
                        : "border-slate-700/50 hover:border-cyan-400/30 bg-slate-800/30"
                    }`}
                    onClick={() => setUsdAmount(option.amount.toString())}
                    role="button"
                    tabIndex={0}
                    aria-label={`Select ${option.amount} USD package${option.popular ? ' - Most Popular' : ''}`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setUsdAmount(option.amount.toString())
                      }
                    }}
                  >
                    {/* Improved Popular Badge */}
                    {option.popular && (
                      <>
                        {/* Glow effect behind badge */}
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-gradient-to-r from-cyan-400/30 to-purple-400/30 rounded-full blur-sm" />
                        
                        {/* Main badge */}
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                          <div className="relative">
                            {/* Badge background with gradient border */}
                            <div className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 p-[1px] rounded-full shadow-lg">
                              <div className="bg-slate-900 rounded-full px-3 py-1 flex items-center gap-1">
                                <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                                <span className="text-xs font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent whitespace-nowrap">
                                  MOST POPULAR
                                </span>
                              </div>
                            </div>
                            
                            {/* Subtle pulse animation */}
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full animate-pulse" />
                          </div>
                        </div>
                      </>
                    )}
                    
                    <CardContent className="p-4 text-center flex flex-col justify-between h-full">
                      <div className={option.popular ? "mt-3" : "mt-1"}>
                        <div className="text-xl sm:text-2xl font-bold text-white">${option.amount}</div>
                        <div className={`text-sm sm:text-base font-medium ${
                          option.popular ? "text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text" : "text-cyan-400"
                        }`}>
                          {option.frye.toLocaleString()} $FRYE
                        </div>
                      </div>
                      
                      {/* Enhanced description for popular option */}
                      <div className="mt-3">
                        {option.popular ? (
                          <div className="space-y-1">
                            <div className="text-xs font-medium text-purple-300">{option.description}</div>
                            <div className="text-xs text-slate-400">Best value for starters</div>
                          </div>
                        ) : (
                          <div className="text-xs text-slate-400">{option.description}</div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="space-y-4">
                <div>
                  <label htmlFor="custom-amount" className="text-sm font-medium text-slate-300 mb-2 block">
                    Or enter custom amount (USD)
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input
                      id="custom-amount"
                      type="number"
                      min={minimumPurchase}
                      step="1"
                      value={usdAmount}
                      onChange={(e) => setUsdAmount(e.target.value)}
                      className="pl-10 h-12 bg-slate-800/50 border-slate-600 text-white text-lg focus:border-cyan-400 focus:ring-cyan-400/20"
                      placeholder="Enter amount"
                      aria-describedby={!isValidAmount && parseFloat(usdAmount) > 0 ? "amount-error" : "amount-calc"}
                    />
                  </div>
                  {!isValidAmount && parseFloat(usdAmount) > 0 && (
                    <p id="amount-error" className="text-red-400 text-sm mt-2 flex items-center gap-1" role="alert">
                      <AlertTriangle className="h-4 w-4" />
                      Minimum purchase: ${minimumPurchase}
                    </p>
                  )}
                </div>

                {/* Calculation Display */}
                <Card className="bg-gradient-to-r from-slate-800/40 to-slate-700/40 border-slate-600/50">
                  <CardContent className="p-4">
                    <div id="amount-calc" className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-300 font-medium">You pay:</span>
                        <span className="text-white font-bold text-xl">${parseFloat(usdAmount) || 0}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-300 font-medium">You receive:</span>
                        <span className="text-cyan-400 font-bold text-xl">{fryeAmount.toLocaleString()} $FRYE</span>
                      </div>
                      <div className="pt-2 border-t border-slate-600/50">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-400">Rate: 1 USD = {exchangeRate} $FRYE</span>
                          <CheckCircle className="h-4 w-4 text-green-400" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* Payment Methods */}
          <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl neon-glow">
            <CardHeader className="pb-4">
              <CardTitle className="text-white text-xl">Payment Method</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-3 mb-6">
                {paymentMethods.map((method) => (
                  <Card
                    key={method.id}
                    className={`cursor-pointer transition-all duration-200 ${
                      selectedPayment === method.id
                        ? "border-cyan-400 bg-cyan-500/10 shadow-lg shadow-cyan-500/20"
                        : "border-slate-700/50 hover:border-cyan-400/30"
                    }`}
                    onClick={() => setSelectedPayment(method.id)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Select ${method.name} payment method`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setSelectedPayment(method.id)
                      }
                    }}
                  >
                    <CardContent className="p-4 flex items-center gap-3">
                      <method.icon className="h-5 w-5 text-cyan-400" />
                      <span className="font-medium text-white flex-1">{method.name}</span>
                      {selectedPayment === method.id && (
                        <CheckCircle className="h-5 w-5 text-cyan-400" />
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Button
                className="w-full h-14 neon-glow bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                disabled={!isValidAmount}
                aria-label={`Purchase ${fryeAmount.toLocaleString()} FRYE tokens for $${parseFloat(usdAmount) || 0}`}
              >
                <div className="flex items-center justify-center gap-3">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-sm">P</span>
                  </div>
                  Purchase on Polygon
                  <ArrowRight className="h-5 w-5" />
                </div>
              </Button>

              <p className="text-xs text-slate-400 text-center mt-4 leading-relaxed">
                Secure transaction on Polygon blockchain. By proceeding, you agree to our terms of service.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Benefits */}
          <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl neon-glow">
            <CardHeader className="pb-4">
              <CardTitle className="text-white text-xl flex items-center gap-2">
                <Info className="h-5 w-5 text-cyan-400" />
                What You Get
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex items-center gap-4 p-3 rounded-lg bg-slate-800/30 border border-slate-700/30">
                  <benefit.icon className="h-6 w-6 text-cyan-400 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium">{benefit.title}</h4>
                    <p className="text-slate-400 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Token Economics */}
          <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl neon-glow">
            <CardHeader className="pb-4">
              <CardTitle className="text-white text-xl">Token Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 rounded-lg bg-slate-800/30">
                  <span className="text-slate-300 font-medium">Network</span>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                    <span className="text-white font-medium">Polygon</span>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-slate-800/30">
                  <span className="text-slate-300 font-medium">Price</span>
                  <span className="text-cyan-400 font-bold">$0.01</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-slate-800/30">
                  <span className="text-slate-300 font-medium">Supply</span>
                  <span className="text-white font-medium">500M $FRYE</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Links */}
          <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl neon-glow">
            <CardHeader className="pb-4">
              <CardTitle className="text-white text-xl">Learn More</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button 
                variant="outline" 
                className="w-full h-12 justify-between text-left border-slate-600 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-200"
                aria-label="Read white paper in new tab"
              >
                <span className="font-medium">White Paper</span>
                <ExternalLink className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                className="w-full h-12 justify-between text-left border-slate-600 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-200"
                aria-label="View token economics"
              >
                <span className="font-medium">Token Economics</span>
                <ExternalLink className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}