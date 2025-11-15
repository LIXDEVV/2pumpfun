export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const tweetId = searchParams.get('id')

  if (!tweetId) {
    return Response.json({ error: 'Tweet ID required' }, { status: 400 })
  }

  try {
    const oEmbedResponse = await fetch(
      `https://publish.twitter.com/oembed?url=https://x.com/i/web/status/${tweetId}`,
      { cache: 'force-cache' }
    )

    if (!oEmbedResponse.ok) {
      throw new Error('Failed to fetch tweet data')
    }

    const oEmbedData = await oEmbedResponse.json()

    const htmlMatch = oEmbedData.html?.match(/(?:@[\w]+)/g)
    const handle = htmlMatch?.[0] || '@user'
    
    // Extraer texto del HTML embebido
    const textMatch = oEmbedData.html?.match(/>([^<]+)<\/p>/)?.[1] || 'Tweet content'

    return Response.json({
      author: oEmbedData.author_name || 'Unknown',
      handle: handle,
      verified: true,
      text: textMatch,
      time: new Date().toLocaleDateString(),
      views: '0',
      engagement: {
        replies: '0',
        retweets: '0',
        likes: '0',
        bookmarks: '0'
      }
    })
  } catch (error) {
    console.error('[v0] Error fetching tweet:', error)
    
    return Response.json({
      author: 'User',
      handle: '@user',
      verified: false,
      text: 'Tweet content will load here',
      time: new Date().toLocaleDateString(),
      views: '0',
      engagement: {
        replies: '0',
        retweets: '0',
        likes: '0',
        bookmarks: '0'
      }
    })
  }
}
