import React, { useState } from 'react'

import PageHeader from '../../components/pageHeader/PageHeader'
import TodoForm from '../../components/todoForm/TodoForm'
import TodoList from '../../components/todoList/TodoList'

import api from '../../services/api'

export default function Todo() {

  const [description, setDescription] = useState('')
  const [list, setList] = useState([])

  function handleAdd() {
    const descriptioN = description
    api.post('', { description: descriptioN })
      .then(resp => console.log('Funcionou!!'))
  }

  function handleChange(e) {
    setDescription(e.target.value)
  }

  return (
    <>
      <PageHeader name="Tarefas" small="Cadastro"/>
      <TodoForm description={description} handleAdd={handleAdd} handleChange={handleChange}/>
      <TodoList/>
    </>
  )
}