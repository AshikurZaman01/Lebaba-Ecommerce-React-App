import { Outlet } from "react-router-dom"
import Navbar from "./Components/Commons/Navbar/Navbar"

const App = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className="max-w-screen-xl mx-auto px-[1rem]">
        <Outlet></Outlet>
      </div>

    </div>
  )
}

export default App