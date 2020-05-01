import React from 'react'

import './styles.css'

import IconButton from '../iconButton/IconButton'

export default props => {

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
            onClick={() => props.handleRemove(todo)}/>
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