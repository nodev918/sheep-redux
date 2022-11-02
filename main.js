import { counter } from './counter.js'
import { store } from './redux.js'

// 這邊要把store傳進去給counter用
counter(store)

// store.subscribe: 為了dispatch的時候, 可以重新設定innerHTML
store.subscribe(()=>{
  counter(store)
})



