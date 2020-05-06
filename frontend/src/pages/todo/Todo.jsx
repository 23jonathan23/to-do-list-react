import React from 'react'

import PageHeader from '../../components/pageHeader/PageHeader'
import TodoForm from '../../components/todoForm/TodoForm'
import TodoList from '../../components/todoList/TodoList'

export default function Todo() {

  return (
    <>
      <PageHeader name="Tarefas" small="Cadastro" />
      <TodoForm />
      <TodoList/>
    </>
  )
}