'use client'

import { useState } from 'react'

export default function HeroSection() {
  // Si más adelante quieres animaciones al hacer hover en el logo, aquí lo tienes preparado
  const [isHovering, setIsHovering] = useState(false)

  return (
    <section className="min-h-screen bg-background flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-6xl mx-auto text-center space-y-12">

        {/* ==================== LOGO - ¡AQUÍ CAMBIAS EL TAMAÑO EN 1 SEGUNDO! ==================== */}
        <img 
          src="https://i.postimg.cc/76ZXg9Vk/logo.png"
          alt="2 Fun Pump logo"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className={`
            mx-auto 
            object-contain 
            transition-all duration-500 
            ${isHovering ? 'scale-110 drop-shadow-2xl' : 'scale-100'}
            w-64            /* ← CAMBIA ESTE NÚMERO Y YA ESTÁ ← */
            sm:w-80
            md:w-96
            lg:w-[500px]    /* ← Tamaño máximo en pantallas grandes */
          `}
        />
        {/* =================================================================================== */}

        {/* LIVES Box - el recuadro con borde */}
        <div className="inline-block">
          <div className="border-4 md:border-8 border-primary px-10 py-5 md:px-16 md:py-8 rounded-2xl">
            <span className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight">
              2 Fun Pump
            </span>
          </div>
        </div>

        {/* Tagline - el texto de abajo */}
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