'use client'

import { useState } from 'react'

export default function HeroSection() {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <section className="min-h-screen bg-background flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full text-center">
        {/* Title */}
        <h1 className="text-7xl md:text-8xl font-bold mb-6 text-balance leading-tight">
          
        </h1>
        
        {/* LIVES Box */}
        <div className="relative inline-block mb-8">
          <div className="border-4 border-primary px-8 py-4">
            <span className="text-6xl md:text-7xl font-bold text-balance">2 PUmp Fun</span>
          </div>
        </div>
        
        {/* MATTER */}
        <h1 className="text-7xl md:text-8xl font-bold text-balance leading-tight mb-12">
          
        </h1>

        {/* Tagline */}
        <div className="mb-16">
          <p className="text-2xl md:text-3xl font-semibold mb-4 text-balance leading-relaxed">
            I wish things were the other way around
          </p>
          <p className="text-xl md:text-2xl font-medium text-balance">
            it's time to change things.
          </p>
        </div>

        {/* Fist Icon */}
        <div className="flex flex-col items-center gap-12 mb-12">
          <div className="w-32 h-32 md:w-40 md:h-40">
            <svg
              viewBox="0 0 100 120"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse cx="50" cy="25" rx="18" ry="16" fill="#EE7968" stroke="#4A3728" strokeWidth="2" />
              <path d="M 35 38 Q 50 42 65 38" stroke="#4A3728" strokeWidth="2" fill="none" />
              <rect x="30" y="50" width="40" height="35" rx="8" fill="#D4C5B0" stroke="#4A3728" strokeWidth="2" />
              <ellipse cx="25" cy="60" rx="8" ry="12" fill="#D4C5B0" stroke="#4A3728" strokeWidth="2" />
              <rect x="32" y="48" width="8" height="28" rx="4" fill="#D4C5B0" stroke="#4A3728" strokeWidth="1.5" />
              <rect x="42" y="46" width="8" height="30" rx="4" fill="#D4C5B0" stroke="#4A3728" strokeWidth="1.5" />
              <rect x="52" y="48" width="8" height="28" rx="4" fill="#D4C5B0" stroke="#4A3728" strokeWidth="1.5" />
              <path d="M 30 70 Q 50 75 70 70" stroke="#D4C5B0" strokeWidth="1" fill="none" opacity="0.6" />
            </svg>
          </div>

          {/* Animated Arrow */}
          <div
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <svg
              className={`w-20 h-20 md:w-24 md:h-24 text-primary transition-transform duration-300 ${
                isHovering ? 'translate-y-2' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
