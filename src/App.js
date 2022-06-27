import React from "react"
import ReactDOM  from "react-dom"
import Infor from "./components/Infor"
import About from "./components/About"
import Interest from "./components/Interest"
import Footer from "./components/Footer"


export default function App() {
  return (
    <div>
      < Infor />
      < About />
      < Interest />
      < Footer />
    </div>
  )
}

ReactDOM.render( <App />, document.getElementById("root"))