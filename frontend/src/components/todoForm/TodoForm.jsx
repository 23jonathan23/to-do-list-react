import React from 'react'

import './styles.css'

import Grid from '../grid/Grid'
import IconButton from '../iconButton/IconButton'

export default props => {

  const keyHandler = (e) => {
    if(e.key === 'Enter') {
      e.shiftKey ? props.handleSearch() : props.handleAdd()
    } else if(e.key === 'Escape') {
      props.handleClear()
    }
  }

  return (
    <div role="form" className="todoForm">
      <div className="row">
        <Grid cols="12 9 10">
          <input id="description" type="text"
            onKeyUp={keyHandler}
            className="form-control"
            placeholder="Adicione uma tarefa"
            value={props.description}
            onChange={props.handleChange} />
        </Grid>

        <Grid cols="12 3 2">
          <IconButton icon="plus" styles="primary"
            onClick={props.handleAdd} />

          {!props.hideSearch && <IconButton icon="search" styles="info"
            onClick={props.handleSearch} />}

          {props.hideSearch && <IconButton icon="close" styles="secondary"
            onClick={props.handleClear} />}
        </Grid>
      </div>
    </div>
  )
}