import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function PostsView() {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadPosts() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')

        if (!response.ok) {
          throw new Error('Errore durante il caricamento dei post')
        }

        const data = await response.json()

        setPosts(data.slice(0, 5))
      } catch (error) {
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
    }

    loadPosts()
  }, [])

  return (
    <main className="page route-page">
      <h1 className="page-title">Posts</h1>

      {isLoading && <p className="loading-message">Caricamento post...</p>}
      {error && <p className="error-message">{error}</p>}

      <section className="posts-grid">
        {posts.map((post) => (
          <article className="post-card" key={post.id}>
            <h2 className="post-title">{post.title}</h2>
            <p className="post-body">{post.body}</p>
            <Link className="post-link" to={`/posts/${post.id}`}>
              Leggi dettaglio
            </Link>
          </article>
        ))}
      </section>
    </main>
  )
}

export default PostsView
