import { Fragment } from "react"
import SideBar from "./layout/sidebar/sidebar"
import Header from "./layout/header/header"
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