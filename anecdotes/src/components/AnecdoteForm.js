import React from 'react'
import {useDispatch } from 'react-redux'
import {createNew} from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()
    const create=async(e)=>{
    e.preventDefault()
    const content =e.target.content.value
    if(content){
     
      dispatch(createNew(content))
      
    }else{
      alert('input cannot be empty')
    }
   
  }
    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={create}>
                <div><input name='content' type='text'/></div>
                <button type='submit'>create</button>
            </form>
        </div>
    )
}

export default AnecdoteForm
