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
        title="we will bring eyes to the issue, for every tweet about $TLM is a step in spreading awareness."
        tweetUrl="https://x.com/eveeOx/status/1854898394717020517"
        position="right"
      />

      {/* Trenches Cannot Survive Section */}
      <SmartTweetSection 
        title="the trenches cannot survive without the people who run it. traders need it to be worth it to stay."
        tweetUrl="https://x.com/jpialeeen/status/1854873456789012345"
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
