import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Main from "./pages/Main"
import "../src/fonts/MartianGrotesk-sWdRg.otf"
import Work from "./pages/Work"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Qwid from "./pages/Qwid"
import Pudio from "./pages/Pudio"
import Helene from "./pages/Helene"
import { Responsive } from "./components/Responsive"


function App() {


  return (
    <main>
      <Router>


        <Routes>

          <Route path="/" element={<Main />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/qwid" element={<Qwid />} />
          <Route path="/pudio" element={<Pudio />} />
          <Route path="/helene" element={<Helene />} />
          <Route path="/animate" element={<Responsive />} />







        </Routes>



      </Router>

    </main>


  )
}

export default App
