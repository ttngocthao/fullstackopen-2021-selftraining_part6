
import React from 'react'
import {useSelector} from 'react-redux'

const Notification = () => {
  const notification = useSelector(state => state.notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: '30px'
  }
  const visibleStyle ={
    display:'block'
  }
  const invisibleStyle={
    display:'none'
  }
  return (
    <div style={notification.visible ? {...visibleStyle,...style} : {...invisibleStyle}}>
     {notification.content}
    </div>
  )
}

export default Notification