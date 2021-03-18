
import React from 'react'
import {connect} from 'react-redux'

const Notification = (props) => {
 //const notification = useSelector(state => state.notification)
 const {notification} = props
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
const mapStateToProps =((state)=>({
  notification: state.notification
}))

export default connect(mapStateToProps)(Notification)