import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { applyFilter, removeFilter } from '../reducers/filterReducer'


const Filter = () => {
    // const filterState = useSelector(state => state.filter)
    const dispatch = useDispatch()
  const handleChange = (event) => {
    // input-field value is in variable event.target.value
    if(event.target.value!==''){
        dispatch(applyFilter(event.target.value))
    }else{
        dispatch(removeFilter())
    }
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      Filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter
