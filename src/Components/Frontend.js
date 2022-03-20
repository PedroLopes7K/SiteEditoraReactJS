import React from 'react'
import { Link } from 'react-router-dom'

export default function Frontend({ livros }) {
  return (
    <main className="principal">
      <h2>Cetegoria Frontend</h2>
      {livros
        .filter(livro => livro.categoria === 'frontend')
        .map(livro => (
          <div className="card" key={livro.id}>
            <div className="thumb">
              <img
                src={'/imagens/capas/' + livro.isbn.replace(/-/g, '') + '.jpg'}
                alt={livro.titulo}
              />
            </div>
            {livros
              .filter(c => c.slug === livro.slug)
              .map(livro => (
                <Link to={`/livro/${livro.slug}`} key={livro.id}>
                  {
                    <div className="detalhes">
                      <h3>{livro.titulo}</h3>
                      <p>{livro.descricao.slice(0, 130) + '...'}</p>
                      <p>Leia mais &gt;</p>
                    </div>
                  }
                </Link>
              ))}
          </div>
        ))}
      {/* <h2>Categoria Frontend</h2>
      <div className="card">
        <p>Conteúdos de frontend</p>
      </div> */}
    </main>
  )
}
