import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import Navbar from "./Navbar";
import { findAllQuotes } from "../services/quotes";

const Favorites = () => {
  const [favoriteQuotes, setFavoriteQuotes] = useState([]);

  useEffect(() => {
    const allQuotes = findAllQuotes();
    const favorites = allQuotes.filter(quote => quote.favorite); // filter favorites
    setFavoriteQuotes(favorites);
  }, []);

  return (
    <div className=" m-4">
      <Navbar />
      <h4 className="text-center m-3 p-2 fw-bold">Favorite Quotes</h4>
      <div className="text-end mx-3 mb-4 pb-5">
      <Link className="mb-2 px-4 py-5" to="/all">All</Link>
      <Link className="mb-3 px-5" to="/favorite">Favorite</Link>
      </div>
      <div className="container mt-4">
        {favoriteQuotes.length === 0 ? (
          <p>No favorite quotes available</p>
        ) : (
          favoriteQuotes.map((quote) => (
            <div key={quote.id} className="my-3 p-3 border border-2 border-secondary rounded shadow-sm">
              <p className="mb-1">{quote.desc}</p>
              <p className="mb-0 fst-italic">- {quote.author}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Favorites;



// import React from "react";

// const Favorites = ({ favorites, onToggleFavorite, onDelete }) => {
//   if (favorites.length === 0) {
//     return <p>No favorite quotes available</p>;
//   }

//   return (
//     <div>
//       {favorites.map((qt) => (
//         <div
//           key={qt.id}
//           className="my-3 mx-3 px-4 py-1 border border-2 border-dark shadow d-flex justify-content-between align-items-center"
//         >
//           <div>
//             {qt.desc}
//             <p className="mb-0">- {qt.author}</p>
//           </div>
//           <div className="d-flex align-items-center">
//             <button
//               className="btn btn-close me-2"
//               aria-label="Delete"
//               onClick={() => onDelete(qt.id)}
//             />
//             <button
//               className="btn btn-favorite"
//               style={{
//                 fontSize: "1.5rem",
//                 color: qt.favorite ? "gold" : "gray",
//                 background: "none",
//                 border: "none",
//                 cursor: "pointer",
//               }}
//               aria-label={qt.favorite ? "Unfavorite" : "Mark as favorite"}
//               onClick={() => onToggleFavorite(qt.id)}
//               title={qt.favorite ? "Unfavorite" : "Mark as favorite"}
//             >
//               {qt.favorite ? "★" : "☆"}
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Favorites;





// // // src/components/FavoriteButton.js
// // import React from "react";

// // const Favorites = ({ isFavorite, onClick }) => {
// //   return (
// //     <button
// //       className="btn btn-favorite"
// //       style={{
// //         fontSize: "1.5rem",
// //         color: isFavorite ? "gold" : "gray",
// //         background: "none",
// //         border: "none",
// //         cursor: "pointer",
// //       }}
// //       aria-label={isFavorite ? "Unfavorite" : "Mark as favorite"}
// //       onClick={onClick}
// //       title={isFavorite ? "Unfavorite" : "Mark as favorite"}
// //     >
// //       {isFavorite ? "★" : "☆"}
// //     </button>
// //   );
// // };

// // export default Favorites;



// // import React from "react";

// // const Favorites = ({ favorites, onToggleFavorite, onDelete }) => {
// //   if (favorites.length === 0) {
// //     return <p>No favorite quotes available</p>;
// //   }

// //   return (
// //     <div>
// //       {favorites.map((qt) => (
// //         <div
// //           key={qt.id}
// //           className="my-3 mx-3 px-4 py-1 border border-2 border-dark shadow d-flex justify-content-between align-items-center"
// //         >
// //         <div className="d-flex align-items-center">
    
// //           <button
// //            className="btn btn-favorite"
// //            style={{
// //                 fontSize: "1.5rem",
// //                 color: qt.favorite ? "gold" : "gray",
// //                 background: "none",
// //                 border: "none",
// //                 cursor: "pointer",
// //             }}
// //               aria-label={qt.favorite ? "Unfavorite" : "Mark as favorite"}
// //               onClick={() => onToggleFavorite(qt.id)}
// //               title={qt.favorite ? "Unfavorite" : "Mark as favorite"}
// //             >
// //               {qt.favorite ? "★" : "☆"}
// //             </button>
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default Favorites;







// // import { toggleFavoriteById } from "../services/quotes";

// // const Favorites = () => {
// //     const handleToggleFavorite = (quoteId) => {
// //         const updatedQuotes = toggleFavoriteById(quoteId);
// //         setQuoteList(updatedQuotes);
// //       };
    
// //       const toggleShowFavorites = () => {
// //         setShowFavoritesOnly((prev) => !prev);
// //       };

// //       return (
// //         <div>
// //             <button
// //                  className="btn btn-secondary"
// //                  onClick={toggleShowFavorites}
// //             >
// //             {showFavoritesOnly}
// //             </button>
     

// //              <button
// //                     className="btn btn-favorite"
// //                     style={{
// //                       fontSize: "1.5rem",
// //                       color: qt.favorite ? "gold" : "gray",
// //                       background: "none",
// //                       border: "none",
// //                       cursor: "pointer",
// //                     }}
// //                     aria-label={qt.favorite ? "Unfavorite" : "Mark as favorite"}
// //                     onClick={() => handleToggleFavorite(qt.id)}
// //                     title={qt.favorite ? "Unfavorite" : "Mark as favorite"}
// //                   >
// //                     {qt.favorite ? "★" : "☆"}
// //                   </button>
// //         </div>
// //       )

// // }

// // export default Favorites


