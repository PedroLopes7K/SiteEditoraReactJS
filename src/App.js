import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Topo from './Components/Topo'
import Topo from './Components/Topo'
import Home from './Components/Home'
import Frontend from './Components/Frontend'
import Programacao from './Components/Programacao'
import Design from './Components/Design'
import Catalogo from './Components/Catalogo'
import Notfound from './Components/Notfound'
import Rodape from './Components/Rodape'
import './index.css'
import Livro from './Components/Livro'
// import axios from 'axios'

function App() {
  const [livros, setLivros] = useState([])

  useEffect(() => {
    fetch('/api/todosOsLivros.json')
      .then(resposta => resposta.json())
      .then(dados => {
        console.log(dados)
        setLivros(dados)
      })
  }, [])

  return (
    <Router>
      <Topo />

      <Routes>
        <Route exact path="/" element={<Home livros={livros} />} />
        <Route exact path="/frontend" element={<Frontend livros={livros} />} />
        <Route
          exact
          path="/programacao"
          element={<Programacao livros={livros} />}
        />
        <Route exact path="/design" element={<Design livros={livros} />} />
        <Route exact path="/catalogo" element={<Catalogo livros={livros} />} />
        <Route exact path="/livro/:slug" element={<Livro />} />
        <Route component={Notfound} />
      </Routes>
      <Rodape />
    </Router>
  )
}

export default App
