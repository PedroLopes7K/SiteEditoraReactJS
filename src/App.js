// import logo from './logo.svg'
// import React, { Fragment } from 'react'
// import Logo from './Components/Logo'
// import Navegacao from './Components/Navegacao'
// import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Topo from './Components/Topo'
import Home from './Components/Home'
import Catalogo from './Components/Catalogo'
import Notfound from './Components/Notfound'
// import Rodape from './Components/Rodape'
import './index.css'
import Frontend from './Components/Frontend'
import Programacao from './Components/Programacao'
import Design from './Components/Design'
// import Catalogo from './Components/Catalogo'

function App() {
  return (
    <Router>
      <>
        <Topo />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/frontend" element={<Frontend />} />
          <Route path="/programacao" element={<Programacao />} />
          <Route path="/design" element={<Design />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route element={Notfound} />
        </Routes>
      </>
    </Router>
  )
}

export default App
