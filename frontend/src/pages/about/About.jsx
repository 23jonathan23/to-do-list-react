import React from 'react'

import PageHeader from '../../components/pageHeader/PageHeader'

export default function About(props) {

  return (
    <>
      <PageHeader name="Sobre" small="Nós"/>

      <h2>Nossa história</h2>
      <p>Empresa criada em 1997</p>
      <h2>Missão</h2>
      <p>Temos a missão de mudar o jeito de você organizar suas tarefas.</p>
      <h2>Fundadores</h2>
      <p>Jonathan Raphael</p>
    </>
  )
}