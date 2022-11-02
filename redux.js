
function reducerFn(state = 0, action) {
    return action?.type == "add"
    ? state + action.payload
    : action?.type == "minus"
    ? state - action.parload
    : state;
}

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
let store = createStore(reducerFn)
export {
    reducerFn,
    createStore,
    store
}

