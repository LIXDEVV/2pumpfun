'use client'

import { useEffect, useState } from 'react'

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
  const [tweetData, setTweetData] = useState<TweetData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const tweetId = tweetUrl.split('/').pop()
    if (!tweetId) {
      setError('URL de tweet inválido')
      setLoading(false)
      return
    }

    const fetchTweetData = async () => {
      try {
        const response = await fetch(`/api/tweet?id=${tweetId}`)
        if (!response.ok) throw new Error('Error al cargar el tweet')
        
        const data = await response.json()
        setTweetData(data)
      } catch (err) {
        console.error('[v0] Error fetching tweet:', err)
        // Fallback data si la API falla
        setTweetData({
          author: 'Loading...',
          handle: '@user',
          verified: false,
          text: 'Tweet content',
          time: 'Loading...',
          views: '0',
          engagement: {
            replies: '0',
            retweets: '0',
            likes: '0',
            bookmarks: '0'
          }
        })
      } finally {
        setLoading(false)
      }
    }

    fetchTweetData()
  }, [tweetUrl])

  if (loading || !tweetData) {
    return (
      <section className="min-h-screen bg-background flex items-center justify-center px-4 py-20">
        <div className="text-center">
          <p className="text-gray-400">Cargando tweet...</p>
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
          {/* Text Content */}
          <div className="flex-1">
            {/* Tweet Card */}
            <button
              onClick={() => window.open(tweetUrl, '_blank')}
              className="w-full max-w-2xl bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-colors cursor-pointer border border-gray-700"
            >
              {/* Author */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center text-white font-bold">
                  {tweetData.author.charAt(0).toUpperCase()}
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <span className="font-bold">{tweetData.author}</span>
                    {tweetData.verified && (
                      <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <span className="text-gray-500 text-sm">{tweetData.handle}</span>
                </div>
              </div>

              {/* Tweet Text */}
              <p className="text-gray-100 text-left mb-4 leading-relaxed">
                {tweetData.text}
              </p>

              {/* Time and Views */}
              <div className="text-gray-500 text-sm mb-4 border-b border-gray-700 pb-4">
                <p>{tweetData.time}</p>
                <p>{tweetData.views} Views</p>
              </div>

              {/* Engagement */}
              <div className="flex justify-between text-gray-500 text-sm">
                <span>{tweetData.engagement.replies} Replies</span>
                <span>{tweetData.engagement.retweets} Retweets</span>
                <span>{tweetData.engagement.likes} Likes</span>
                <span>{tweetData.engagement.bookmarks} Bookmarks</span>
              </div>
            </button>
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
