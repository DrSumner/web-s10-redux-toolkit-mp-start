// ✨ create your `quotesSlice` in this module
import { createSlice } from "@reduxjs/toolkit"

let id = 1
const getNextId = () => id++
const quotesSlice = createSlice({
  name: 'Qutoes_State',

  initialState:{
   displayAllQuotes: true,
  highlightedQuote: null,
  quotes: [
    {
      id: getNextId(),
      quoteText: "Don't cry because it's over, smile because it happened.",
      authorName: "Dr. Seuss",
      apocryphal: false,
    },
    {
      id: getNextId(),
      quoteText: "So many books, so little time.",
      authorName: "Frank Zappa",
      apocryphal: false,
    },
    {
      id: getNextId(),
      quoteText: "Be yourself; everyone else is already taken.",
      authorName: "Oscar Wilde",
      apocryphal: false,
    },
  ],
},
reducers: {
  toggleVisibility(state){
    state.displayAllQuotes = !state.displayAllQuotes 
  },
  deleteQuote(state, action){
    state.quotes = state.quotes.filter( quote => quote.id !== action.payload) 
  },
  editQuoteAuthenticity(state, action){
    state.quotes.map(quote => {if(quote.id === action.payload){
      quote.apocryphal = !quote.apocryphal
    }
    return quote
  })
  },
  setHighlightedQuote(state, action){
    state.highlightedQuote = state.highlightedQuote == action.payload
    ? null
    : action.payload
  },
  createQuote: {
    prepare(authorName, quoteText){
      const newQuote = {
      id: getNextId(),
      quoteText: quoteText,
    authorName: authorName,
  apocryphal: false
}
return {payload: newQuote}
    },
    reducer(state, action) {
      state.quotes.push(action.payload)
    }
  }
  ,
}
})

export default quotesSlice.reducer

export const {toggleVisibility, deleteQuote, editQuoteAuthenticity,
   setHighlightedQuote, createQuote} = quotesSlice.actions


