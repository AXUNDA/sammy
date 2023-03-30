import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Main from "./pages/Main"
import "../src/fonts/MartianGrotesk-sWdRg.otf"
import Work from "./pages/Work"
import About from "./pages/About"


function App() {


  return (
    <Router>


      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />


      </Routes>



    </Router>

  )
}

export default App
