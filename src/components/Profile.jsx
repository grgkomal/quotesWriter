import { useState } from "react"
import Navbar from "./Navbar"
import { Link } from "react-router"

const Profile = (e) => {
    const [info,setInfo] = useState({
        fname:"",
        lname:"",
        email:"",
        address:"",
        phoneNo:"",

    })

    const handleInputFieldChange = () => {
        const newInfo= {...info,[e.target.name]:[e.target.value]}
        setInfo(newInfo)
    }

    return (
      <div className=" justify-content-between card text-center border border-2 shadow ">
          <Navbar/>
          <div className="mb-4 text-center">
          <h4 className="fw-bold">My Profile</h4>
          </div>
          <div className="mx-4 mb-1 p-1">
            <input name="fname" type="text" placeholder="First name" onChange={handleInputFieldChange} />
          </div>
          <div className="mx-4 mb-1 p-1">
            <input name="lname" type="text" placeholder="Last name" onChange={handleInputFieldChange} />
          </div>
          <div className="mx-4 mb-1 p-1">
            <input name="email" type="text" placeholder="Email" onChange={handleInputFieldChange} />
          </div>
          <div className="mx-4 mb-1 p-1">
            <input name="address" type="text" placeholder="Address" onChange={handleInputFieldChange} />
          </div>
          <div className="mx-4 mb-1 p-1">
            <input name="phoneNo" type="text" placeholder="Phone No." onChange={handleInputFieldChange} />
          </div>
          <div className="mx-3 mb-3">
            <Link className="m-3 btn btn-primary" to="/home">Save</Link>
          </div>

        
        </div>
    )
}

export default Profile