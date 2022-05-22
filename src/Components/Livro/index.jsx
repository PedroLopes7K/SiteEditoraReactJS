// import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Notfound from '../Notfound'
// import '../index.css'

export default function Livro() {
  const { slug } = useParams()
  const [book, setBook] = useState([])
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    function loadBook() {
      fetch('/api/todosOsLivros.json')
        .then(res => res.json())
        .then(data => setBooks(data))
      // console.log(books)

      for (let i = 0; i < books.length; i++) {
        if (books[i].slug === slug) {
          setBook(books[i])
          setLoading(false)
          return
        }
      }
    }

    loadBook()
  })

  if (loading === true) {
    return <Notfound />
  }

  return (
    <main className="principal">
      {/* {console.log(book.id)} */}
      <div className="pag-livro">
        <h2>{book.titulo}</h2>
        <div className="livro">
          <img
            // src={'/imagens/capas/' + book.id + ' .jpg'}
            src={`/imagens/capas/${book.id}.jpg`}
            alt="Thumbnail da capa do livro"
          />
          <ul>
            <li>ISBN: {book.isbn}</li>
            <li>Ano: {book.ano}</li>
            <li>Páginas: {book.paginas}</li>
            <li>Preço: {book.preco},00</li>
          </ul>
          <hr />
          <h3>Descrição do livro</h3>
          <p>{book.descricao}</p>
          
        </div>
        <div className="Link">
            <Link to={'/'} id="Lhome">
              Voltar
            </Link>
          </div>
      </div>
    </main>
  )
}
