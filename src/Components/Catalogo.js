import React from 'react'
import { Link } from 'react-router-dom'

export default function Catalogo({ livros }) {
  return (
    <main className="principal">
      <h2>Categoria Frontend</h2>
      <ol>
        {livros
          .filter(livro => livro.categoria === 'frontend')
          .map(livro => (
            <li key={livro.id}>
              <Link to={`/livro/${livro.slug}`}> {livro.titulo} </Link>
            </li>
          ))}
      </ol>
      <h2>Categoria Programacao</h2>
      <ol>
        {livros
          .filter(livro => livro.categoria === 'programacao')
          .map(livro => (
            <li key={livro.id}>
              <Link to={`/livro/${livro.slug}`}> {livro.titulo} </Link>
            </li>
          ))}
      </ol>
      <h2>Categoria Design</h2>
      <ol>
        {livros
          .filter(livro => livro.categoria === 'design')
          .map(livro => (
            <li key={livro.id}>
              <Link to={`/livro/${livro.slug}`}> {livro.titulo} </Link>
            </li>
          ))}
      </ol>
    </main>
  )
}
