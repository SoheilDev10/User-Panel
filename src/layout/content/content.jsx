import { Navigate, Route, Routes, useNavigate } from "react-router"
import Users from "../pages/users/users"
import Posts from "../pages/posts/posts"
import Comments from "../pages/comments/comments"
import Tasks from "../pages/tasks/tasks"
import Gallery from "../pages/gallery/gallery"
import CreateUser from "../pages/users/createUser"
import CreatePost from "../pages/posts/createPost"
import ShowPost from "../pages/posts/showPost"
import ShowUser from "../pages/users/showUser"
import CreateComment from "../pages/comments/createComment"
import ShowComment from "../pages/comments/showComment"
import CreateTask from "../pages/tasks/createTask"

function Content() {
  return (
    <div className="p-5 h-full mr-72">
      <Routes>
        <Route path="/users" element={<Users />}>
          <Route path="add-user" element={<CreateUser />} />
          <Route path="show-user/:userId" element={<ShowUser />} />
        </Route>
        <Route path="/posts" element={<Posts />}>
          <Route path="add-post" element={<CreatePost />} />
          <Route path="show-information/:postId" element={<ShowPost />} />
        </Route>
        <Route path="/comments" element={<Comments />}>
          <Route path="add-comment" element={<CreateComment />} />
          <Route path="show-comment/:commentId" element={<ShowComment />} />
        </Route>
        <Route path="/tasks" element={<Tasks />} >
          <Route path="add-task" element={<CreateTask />} />
        </Route>
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/" element={<Navigate to="/users" />} />
      </Routes>
    </div>
  )
}
export default Content