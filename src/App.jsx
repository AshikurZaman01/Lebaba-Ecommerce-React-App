import { Outlet } from "react-router-dom"
import Navbar from "./Components/Commons/Navbar/Navbar"

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
}

export default App