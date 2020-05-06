import React from 'react'
import { connect } from 'react-redux'

import { markAsDone, markAsPending, remove } from '../../store/actions/todoActions'

import './styles.css'

import IconButton from '../iconButton/IconButton'

const todoList = props => {

  const renderRows = () => {
    const list = props.list ? [...props.list] : []
    return list.map((todo, index) => (
      <tr key={todo._id}>
        <th scope="row">{index + 1}</th>
        <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
        <td>
          <IconButton styles="success" icon="check" hide={todo.done}
            onClick={() => props.handleMarkAsDone(todo)}/>

          <IconButton styles="warning" icon="undo" hide={!todo.done}
            onClick={() => props.handleMarkAsPending(todo)}/>

          <IconButton styles="danger" icon="trash-o"
            onClick={() => props.handleRemoveTask(todo)}/>
        </td>
      </tr>
    ))
  }

  return (
    <div className="table-responsive rounded-top">
      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Descrição</th>
            <th scope="col" className="tableActions">Ações</th>
          </tr>
        </thead>
        <tbody>
          {renderRows()}
        </tbody>
      </table>
    </div>
  )

}

function mapStatetoProps(state) {
  const list = state.todo.list
  return { list: list}
}

function mapDispatchToProps(dispatch) {
  return {
    handleMarkAsDone(todo) {
      const action = markAsDone(todo)
      dispatch(action)
    },
    handleMarkAsPending(todo) {
      const action = markAsPending(todo)
      dispatch(action)
    },
    handleRemoveTask(todo) {
      const action = remove(todo)
      dispatch(action)
    }
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(todoList)