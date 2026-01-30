import { Navigate, Route, Routes, useNavigate } from "react-router"
import Users from "../pages/users/users"
import Posts from "../pages/posts/posts"
import Comments from "../pages/comments/comments"
import Tasks from "../pages/tasks/tasks"
import Gallery from "../pages/gallery/gallery"
import CreateUser from "../pages/users/createUser"
import CreatePost from "../pages/posts/createPost"

function Content() {
  return (
    <div className="p-5 h-full mr-72">
      <Routes>
        <Route path="/users" element={<Users />}>
          <Route path="add-user" element={<CreateUser />} />
        </Route>
        <Route path="/posts" element={<Posts />}>
          <Route path="add-post" element={<CreatePost />} />
        </Route>
        <Route path="/comments" element={<Comments />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/" element={<Navigate to="/users" />} />
      </Routes>
    </div>
  )
}
export default Content