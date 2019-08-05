// add code snippets from README
let state
let intialState = {count: 0}


function reducer(state = intialState, action) {
  switch (action.type) {
    case "INCREASE_COUNT":
        return {count: state.count + 1};
      break;
    default:
      return state;
  }
}
function render() {
  const container = document.querySelector("#container")
  container.textContent = state.count
}


function dispatch(action) {
  state = reducer(state, action)
  render()
}

let button = document.getElementById('button');

button.addEventListener('click', function(){
  dispatch({type: 'INCREASE_COUNT'})
})

dispatch({type: '@@INIT'})
