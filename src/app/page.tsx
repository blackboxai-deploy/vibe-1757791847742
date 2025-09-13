"use client"

import { useState, useEffect } from 'react'

export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">
          <div className="h-12 bg-gray-200 rounded-md w-96 mb-4"></div>
          <div className="h-6 bg-gray-200 rounded-md w-64 mx-auto"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Hero Section */}
        <div className="relative">
          {/* Background decorative elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-yellow-400/20 to-amber-600/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-yellow-300/15 to-orange-400/15 rounded-full blur-2xl"></div>
            <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-amber-400/15 to-yellow-500/15 rounded-full blur-xl"></div>
          </div>

          {/* Main Content */}
          <div className="relative z-10">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-gray-900 via-yellow-700 to-amber-800 bg-clip-text text-transparent mb-6 leading-tight">
              Good
            </h1>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-700 mb-8">
              Morning
            </h2>
            
            <div className="space-y-6 max-w-2xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                Welcome to your simple yet elegant Next.js application
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <div className="px-6 py-3 bg-white/70 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm">
                  <span className="text-sm font-medium text-gray-700">
                    ⚡ Built with Next.js 15
                  </span>
                </div>
                <div className="px-6 py-3 bg-white/70 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm">
                  <span className="text-sm font-medium text-gray-700">
                    🎨 Styled with Tailwind CSS
                  </span>
                </div>
              </div>

              {/* New Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-yellow-400/30">
                  <span className="flex items-center gap-2">
                    ☀️ Start Your Day
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                </button>
                <button className="group px-8 py-4 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-amber-200 hover:border-amber-300">
                  <span className="flex items-center gap-2">
                    🌟 Learn More
                    <span className="group-hover:rotate-12 transition-transform duration-300">✨</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Content Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl mb-4 mx-auto flex items-center justify-center">
              <span className="text-white text-xl font-bold">⚡</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Fast</h3>
            <p className="text-gray-600 text-sm">
              Lightning-fast performance with Next.js optimizations and modern web standards
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl mb-4 mx-auto flex items-center justify-center">
              <span className="text-white text-xl font-bold">📱</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Responsive</h3>
            <p className="text-gray-600 text-sm">
              Perfect experience across all devices with mobile-first responsive design
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-600 to-amber-700 rounded-xl mb-4 mx-auto flex items-center justify-center">
              <span className="text-white text-xl font-bold">🎨</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Modern</h3>
            <p className="text-gray-600 text-sm">
              Beautiful, clean design with smooth animations and modern aesthetics
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pb-8">
          <p className="text-gray-500 text-sm">
            Ready to build something amazing? 🚀
          </p>
        </div>
      </div>
    </div>
  )
}