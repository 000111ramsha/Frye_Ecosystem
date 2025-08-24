"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  User,
  Shield,
  Bell,
  Palette,
  Globe,
  Wallet,
  Key,
  Trash2,
  Save,
  Mail,
  Smartphone,
} from "lucide-react"

export default function SettingsContent() {
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    language: "en",
    theme: "dark",
    notifications: {
      email: true,
      push: true,
      sms: false,
    },
    privacy: {
      profile: "public",
      activity: "friends",
      analytics: true,
    },
  })

  const handleInputChange = (field: string, value: any) => {
    if (field.includes(".")) {
      const [section, key] = field.split(".")
      setFormData(prev => ({
        ...prev,
        [section]: {
          ...prev[section as keyof typeof prev],
          [key]: value
        }
      }))
    } else {
      setFormData(prev => ({ ...prev, [field]: value }))
    }
  }

  const handleSave = () => {
    // Handle save logic here
    console.log("Saving settings:", formData)
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
        <p className="text-slate-300">
          Manage your account preferences, privacy settings, and platform configuration
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Settings */}
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Settings */}
          <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
            <CardHeader>
              <CardTitle className="text-white text-xl flex items-center">
                <User className="h-6 w-6 mr-3 text-cyan-400" />
                Profile Settings
              </CardTitle>
              <CardDescription className="text-slate-300">
                Update your personal information and account details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="bg-slate-800 border-slate-600 text-white focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-slate-800 border-slate-600 text-white focus:border-cyan-400"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Phone Number</label>
                <Input
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="bg-slate-800 border-slate-600 text-white focus:border-cyan-400"
                />
              </div>
            </CardContent>
          </Card>

          {/* Preferences */}
          <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
            <CardHeader>
              <CardTitle className="text-white text-xl flex items-center">
                <Palette className="h-6 w-6 mr-3 text-purple-400" />
                Preferences
              </CardTitle>
              <CardDescription className="text-slate-300">
                Customize your platform experience and appearance
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Language</label>
                  <Select value={formData.language} onValueChange={(value) => handleInputChange("language", value)}>
                    <SelectTrigger className="bg-slate-800 border-slate-600 text-white focus:border-cyan-400">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Theme</label>
                  <Select value={formData.theme} onValueChange={(value) => handleInputChange("theme", value)}>
                    <SelectTrigger className="bg-slate-800 border-slate-600 text-white focus:border-cyan-400">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="auto">Auto</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
            <CardHeader>
              <CardTitle className="text-white text-xl flex items-center">
                <Bell className="h-6 w-6 mr-3 text-yellow-400" />
                Notifications
              </CardTitle>
              <CardDescription className="text-slate-300">
                Configure how and when you receive notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-slate-400" />
                    <span className="text-slate-300">Email Notifications</span>
                  </div>
                  <Button
                    variant={formData.notifications.email ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleInputChange("notifications.email", !formData.notifications.email)}
                    className={formData.notifications.email ? "bg-cyan-600 hover:bg-cyan-500" : "border-slate-600 text-slate-300"}
                  >
                    {formData.notifications.email ? "Enabled" : "Disabled"}
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Bell className="h-5 w-5 text-slate-400" />
                    <span className="text-slate-300">Push Notifications</span>
                  </div>
                  <Button
                    variant={formData.notifications.push ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleInputChange("notifications.push", !formData.notifications.push)}
                    className={formData.notifications.push ? "bg-cyan-600 hover:bg-cyan-500" : "border-slate-600 text-slate-300"}
                  >
                    {formData.notifications.push ? "Enabled" : "Disabled"}
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Smartphone className="h-5 w-5 text-slate-400" />
                    <span className="text-slate-300">SMS Notifications</span>
                  </div>
                  <Button
                    variant={formData.notifications.sms ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleInputChange("notifications.sms", !formData.notifications.sms)}
                    className={formData.notifications.sms ? "bg-cyan-600 hover:bg-cyan-500" : "border-slate-600 text-slate-300"}
                  >
                    {formData.notifications.sms ? "Enabled" : "Disabled"}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Privacy Settings */}
          <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
            <CardHeader>
              <CardTitle className="text-white text-xl flex items-center">
                <Shield className="h-6 w-6 mr-3 text-green-400" />
                Privacy & Security
              </CardTitle>
              <CardDescription className="text-slate-300">
                Control your privacy settings and account security
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Profile Visibility</label>
                  <Select value={formData.privacy.profile} onValueChange={(value) => handleInputChange("privacy.profile", value)}>
                    <SelectTrigger className="bg-slate-800 border-slate-600 text-white focus:border-cyan-400">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="public">Public</SelectItem>
                      <SelectItem value="friends">Friends Only</SelectItem>
                      <SelectItem value="private">Private</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Activity Visibility</label>
                  <Select value={formData.privacy.activity} onValueChange={(value) => handleInputChange("privacy.activity", value)}>
                    <SelectTrigger className="bg-slate-800 border-slate-600 text-white focus:border-cyan-400">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="public">Public</SelectItem>
                      <SelectItem value="friends">Friends Only</SelectItem>
                      <SelectItem value="private">Private</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-slate-400" />
                  <span className="text-slate-300">Analytics & Tracking</span>
                </div>
                <Button
                  variant={formData.privacy.analytics ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleInputChange("privacy.analytics", !formData.privacy.analytics)}
                  className={formData.privacy.analytics ? "bg-cyan-600 hover:bg-cyan-500" : "border-slate-600 text-slate-300"}
                >
                  {formData.privacy.analytics ? "Enabled" : "Disabled"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
            <CardHeader>
              <CardTitle className="text-white text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full bg-cyan-600 hover:bg-cyan-500" onClick={handleSave}>
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
              <Button variant="outline" className="w-full border-slate-600 text-slate-300 hover:bg-slate-800">
                <Key className="h-4 w-4 mr-2" />
                Change Password
              </Button>
              <Button variant="outline" className="w-full border-slate-600 text-slate-300 hover:bg-slate-800">
                <Wallet className="h-4 w-4 mr-2" />
                Wallet Settings
              </Button>
            </CardContent>
          </Card>

          {/* Account Status */}
          <Card className="bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 shadow-xl">
            <CardHeader>
              <CardTitle className="text-white text-lg">Account Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-slate-300 text-sm">Email Verified</span>
                <Badge className="bg-green-500/20 text-green-300">Verified</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300 text-sm">2FA Enabled</span>
                <Badge className="bg-red-500/20 text-red-300">Disabled</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300 text-sm">Wallet Connected</span>
                <Badge className="bg-green-500/20 text-green-300">Connected</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Danger Zone */}
          <Card className="bg-slate-900/70 backdrop-blur-lg border border-red-500/20 shadow-xl">
            <CardHeader>
              <CardTitle className="text-red-400 text-lg">Danger Zone</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full border-red-500/50 text-red-400 hover:bg-red-500/10">
                <Trash2 className="h-4 w-4 mr-2" />
                Delete Account
              </Button>
              <p className="text-xs text-slate-400 text-center">
                This action cannot be undone
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
