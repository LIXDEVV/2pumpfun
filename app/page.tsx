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
        title="our goal is to be recognized by the leaders in the space. alon, we are talking about you."
        tweetUrl="https://x.com/singdeer/status/1854632187654321098"
        position="right"
      />

      {/* This Cannot Continue Section */}
      <SmartTweetSection 
        title="this cannot continue."
        tweetUrl="https://x.com/bon_g/status/1854587234567890123"
        position="left"
      />

      {/* Action Buttons Section */}
      <ActionButtons />
    </main>
  )
}
