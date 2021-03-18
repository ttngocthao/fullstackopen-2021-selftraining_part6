
import {orderArr} from '../utilities/orderArr'
import anecdoteService from '../services/anecdotes'

const initialState = []


export const createNew =(content)=>{
 
  return async dispatch =>{
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type:'ADD_ANECDOTES',
      data: newAnecdote
    })
  }
}

export const addVote = (id)=>{
  return{
    type:'VOTE',
    data:{
      id
    }
  }
}

export const initAnecdotes =()=>{
  /**
   * !Thanks to redux-thunk, we can do the https request in here.
   * ! without redux-thunk, all this can do is return an object
   * ! with redux-thunk, this can return a function
   */
 
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
      newState = state.map(i=> i.id === action.data.id ? {...i,votes: i.votes+1} :i)
      return orderArr(newState,'votes')
    case 'ADD_ANECDOTES':
      newState = [...state,action.data]
      return orderArr(newState,'votes')
    default:
      return state
  }
 
}

export default anecdoteReducer

