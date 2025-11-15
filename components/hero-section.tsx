'use client'

import { useState } from 'react'

export default function HeroSection() {
  const [isHovering, setIsHovering] = useState(false)

  return (
<section className="min-h-screen bg-background flex items-center justify-center px-4 py-20">
  <div className="max-w-4xl w-full text-center">
    <img 
      src="https://i.postimg.cc/76ZXg9Vk/logo.png" 
      alt="2 fun pump" 
      className="mx-auto w-full max-w-lg lg:max-w-2xl object-contain animate-in fade-in zoom-in duration-700 drop-shadow-2xl"
    />
        
        {/* LIVES Box */}
        <div className="relative inline-block mb-8">
          <div className="border-4 border-primary px-8 py-4">
            <span className="text-6xl md:text-7xl font-bold text-balance"> 2 Fun Pump</span>
          </div>
        </div>
        
        {/* MATTER */}
        <h1 className="text-7xl md:text-8xl font-bold text-balance leading-tight mb-12">
         
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

      </div>
    </section>
  )
}
