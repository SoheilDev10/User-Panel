import { useContext } from "react"
import SideBar from "./layout/sidebar/sidebar"
import Header from "./layout/header/header"
import Content from "./layout/content/content"
import { MyContext } from "./context"

function App() {
  const { isDark } = useContext(MyContext);
  return (
    <div className={`${isDark ? "dark dark:bg-gray-900 dark:text-white" : null}`}>
      <SideBar />
      <Header />
      <Content />
    </div>
  )
}
export default App