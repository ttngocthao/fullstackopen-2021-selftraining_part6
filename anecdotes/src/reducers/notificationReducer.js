const initialState = {
      visible: false,
      content:''
      }

const notificationReducer =(state = initialState,action )=>{
    switch(action.type){
        case 'SHOW_NOTIFICATION':
            return {
                visible:true,
                content: action.data
                }
        case 'HIDE_NOTIFICATION':
            return {
                visible:false,
                content: ''
                }
        default:
            return state
    }
}
export const setNotification =(msg,timeInSecond)=>{
    return async dispatch =>{
       
        await dispatch({
            type:'SHOW_NOTIFICATION',
            data: msg
        })
        setTimeout(()=>{          
           dispatch({
               type: 'HIDE_NOTIFICATION'
           })
        },timeInSecond*1000)
    }
   
}
export const hideNotification=()=>{
    return {
        type: 'HIDE_NOTIFICATION'
    }
}
export default notificationReducer