import React from 'react'
import { useSelector, useDispatch ,connect} from 'react-redux'
import {addVote} from '../reducers/anecdoteReducer'
import {setNotification} from '../reducers/notificationReducer'

const AnecdoteList = (props) => {

    // const anecdotes = useSelector(state =>  state.anecdotes)
    // const filter = useSelector(state=> state.filter)
    //const dispatch = useDispatch()
    const {anecdotes,filter} = props
     const vote = (id,content,votes) => {
        
        const updatedItem = {votes,content}
      //  dispatch(addVote(id,updatedItem))
        props.addVote(id,updatedItem)
        const msg =`You voted ${content}`
      //  dispatch(setNotification(msg,5))
        props.setNotification(msg,5)
       
        
    }
    const anecdotesToShow = filter.showAll ? anecdotes : anecdotes.filter(a=>a.content.toLowerCase().includes(filter.filterInput))
    return (
        <div>
            {anecdotesToShow.map(anecdote =>
                <div key={anecdote.id} style={{margin:'10px 0'}}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button style={{display:'inline-block',marginLeft:'20px'}} onClick={() => vote(anecdote.id,anecdote.content,anecdote.votes)}>vote</button>
                </div>
                </div>
            )} 
        </div>
    )
}
const mapStateToProps =((state)=>({
    anecdotes:state.anecdotes,
    filter : state.filter
}))
const mapDispatchToProps={addVote,setNotification}
export default connect(mapStateToProps,mapDispatchToProps)(AnecdoteList)
