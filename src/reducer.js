const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      state.count += action.value;
      return Object.assign({}, state);
    case 'SUB':
      state.count -= action.value;
      return Object.assign({}, state);
    case 'MUL':
      state.count *= action.value;
      return Object.assign({}, state);
    default:
      return Object.assign({}, state);
  }
}

