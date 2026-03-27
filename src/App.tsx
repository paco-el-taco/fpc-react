import { BrowserRouter as Router, Route, Routes, Link } from 'react-router';


import Informativa from './Informativa/index'
import Original from './Original/index'
import Usuario from './Usuario/index'
import Home from './Home/index'
import Favoritos from './Favoritos/index'
import Equipo from './Equipo';

import './App.css'

function App() {

  return (
    <>
    <Router>
      <nav className="c-menu">
        <Link to="/"><p>Home</p></Link>
        <Link to="/favoritos"><p>Favoritos</p></Link>
        <Link to="/original"><p>Original</p></Link>
        <Link to="/informativa"><p>Informativa</p></Link>
        <Link to="/usuario"><p>Usuario</p></Link>   
      </nav>

      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/favoritos" element={<Favoritos /> } />
        <Route path="/original" element={<Original /> } />
        <Route path="/informativa" element={<Informativa /> } />
        <Route path="/usuario" element={<Usuario /> } />
        <Route path="/equipo/:equipo" element={<Equipo /> } />
      </Routes>
    </Router>
    </>
  )
}

export default App