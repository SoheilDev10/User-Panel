import { Navigate, Route, Routes, useNavigate } from "react-router"
import Users from "../pages/users"
import Posts from "../pages/posts"
import Comments from "../pages/comments"
import Tasks from "../pages/tasks"
import Gallery from "../pages/gallery"
import CreateUser from "../../createUser"

function Content() {
  return (
    <div className="p-5 h-screen mr-72">
      <Routes>
        <Route path="/users" element={<Users />}>
          <Route path="add-user" element={<CreateUser />} />
        </Route>
        <Route path="/posts" element={<Posts />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/" element={<Navigate to="/users" />} />
      </Routes>
    </div>
  )
}
export default Content