

import React, { useEffect, useState } from "react";
import { Link } from "react-router"; // Make sure to use "react-router-dom"
import Navbar from "./Navbar";
import { findAllQuotes } from "../services/quotes"; // Import the function to get quotes

const DisplayAllQuotes = () => {

    const [quotes, setQuotes] = useState([]);
    useEffect(() => {
      const allQuotes = findAllQuotes();
      setQuotes(allQuotes);
    }, []);
    
    return (
        <div className=" m-4">
            <Navbar/>
            <h4 className="text-center m-3 p-2 fw-bold">Quotes Around the World</h4>
        <div className="text-end mx-3 mb-4 pb-5">
      <Link className="mb-2 px-4 py-5" to="/all">All</Link>
      <Link className="mb-3 px-5" to="/favorite">Favorite</Link>
      </div>
            <div className="container mt-4">
        {quotes.length === 0 ? (
          <p>No quotes available</p>
        ) : (
          quotes.map((quote) => (
            <div key={quote.id} className="my-3 p-3 border border-2 border-secondary rounded shadow-sm">
              <p className="mb-1">{quote.desc}</p>
              <p className="mb-0 fst-italic">- {quote.author}</p>
            </div>
          ))
        )}
      </div>
            
        </div>
    )
}
export default DisplayAllQuotes

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router";
// import Navbar from "./Navbar";
// import { findAllQuotes } from "../services/quotes";

// const DisplayAllQuotes = () => {
//   const [quotes, setQuotes] = useState([]);

//   useEffect(() => {
//     const allQuotes = findAllQuotes();
//     setQuotes(allQuotes);
//   }, []);

//   return (
//     <div className="text-end m-4">
//       <Navbar />
//       <h4 className="text-center m-3 p-2 fw-bold">Quotes Around the World</h4>
//       <Link className="mb-2 px-4 py-5" to="/myquotes">All</Link>
//       <Link className="mb-3 px-5" to="/quoteList">Favorite</Link>

//       <div className="container mt-4">
//         {quotes.length === 0 ? (
//           <p>No quotes available</p>
//         ) : (
//           quotes.map((quote) => (
//             <div
//               key={quote.id}
//               className="my-3 p-3 border border-2 border-secondary rounded shadow-sm"
//             >
//               <p className="mb-1">{quote.desc}</p>
//               <p className="mb-0 fst-italic">- {quote.author}</p>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default DisplayAllQuotes;
