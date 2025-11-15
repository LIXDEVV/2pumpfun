'use client'

import { useState } from 'react'
import HeroSection from '@/components/hero-section'
import SmartTweetSection from '@/components/smart-tweet-section'
import ActionButtons from '@/components/action-buttons'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <HeroSection />

      {/* Eyes to the Issue Section */}
      <SmartTweetSection 
        title="detrader creator of $TOM, started a revolution, poorly formulated, this could be better."
        tweetUrl="https://x.com/detraderSol/status/1989441686884524049"
        position="right"
      />

      {/* Trenches Cannot Survive Section */}
      <SmartTweetSection 
        title="Traders are more necessary than developers. We manage it; we don't need three times as many developers."
        tweetUrl="https://x.com/RipJalens/status/1989014926686290217"
        position="left"
      />

      {/* New Section with Different Messaging */}
      <SmartTweetSection 
        title="The goal is not to have millions of dollars in coin; our purpose is to be seen and understood."
        tweetUrl="https://x.com/DaRealLORDLIMO/status/1989185942419345762"
        position="right"
      />

      {/* This Cannot Continue Section */}
      <SmartTweetSection 
        title="This has to be reversed."
        tweetUrl="https://x.com/evee0x/status/1989106043922808988"
        position="left"
      />

      {/* Action Buttons Section */}
      <ActionButtons />
    </main>
  )
}
