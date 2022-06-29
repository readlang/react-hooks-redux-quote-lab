import React from "react";
import QuoteCard from "./QuoteCard";

import {useDispatch, useSelector} from "react-redux";
import { downvoteQuote, removeQuote, upvoteQuote } from "./quotesSlice";

function Quotes() {
  const quotes = useSelector(state => state.quotes)
  console.log(quotes)

  const dispatch = useDispatch()

  return (
    <div>
      <hr />
      <div className="row justify-content-center">
        <h2>Quotes</h2>
      </div>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            {/*
              TODO:

              Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
              */
              quotes.map( quote => <QuoteCard 
                key={quote.id} 
                quote={quote} 
                remove={()=>dispatch(removeQuote(quote.id))} 
                upvote={()=>dispatch(upvoteQuote(quote.id))} 
                downvote={()=>dispatch(downvoteQuote(quote.id))}  
                /> )
              }
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quotes;
