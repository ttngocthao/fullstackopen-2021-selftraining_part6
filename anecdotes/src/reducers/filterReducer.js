/**
 *? 1. get initial state
 *? 2. write the reducer (action,data)
 *? 3. write dispatch functions
 */


const initialState = {
    showAll: true,
    filterInput:''
  }

const filterReducer =(state = initialState,action)=>{
    switch(action.type){
        case 'APPLY_FILTER':
            return {
                showAll: false,
                filterInput:action.data}
        case 'REMOVE_FILTER':
            return {
                showAll: true,
                filterInput:''
            }
        default:
            return state
    }
}

export default filterReducer

export const applyFilter =(input)=>{
    return {
        type:'APPLY_FILTER',
        data: input
    }
}

export const removeFilter =()=>{
    return {
        type:'REMOVE_FILTER'
    }
}