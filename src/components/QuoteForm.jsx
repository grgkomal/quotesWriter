import { useState } from "react"
import { Link, useNavigate } from "react-router"
import { toast } from "react-toastify"
import Navbar from "./Navbar"
import { quoteSave } from "../services/quotes"


const QuoteForm = () => {
    const [desc,setDesc] = useState("")
    const [author,setAuthor] = useState("")
    const navigate = useNavigate()
    
    const handledescChange = (e) => setDesc(e.target.value)
    const handleauthorChange = (e) => setAuthor(e.target.value)

    const handleSaveClick = (e) => {
        const newQuote = quoteSave({ desc, author })
        if (newQuote) {
            toast.success("Quote Save" + JSON.stringify(newQuote));
            navigate("/myquotes")
        } else toast.error("Quote save failed.")
    }

    return (
        <div className="m-4">
            <Navbar />
            <div >
            <div className="text-center m-3 p-2 fw-bold"><h4>Add Quote</h4></div>
            <div>
                <input className="form-control mb-2 px-4" name="author" type="text" placeholder="Author" onChange={handleauthorChange} />
            </div>
            <div>
                <input className="form-control mb-2 px-4 py-5" name= "desc" type="text" placeholder="Quote here" onChange={handledescChange} />
            </div>
          
            <div className="mb-3 py-3"> 
                <button className="btn btn-primary" onClick={handleSaveClick}> Add </button>
            </div>
            </div>
        </div>
    )

}
export default QuoteForm