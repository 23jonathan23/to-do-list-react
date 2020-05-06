import React, { Component } from 'react'
import { connect } from 'react-redux'

import { changeDescription, search, add, clear } from '../../store/actions/todoActions'

import './styles.css'

import Grid from '../grid/Grid'
import IconButton from '../iconButton/IconButton'

class todoForm extends Component {

  constructor(props) {
    super(props)
    this.keyHandler = this.keyHandler.bind(this)
  }

  componentDidMount() {
    this.props.handleLoadList()
  }

  keyHandler(e) {
    if (e.key === 'Enter') {
      e.shiftKey ? this.props.handleLoadList() : this.props.handleAddTask(this.props.description)
    } else if (e.key === 'Escape') {
      this.props.handleClearDescription()
    }
  }

  render() {
    return (<div role="form" className="todoForm">
      <div className="row">
        <Grid cols="12 9 10">
          <input id="description" type="text"
            onKeyUp={this.keyHandler}
            className="form-control"
            placeholder="Adicione uma tarefa"
            value={this.props.description}
            onChange={e => this.props.handleChangeDescription(e.target.value)} />
        </Grid>

        <Grid cols="12 3 2">
          <IconButton icon="plus" styles="primary"
            onClick={() => this.props.handleAddTask(this.props.description)} />

          <IconButton icon="search" styles="info"
            onClick={() => this.props.handleLoadList()} />

          <IconButton icon="close" styles="secondary"
            onClick={() => { this.props.handleClearDescription() }} />
        </Grid>
      </div>
    </div>)
  }
}

function mapStateToProps(state) {
  const description = state.todo.description
  return { description: description }
}

function mapDispatchToProps(dispatch) {
  return {
    handleChangeDescription(value) {
      const action = changeDescription(value)
      dispatch(action)
    },
    handleLoadList() {
      const action = search()
      dispatch(action)
    },
    handleAddTask(description) {
      const action = add(description)
      dispatch(action)
    },
    handleClearDescription() {
      const action = clear()
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(todoForm)