'use client'

import { useState } from 'react'
import HeroSection from '@/components/hero-section'
import ContentSection from '@/components/content-section'
import ActionButtons from '@/components/action-buttons'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <HeroSection />

      {/* Eyes to the Issue Section */}
      <ContentSection 
        title="we will bring eyes to the issue, for every tweet about $TLM is a step in spreading awareness."
        content={{
          author: "mayggoe",
          handle: "@mayggoe",
          verified: true,
          text: "Now Solana has more developers than traders, and you all know the reason behind it.",
          time: "6:00 PM - Nov 13, 2025",
          engagement: {
            likes: "191",
            replies: "63"
          }
        }}
        tweetUrl="https://x.com/eveeOx/status/1854898394717020517"
        position="right"
      />

      {/* Trenches Cannot Survive Section */}
      <ContentSection 
trader        title="the trenches cannot survive without the people who run it. s need it to be worth it to stay."
        content={{
          author: "jalen",
          handle: "@jpialeeen",
          verified: true,
          text: "The downfall was rewarding deployers instead of traders... Who on earth thought that would be a good idea!",
          time: "Last edited 11:58 AM - Nov 13, 2025",
          engagement: {
            likes: "574",
            replies: "60"
          }
        }}
        tweetUrl="https://x.com/jpialeeen/status/1854873456789012345"
        position="left"
      />

      {/* New Section with Different Messaging */}
      <ContentSection 
        title="our goal is to be recognized by the leaders in the space. alon, we are talking about you."
        content={{
          author: "slingoor",
          handle: "@singdeer",
          verified: true,
          text: "gais - people wanna experience thrill. lemme break it down for you. memecoin subsets out here are: devs, traders, rapists, fraudsters, scammers, and grifters. we have way too many of everything here and not enough traders. incentives for traders gone @a1lon9 imo.",
          time: "7:22 AM - Nov 13, 2025",
          engagement: {
            likes: "76",
            replies: "28"
          }
        }}
        tweetUrl="https://x.com/singdeer/status/1854632187654321098"
        position="right"
      />

      {/* This Cannot Continue Section */}
      <ContentSection 
        title="this cannot continue."
        content={{
          author: "bong",
          handle: "@bon_g",
          verified: true,
          text: "Solana has no traders left, everyone turned into a coin deployer",
          time: "8:40 AM - Nov 13, 2025",
          engagement: {
            likes: "455",
            replies: "59"
          }
        }}
        tweetUrl="https://x.com/bon_g/status/1854587234567890123"
        position="left"
      />

      {/* Action Buttons Section */}
      <ActionButtons />
    </main>
  )
}
