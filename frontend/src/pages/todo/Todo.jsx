import React, { useState, useEffect } from 'react'

import PageHeader from '../../components/pageHeader/PageHeader'
import TodoForm from '../../components/todoForm/TodoForm'
import TodoList from '../../components/todoList/TodoList'

import api from '../../services/api'

export default function Todo() {

  const [description, setDescription] = useState('')
  const [list, setList] = useState([])
  const [hideSearch, setHideSearch] = useState(false)

  useEffect(() => {
    refresh()
  }, [])

  function refresh(description = '') {
    const search = description ? `&description__regex=/${description}/` : ''
    api.get(`?sort=-createdAt${search}`)
      .then(resp => {
        setList([...resp.data])
        setDescription(description)
      })
  }

  function handleSearch() {
    setHideSearch(true)
    refresh(description)
  }

  function handleClear() {
    setHideSearch(false)
    refresh()
  }

  function handleAdd() {
    const descriptioN = description
    api.post('', { description: descriptioN })
      .then(resp => refresh())
  }

  function handleChange(e) {
    setDescription(e.target.value)
  }

  function handleRemove(todo) {
    api.delete(`/${todo._id}`)
      .then(resp => refresh(description))
  }

  function handleMarkAsDone(todo) {
    api.put(`/${todo._id}`, { ...todo, done: true })
      .then(resp => refresh(description))
  }

  function handleMarkAsPending(todo) {
    api.put(`/${todo._id}`, { ...todo, done: false })
      .then(resp => refresh(description))
  }

  return (
    <>
      <PageHeader name="Tarefas" small="Cadastro" />
      <TodoForm description={description}
                hideSearch={hideSearch}
                handleAdd={handleAdd}
                handleSearch={handleSearch}
                handleClear={handleClear}
                handleChange={handleChange} />
      
      <TodoList list={list}
        handleRemove={handleRemove}
        handleMarkAsDone={handleMarkAsDone}
        handleMarkAsPending={handleMarkAsPending} />
    </>
  )
}