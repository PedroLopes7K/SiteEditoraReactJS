import React from 'react'
import { Link } from 'react-router-dom'

export default function Programacao({ livros }) {
  return (
    <main className="principal">
      <h2>Categoria Programação</h2>
      {livros
        .filter(livro => livro.categoria === 'programacao')
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
                <div key={livro.id} className="detalhes">
                <h3>{livro.titulo}</h3>
                <p>{livro.descricao.slice(0, 130) + '...'}</p>
                <Link to={`/livro/${livro.slug}`} className="linkBook">
                  Leia mais &gt;
                </Link>
              </div>
                // <Link to={`/livro/${livro.slug}`} key={livro.id}>
                //   {
                //     <div className="detalhes">
                //       <h3>{livro.titulo}</h3>
                //       <p>{livro.descricao.slice(0, 130) + '...'}</p>
                //       <p>Leia mais &gt;</p>
                //     </div>
                //   }
                // </Link>
              ))}
          </div>
        ))}
    </main>
  )
}
