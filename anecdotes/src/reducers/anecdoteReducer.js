
import {orderArr} from '../utilities/orderArr'
import anecdoteService from '../services/anecdotes'

const initialState = []
/**
 * !Thanks to redux-thunk, we can do the https request in here.
 * ! without redux-thunk, all this can do is return an object
 * ! with redux-thunk, this can return a function
 */

export const createNew =(content)=>{
 
  return async dispatch =>{
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type:'ADD_ANECDOTES',
      data: newAnecdote
    })
  }
}

export const addVote = (id,obj)=>{

  return async dispatch =>{
    const updatedItem = await anecdoteService.update(id,{...obj,votes: obj.votes+1})
   
    dispatch({
        type:'VOTE',
        data:updatedItem
    })
  }
  
}

export const initAnecdotes =()=>{  
 
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

const anecdoteReducer = (state = initialState, action) => {
  // console.log('state now: ', state)
  // console.log('action', action)
  let newState
  switch(action.type){
    case 'INIT_ANECDOTES':
      newState= action.data
      return orderArr(newState,'votes')
    case 'VOTE':
      newState = state.map(i=> i.id === action.data.id ? action.data :i)
      return orderArr(newState,'votes')
    case 'ADD_ANECDOTES':
      newState = [...state,action.data]
      return orderArr(newState,'votes')
    default:
      return state
  }
 
}

export default anecdoteReducer

