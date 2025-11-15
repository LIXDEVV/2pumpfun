'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function HeroSection() {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <section className="min-h-screen bg-background flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full text-center">
        {/* Title */}
        <h1 className="text-7xl md:text-8xl font-bold mb-6 text-balance leading-tight">
          TRADER
        </h1>
        
        {/* LIVES Box */}
        <div className="relative inline-block mb-8">
          <div className="border-4 border-primary px-8 py-4">
            <span className="text-6xl md:text-7xl font-bold text-balance">LIVES</span>
          </div>
        </div>
        
        {/* MATTER */}
        <h1 className="text-7xl md:text-8xl font-bold text-balance leading-tight mb-12">
          MATTER
        </h1>

        {/* Tagline */}
        <div className="mb-16">
          <p className="text-2xl md:text-3xl font-semibold mb-4 text-balance leading-relaxed">
            for every 1 trader there are 3 deployers.
          </p>
          <p className="text-xl md:text-2xl font-medium text-balance">
            we must put this to an end.
          </p>
        </div>

        <div className="flex flex-col items-center gap-12 mb-12">
          <div className="w-32 h-32 md:w-40 md:h-40 relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-I7svjaEvleXy3mV9zpAvpp6OHbVzol.png"
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
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
