import {getId} from '../utilities/getId'
import {getVote} from '../utilities/getVote'
import {orderArr} from '../utilities/orderArr'
import {initialState} from '../store'

export const createNew =(content)=>{
  return {
    type:'ADD_ANECDOTES',
    data: {
      id: getId(),
      content: content,
      votes: getVote()
  }
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

const anecdoteReducer = (state = initialState.anecdotes, action) => {
  // console.log('state now: ', state)
  // console.log('action', action)
  let newState
  switch(action.type){
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

