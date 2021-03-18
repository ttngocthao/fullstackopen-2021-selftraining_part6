import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {addVote} from '../reducers/anecdoteReducer'
import {showNotification,hideNotification} from '../reducers/notificationReducer'

const AnecdoteList = () => {

     const anecdotes = useSelector(state => {
         console.log('state here',state)
         return state.anecdotes
         
         })
     const dispatch = useDispatch()
     const vote = (id,content) => {
        // console.log('vote', id)
        // dispatch({type:'VOTE',data: {id}})
        dispatch(addVote(id))
       
        dispatch(showNotification(content))
        setTimeout(()=>{dispatch(hideNotification()) },5000)
        
    }
    return (
        <div>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => vote(anecdote.id,anecdote.content)}>vote</button>
                </div>
                </div>
            )} 
        </div>
    )
}

export default AnecdoteList
