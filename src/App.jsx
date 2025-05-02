import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/nav/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Articles from './pages/Articles'



function App() {
  
  return (
    <Router>
        <Navbar/>
          <Routes>
              <Route path="/Home" element={<Home/>}/>
              <Route path="/articles" element={<Articles/>}/>
              <Route path="/about" element={<About/>}/>
          </Routes>
          <Footer/>
    </Router>
  )
}

export default App
