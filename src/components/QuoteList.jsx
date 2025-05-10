import { useEffect, useState } from "react";
import { deleteQuoteById, findAllQuotes, toggleFavoriteById } from "../services/quotes";
import Navbar from "./Navbar";
import { Link } from "react-router";

const QuoteList = () => {
  const [quoteList, setQuoteList] = useState([]);

  useEffect(() => {
    const allQuotes = findAllQuotes();
    setQuoteList(allQuotes);
  }, []);

  const handleDeleteButton = (quoteId) => {
    const updatedQuotes = deleteQuoteById(quoteId);
    setQuoteList(updatedQuotes);
  };

  const handleToggleFavorite = (quoteId) => {
    const updatedQuotes = toggleFavoriteById(quoteId);
    setQuoteList(updatedQuotes);
  };

  return (
    <div>
      <Navbar />
      <h4 className="mt-3 text-center fw-bold">My Quotes</h4>
      <div>
        <p className="text-end mx-5">
          <Link className="btn btn-primary" to="/newquote">Add</Link>
        </p>
        <div className="mx-3 p-1">
          {quoteList.length === 0 ? (
            <p>No quotes available</p>
          ) : (
            quoteList.map((qt) => (
              <div key={qt.id} className="my-3 mx-3 px-4 py-1 border border-2 border-dark shadow d-flex justify-content-between align-items-center">
                <div>
                  {qt.desc}
                  <p className="mb-0">- {qt.author}</p>
                </div>
                <div className="d-flex align-items-center">
                  <button
                    className="btn btn-close me-2"
                    aria-label="Delete"
                    onClick={() => handleDeleteButton(qt.id)}
                  />
                  <button
                    className="btn btn-favorite"
                    style={{
                      fontSize: "1.5rem",
                      color: qt.favorite ? "gold" : "gray",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                    aria-label={qt.favorite ? "Unfavorite" : "Mark as favorite"}
                    onClick={() => handleToggleFavorite(qt.id)}
                    title={qt.favorite ? "Unfavorite" : "Mark as favorite"}
                  >
                    {qt.favorite ? "★" : "☆"}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteList;



// import { useEffect, useState } from "react";
// import { deleteQuoteById, findAllQuotes, toggleFavoriteById } from "../services/quotes";
// import Navbar from "./Navbar";
// import { Link } from "react-router";
// import Favorites from "./Favorites";

// const QuoteList = () => {
//   const [quoteList, setQuoteList] = useState([]);
//   const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

//   useEffect(() => {
//     const allQuotes = findAllQuotes();
//     setQuoteList(allQuotes);
//   }, []);

//   const handleDeleteButton = (quoteId) => {
//     const updatedQuotes = deleteQuoteById(quoteId);
//     setQuoteList(updatedQuotes);
//   };

//   const handleToggleFavorite = (quoteId) => {
//     const updatedQuotes = toggleFavoriteById(quoteId);
//     setQuoteList(updatedQuotes);
//   };

//   const toggleShowFavorites = () => {
//     setShowFavoritesOnly((prev) => !prev);
//   };

//   const displayedQuotes = showFavoritesOnly
//     ? quoteList.filter((qt) => qt.favorite)
//     : quoteList;

//   return (
//     <div>
//       <Navbar />
//       <h4 className="mt-3 text-center fw-bold">My Quotes</h4>
//       <div className="d-flex justify-content-between mx-5 mb-3">
//         <Link className="btn btn-primary" to="/newquote">Add</Link>
//         <button
//           className="btn btn-secondary"
//           onClick={toggleShowFavorites}
//         >
//           {showFavoritesOnly ? "Show All Quotes" : "Show Favorites Only"}
//         </button>
//       </div>
//       <div className="mx-3 p-1">
//         {showFavoritesOnly ? (
//           <Favorites
//             favorites={displayedQuotes}
//             onToggleFavorite={handleToggleFavorite}
//             onDelete={handleDeleteButton}
//           />
//         ) : (
//           displayedQuotes.length === 0 ? (
//             <p>No quotes available</p>
//           ) : (
//             displayedQuotes.map((qt) => (
//               <div
//                 key={qt.id}
//                 className="my-3 mx-3 px-4 py-1 border border-2 border-dark shadow d-flex justify-content-between align-items-center"
//               >
//                 <div>
//                   {qt.desc}
//                   <p className="mb-0">- {qt.author}</p>
//                 </div>
//                 <div className="d-flex align-items-center">
//                   <button
//                     className="btn btn-close me-2"
//                     aria-label="Delete"
//                     onClick={() => handleDeleteButton(qt.id)}
//                   />
//                   <button
//                     className="btn btn-favorite"
//                     style={{
//                       fontSize: "1.5rem",
//                       color: qt.favorite ? "gold" : "gray",
//                       background: "none",
//                       border: "none",
//                       cursor: "pointer",
//                     }}
//                     aria-label={qt.favorite ? "Unfavorite" : "Mark as favorite"}
//                     onClick={() => handleToggleFavorite(qt.id)}
//                     title={qt.favorite ? "Unfavorite" : "Mark as favorite"}
//                   >
//                     {qt.favorite ? "★" : "☆"}
//                   </button>
//                 </div>
//               </div>
//             ))
//           )
//         )}
//       </div>
//     </div>
//   );
// };

// export default QuoteList;

