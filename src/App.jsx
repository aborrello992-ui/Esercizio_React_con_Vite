import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import DetailView from './views/DetailView.jsx'
import Homepage from './views/Homepage.jsx'
import PostsView from './views/PostsView.jsx'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/posts" element={<PostsView />} />
        <Route path="/posts/:postId" element={<DetailView />} />
      </Routes>
    </>
  )
}

export default App
