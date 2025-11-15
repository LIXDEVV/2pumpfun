'use client'

export default function ActionButtons() {
  return (
    <section className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-2xl w-full text-center">
        <div className="flex justify-center mb-16">
          <img 
            src="/images/design-mode/logo.png" 
            alt="TLM Pill Logo" 
            className="w-32 h-32 object-contain"
          />
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-balance">
          $TLM becomes trending on pumpfun with a news header
        </h2>
         </div>

        {/* Button Group */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-20">
          {/* X Button */}
          <a
            href="https://x.com/search?q=%24TLM"
            target="_blank"
            rel="noopener noreferrer"
            className="w-32 h-32 bg-primary/10 rounded-3xl flex flex-col items-center justify-center hover:bg-primary/20 transition-all duration-300 border-2 border-primary hover:scale-110 hover:shadow-lg shadow-lg"
          >
            <svg className="w-12 h-12 mb-2 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.627l-5.1-6.614-5.835 6.614H2.556l7.73-8.835L1.966 2.25h6.772l4.6 6.088 5.25-6.088zM17.534 20.766h1.885L6.455 3.812H4.482l13.052 16.954z" />
            </svg>
            <span className="text-sm font-semibold text-primary">X</span>
          </a>

          {/* Pump Fun Button */}
          <a
            href="https://pump.fun/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-32 h-32 bg-primary/10 rounded-3xl flex flex-col items-center justify-center hover:bg-primary/20 transition-all duration-300 border-2 border-primary hover:scale-110 hover:shadow-lg shadow-lg"
          >
            <svg className="w-12 h-12 mb-2 text-primary" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="4" fill="none" />
              <path d="M50 30 L65 55 L50 50 L35 55 Z" fill="currentColor" />
            </svg>
            <span className="text-sm font-semibold text-primary">Pump.fun</span>
          </a>

          {/* DEX Button */}
          <a
            href="https://raydium.io/swap/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-32 h-32 bg-primary/10 rounded-3xl flex flex-col items-center justify-center hover:bg-primary/20 transition-all duration-300 border-2 border-primary hover:scale-110 hover:shadow-lg shadow-lg"
          >
            <svg className="w-12 h-12 mb-2 text-primary" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="3" fill="none" />
              <path d="M35 50 L50 35 L65 50 M50 35 L50 65 M35 50 L65 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="text-sm font-semibold text-primary">DEX</span>
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-lg font-semibold text-brown/70">
          Trader Lives Matter 2025.
        </p>
      </div>
    </section>
  )
}
