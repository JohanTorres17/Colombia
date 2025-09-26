import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Home from './componentes/home/index.jsx'
import Informativa from './componentes/informativa/index.jsx'
import Favoritos from './componentes/favoritos/index.jsx'
import Mapa from './componentes/mapa/index.jsx'
import Detalles from './componentes/detalles/index.jsx'


function App() {
return (
    <>
    <Router>

        <nav className="c-menu">
          <Link to="/">Home</Link>
          <Link to="/informativa">Informativa</Link>
          <Link to="/mapa">Mapa</Link>
          <Link to="/favoritos">Favoritos</Link>
        </nav>
        
      <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/informativa" element={<Informativa /> } />
          <Route path="/mapa" element={<Mapa /> } />
          <Route path="/favoritos" element={<Favoritos /> } />
          <Route path="/detalles/:depto/:municipio" element={<Detalles /> } />
      </Routes>
    </Router>
    </>
  )
}


export default App
