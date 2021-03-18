const initialState = {
      visible: false,
      content:''
      }

const notificationReducer =(state = initialState,action )=>{
    switch(action.type){
        case 'SHOW_NOTIFICATION':
            return {
                visible:true,
                content: `You voted ${action.data}`
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
export const showNotification =(content)=>{
    return {
        type:'SHOW_NOTIFICATION',
        data: content
    }
}
export const hideNotification=()=>{
    return {
        type: 'HIDE_NOTIFICATION'
    }
}
export default notificationReducer