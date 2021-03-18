import React from 'react'
import {useDispatch,connect } from 'react-redux'
import {createNew} from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
   // const dispatch = useDispatch()
   const {createNew,setNotification} = props
    const create=async(e)=>{
    e.preventDefault()
    const content =e.target.content.value
    if(content){     
     // dispatch(createNew(content))
      createNew(content)
     // dispatch(setNotification('New anecdote is added',10))
      setNotification('New anecdote is added',10)
    }else{
      setNotification('input cannot be empty',5)
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

const mapDispatchToProps ={createNew,setNotification}
export default connect(null,mapDispatchToProps)(AnecdoteForm)
