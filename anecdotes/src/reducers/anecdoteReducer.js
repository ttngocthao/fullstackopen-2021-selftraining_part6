import {getId} from '../utilities/getId'
import {getVote} from '../utilities/getVote'
import {orderArr} from '../utilities/orderArr'
const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

// const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: getVote()
  }
}

const initialState = orderArr(anecdotesAtStart.map(asObject),'votes')

const reducer = (state = initialState, action) => {
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

export default reducer

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