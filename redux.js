// 這邊可以設定各種dispatch的情況
function reducerFn(state = 0, action) {
    return action?.type == "add"
    ? state + action.payload
    : action?.type == "minus"
    ? state - action.parload
    : state;
}

// store的核心class, 包含一個reducer() return出來的state作為data member, 閉包的方式maintain
function createStore(reducer) {
    let state = reducer();
    let eventhub = [];

    function getState() {
        return state;
    }

    function dispatch(action) {
    state = reducer(state, action);
        eventhub.forEach((i) => i());
    }

    function subscribe(fn) {
        eventhub.push(fn);
    }

    return {
        getState,
        dispatch,
        subscribe,
    };
}

// 把store這個物件return出去讓大家共用, 以維護全域狀態
let store = createStore(reducerFn)

export {
    reducerFn,
    createStore,
    store
}

