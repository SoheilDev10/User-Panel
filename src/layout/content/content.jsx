import { Route, Routes } from "react-router"
import Users from "../pages/users"
import Posts from "../pages/posts"
import Comments from "../pages/comments"
import Tasks from "../pages/tasks"
import Gallery from "../pages/gallery"

function Content() {
  return (
    <div className="pr-5 h-screen mr-72">
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  )
}
export default Content