import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  // const good = () => {
  //   store.dispatch({
  //     type: 'GOOD'
  //   })
  // }
  const voteHandle =(type)=>{
    store.dispatch({type: type.toLocaleUpperCase()})
  }
  return (
    <div>
      <button onClick={()=>voteHandle('good')}>good</button> 
      <button onClick={()=>voteHandle('ok')}>neutral</button> 
      <button onClick={()=>voteHandle('bad')}>bad</button>
      <button onClick={()=>voteHandle('zero')}>reset stats</button>
      <div>good {store.getState().good}</div>
      <div>neutral {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)