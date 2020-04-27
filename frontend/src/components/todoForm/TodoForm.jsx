import React from 'react'
import Grid from '../grid/Grid'
import IconButton from '../iconButton/IconButton'

export default props =>
  <div role="form" className="todoForm">
    <div className="row">
        <Grid cols="12 9 10">
          <input id="description" type="text" 
            className="form-control"
            placeholder="Adicione uma tarefa"
            value={props.description}
            onChange={props.handleChange}/>
        </Grid>

        <Grid cols="12 3 2">
          <IconButton icon="plus" styles="primary"
            onClick={props.handleAdd}/>
        </Grid>
    </div>
  </div>