import { Fragment } from "react"
import SideBar from "./layout/sidebar/sidebar"
import Header from "./layout/content/content"
import { Connect } from "vite"
import Content from "./layout/content/content"

function App() {
  return (
    <Fragment>
      <SideBar />
      <Header />
      <Content />
    </Fragment>
  )
}
export default App