export function movies(state, action) {
  switch (action.type) {
    case "ADD_FAVORITES":
      return {...state, movies: state.movies.concat(action.payload) };
    case "REMOVE_FAVORIES":
      if (state.movies) {
        const idx = state.movies.findIndex(list => list.Title === action.payload);
        state.movies.splice(idx, 1);
        return {...state, movies: state.movies }
      }
    default:
      return state;
  }
}