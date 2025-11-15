'use client'

export default function ContentSection({ 
  title, 
  content,
  tweetUrl,
  position = "left" 
}: any) {
  return (
    <section className="bg-background flex items-center justify-center px-4 py-32">
      <div className="max-w-6xl w-full">
        <div className={`flex flex-col ${position === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16`}>
          {/* Text Content */}
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight mb-8">
              {title}
            </h2>
          </div>

          {/* Tweet Card */}
          <div className="flex-1">
            <button
              onClick={() => window.open(tweetUrl, '_blank')}
              className="w-full bg-white rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer shadow-lg hover:scale-105 duration-300"
            >
              {/* Author */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold">
                    {content.author.charAt(0).toUpperCase()}
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-black">{content.author}</span>
                      {content.verified && (
                        <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <span className="text-gray-600 text-sm">{content.handle}</span>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-black p-2">
                  ✕
                </button>
              </div>

              {/* Tweet Text */}
              <p className="text-gray-700 text-left mb-4 leading-relaxed text-sm">
                {content.text}
              </p>

              {/* Time */}
              <div className="text-gray-500 text-xs mb-4 border-b border-gray-200 pb-3">
                <p>{content.time}</p>
              </div>

              {/* Engagement */}
              <div className="flex gap-4 text-gray-600 text-sm">
                <span className="text-red-500">❤️ {content.engagement.likes}</span>
                <span className="text-blue-400">💬 Reply</span>
                <span className="text-gray-400">📋 Copy link</span>
                <span className="text-blue-500">Read {content.engagement.replies} replies</span>
              </div>
            </button>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center mt-24">
          <svg
            className="w-12 h-12 text-foreground animate-bounce"
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
    </section>
  )
}
