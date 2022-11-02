import {store} from './redux.js'

function add(){
  store.dispatch({type:"add",payload:3})
}

function counter(s){
  const counter = document.getElementById("counter")
  counter.innerHTML = `
  <div> ${s.getState()} </div>
  <input id="addButton" type="button" value="+3"></input>
  `
  document.getElementById("addButton").addEventListener("click", add)
}

export {
  counter,
  add
}

