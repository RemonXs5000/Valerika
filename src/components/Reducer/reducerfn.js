export function modelReducer(state, action) {
  switch (action.type) {
    case "addModel":
      return [...state, { ...action.payload, ready: false }]; // action.payload = {id, name}
    case "deleteModel":
      return state.filter((model) => model.id !== action.payload); // action.payload = id
    case "updateReadyState":
      return state.map((model) =>
        model.id === action.payload ? { ...model, ready: !model.ready } : model
      ); // action.payload = {id, item: {name: "newName"}}
    default:
      return state;
  }
}
