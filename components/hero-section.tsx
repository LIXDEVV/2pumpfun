'use client'

import { useState } from 'react'

export default function HeroSection() {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <section className="min-h-screen bg-background flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-6xl mx-auto text-center space-y-12">

        {/* LOGO FIJO A 192px Y CENTRADO */}
        <img 
          src="https://i.postimg.cc/76ZXg9Vk/logo.png"
          alt="2 Fun Pump logo"
          className="mx-auto w-48 h-48 object-contain"
          // w-48 = exactamente 192px en Tailwind
          // mx-auto = centrado horizontal perfecto
          // h-48 = mantiene la altura para que no se deforme (opcional, quítalo si prefieres que se ajuste solo)
        />

        {/* LIVES Box */}
        <div className="inline-block">
          <div className="border-4 md:border-8 border-primary px-10 py-5 md:px-16 md:py-8 rounded-2xl">
            <span className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight">
              2 Fun Pump
            </span>
          </div>
        </div>

        {/* Tagline */}
        <div className="space-y-6 max-w-4xl mx-auto">
          <p className="text-2xl md:text-4xl font-bold text-balance leading-relaxed">
            for every 1 trader there are 3 deployers.
          </p>
          <p className="text-xl md:text-3xl font-medium text-balance opacity-90">
            we must put this to an end.
          </p>
        </div>

      </div>
    </section>
  )
}