import { counter } from './counter.js'
import { store } from './redux.js'

counter(store)

store.subscribe(()=>{
  counter(store)
})



