import api from '../../services/api'
import { DESCRIPTION_CHANGED, TODO_SEARCHED, TODO_CLEAR } from './actionsType'

export const changeDescription = value => ({
  type: DESCRIPTION_CHANGED,
  payload: value
})

export const search = () => {
  return (dispatch, getState) => {
    const description = getState().todo.description
    const search = description ? `&description__regex=/${description}/` : ''
    api.get(`?sort=-createdAt${search}`)
      .then(resp => dispatch({ type: TODO_SEARCHED, payload: resp.data }))
  }
}

export const add = description => {
  return dispatch => {
    api.post('', { description })
      .then(resp => dispatch(clear()))
      .then(resp => dispatch(search()))
  }
}

export const markAsDone = todo => {
  return dispatch => {
    api.put(`/${todo._id}`, { ...todo, done: true })
      .then(resp => dispatch(search()))
  }
}

export const markAsPending = todo => {
  return dispatch => {
    api.put(`/${todo._id}`, { ...todo, done: false })
      .then(resp => dispatch(search()))
  }
}

export const remove = todo => {
  return dispatch => {
    api.delete(`/${todo._id}`)
      .then(resp => dispatch(search()))
  }
}

export const clear = () => {
  return [{ type: TODO_CLEAR }, search()]
}