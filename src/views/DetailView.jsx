import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function DetailView() {
  const { postId } = useParams()
  const [post, setPost] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadPost() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}`,
        )

        if (!response.ok) {
          throw new Error('Errore durante il caricamento del dettaglio')
        }

        const data = await response.json()

        setPost(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
    }

    loadPost()
  }, [postId])

  return (
    <main className="page route-page">
      <Link className="back-link" to="/posts">
        Torna ai post
      </Link>

      {isLoading && <p className="loading-message">Caricamento dettaglio...</p>}
      {error && <p className="error-message">{error}</p>}

      {post && (
        <article className="detail-card">
          <p className="detail-id">Post #{post.id}</p>
          <h1 className="page-title">{post.title}</h1>
          <p className="detail-body">{post.body}</p>
        </article>
      )}
    </main>
  )
}

export default DetailView
