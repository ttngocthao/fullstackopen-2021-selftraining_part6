import deepFreeze from 'deep-freeze'
import counterReducer from './reducer'

describe('unicafe reducer', () => {
  let initialState, action, state, newState
  beforeEach(()=>{
    initialState= {
    good: 0,
    ok: 0,
    bad: 0
  }
  state = initialState 
  deepFreeze(state)
  })
  test('should return a proper initial state when called with undefined state', () => {
    
    action = {      type: 'DO_NOTHING'    }

    newState = counterReducer(undefined, action)
    expect(newState).toEqual(initialState)
  })

  test('good is incremented', () => {
    action = {      type: 'GOOD'    }
  

   
    newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 1,
      ok: 0,
      bad: 0
    })

  })

  test('bad is incremented',()=>{
    action ={      type:'BAD'    }
   
  
    newState = counterReducer(state,action)
    expect(newState).toEqual({
      good:0,
      ok:0,
      bad:1
    })
  })

  test('ok is incremented',()=>{
    action={type:'OK'}
  
    newState = counterReducer(state,action)
     expect(newState).toEqual({
      good:0,
      ok:1,
      bad:0
    })
  })

  test('Zero is everything back to 0',()=>{
    //* Increment Ok
    counterReducer(state,{type:'OK'})
    //* Increment Bad
    counterReducer(state,{type:'BAD'})
    //* click zero
    action = {type:'ZERO'}
    newState = counterReducer(state,action)
    expect(newState).toEqual(initialState)
  })
})