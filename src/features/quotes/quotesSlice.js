// Action Creators
// TODO: Create action creators as defined in tests
export const addQuote = (quote) => {
  return {
    type: "quotes/add",
    payload: quote,
  }
}
export const removeQuote = (id) => {
  return {
    type: "quotes/remove",
    payload: id
  }
}
export const upvoteQuote = (id) => {
  return {
    type: "quotes/upvote",
    payload: id
  }
}
export const downvoteQuote = (id) => {
  return {
    type: "quotes/downvote",
    payload: id
  }
}
// Reducer
const initialState = [];

export default function quotesReducer(state = initialState, action) {
  switch (action.type) {
    case "quotes/add":
      return [...state, action.payload]
    case "quotes/remove":
      return [...state.filter(x => x.id !== action.payload)]
    case "quotes/upvote":
      return state.map(x=>( x.id === action.payload ? {...x, votes: x.votes + 1 } : x ))
    case "quotes/downvote":
      return state.map(quote=>( quote.id === action.payload ? {...quote, votes: ( quote.votes === 0 ? 0 : quote.votes - 1 ) } : quote ))
  
    default:
      return state;
  }
}
