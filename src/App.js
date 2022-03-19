import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
import axios from 'axios'

class App extends Component {
  state = {
    livros: []
  }

  async componentDidMount() {
    try {
      const { data: livros } = await axios.get('/api/todosOsLivros.json')
      console.log(livros)
      this.setState({ livros })
    } catch (error) {
      console.log(error)
      document
        .querySelectorAll('.principal')[0]
        .insertAdjacentHTML(
          'beforeend',
          "<p class 'erro' > Mensagem de erro </p>"
        )
    }
  }

  render() {
    return (
      <Router>
        <Topo />

        <Routes>
          <Route exact path="/" element={<Home livros={this.state.livros} />} />
          <Route
            exact
            path="/frontend"
            element={<Frontend livros={this.state.livros} />}
          />
          <Route
            exact
            path="/programacao"
            element={<Programacao livros={this.state.livros} />}
          />
          <Route
            exact
            path="/design"
            element={<Design livros={this.state.livros} />}
          />
          <Route
            exact
            path="/catalogo"
            element={<Catalogo livros={this.state.livros} />}
          />
          <Route
            exact
            path="/livro/:slug"
            element={<Livro />}
            // element={props => {
            //   const livro = this.state.livros.find(
            //     livro => livro.slug === props.match.params.slug
            //   )
            //   if (livro) return <Livro livro={livro} />
            //   else return <Notfound />
            // }}
          />
          <Route component={Notfound} />
        </Routes>
        <Rodape />
      </Router>
    )
  }
}

export default App
