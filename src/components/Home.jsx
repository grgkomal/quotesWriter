
import React, { useEffect, useState } from "react";
import { Link } from "react-router"; // Make sure to use "react-router-dom"
import Navbar from "./Navbar";
import { findAllQuotes } from "../services/quotes"; // Import the function to get quotes

const Home = () => {

    const [quotes, setQuotes] = useState([]);
    useEffect(() => {
      const allQuotes = findAllQuotes();
      setQuotes(allQuotes);
    }, []);
    
    return (
        <div className="text-end m-4">
            <Navbar/>
            {/* <p>AwesomeQuoteApplication</p> */}
            <h4 className="text-center m-3 p-2 fw-bold">Quotes Around the World</h4>
            <Link className="mb-2 px-4 py-5" to="/all">All</Link>
            <Link className=" mb-3 px-5" to="/favorite">Favorite</Link>

    
            
        </div>
    )
}
export default Home