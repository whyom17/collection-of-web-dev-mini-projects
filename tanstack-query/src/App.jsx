import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./components/Home.jsx"
import PostsTraditional from "./components/PostsTraditional.jsx"
import PostsTanstack from "./components/PostsTanstack.jsx"

const App = () => {
  return (

    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/posts">Posts (Traditional Data Fetching)</Link>
            </li>

            <li>
              <Link to="/posts-tanstack">Posts (Tanstack Query)</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/posts" element={<PostsTraditional />} />
          <Route exact path="/posts-tanstack" element={<PostsTanstack />} />
          <Route exact path="/posts-tanstack/:postId" element={<PostsDetailTanstack />} />
        </Routes>
        
      </div>
    </BrowserRouter>

  )
}

export default App