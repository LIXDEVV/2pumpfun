'use client'

import { Suspense, lazy } from 'react'

const Tweet = lazy(() => import('react-tweet').then(mod => ({ default: mod.Tweet })))

interface TweetData {
  author: string
  handle: string
  verified: boolean
  text: string
  time: string
  views: string
  engagement: {
    replies: string
    retweets: string
    likes: string
    bookmarks: string
  }
}

export default function SmartTweetSection({ 
  title, 
  subtitle,
  trendingInfo,
  tweetUrl,
  position = "left" 
}: {
  title: string
  subtitle?: string
  trendingInfo?: any
  tweetUrl: string
  position?: "left" | "right"
}) {
  const getTweetIdFromUrl = (url: string): string | null => {
    const match = url.match(/status\/(\d+)/)
    return match ? match[1] : null
  }

  const tweetId = getTweetIdFromUrl(tweetUrl)

  if (!tweetId) {
    return (
      <section className="min-h-screen bg-background flex items-center justify-center px-4 py-20">
        <div className="text-center">
          <p className="text-red-400">URL de tweet inválido</p>
        </div>
      </section>
    )
  }

  return (
    <section className="min-h-screen bg-background flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl w-full">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">
          {title}
        </h2>

        {/* Content Layout */}
        <div className={`flex flex-col ${position === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 mb-16`}>
          {/* Tweet Content */}
          <div className="flex-1 flex justify-center">
            <Suspense fallback={<div className="text-center text-gray-400">Cargando tweet...</div>}>
              <div className="w-full max-w-2xl [&_div]:!bg-gray-900 [&_div]:!border-gray-700">
                <Tweet id={tweetId} />
              </div>
            </Suspense>
          </div>

          {/* Trending/Info Section */}
          {trendingInfo && (
            <div className="flex-1">
              <div className="bg-gray-900 rounded-xl p-8 border border-gray-700">
                <p className="text-gray-400 text-sm mb-4 font-semibold">Now trending</p>
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center text-2xl font-bold text-white">
                      🪖
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{trendingInfo.title}</h3>
                      <p className="text-green-400 font-semibold">{trendingInfo.marketCap}</p>
                      <p className="text-gray-400 text-sm">{trendingInfo.replies} replies</p>
                    </div>
                  </div>
                  <p className="text-gray-200 text-sm">
                    {trendingInfo.description}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-center text-2xl md:text-3xl font-bold text-balance mb-12">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
