import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { findUserByCredentials } from "../services/users"

const LoginForm = () => {
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleEmailChange = (e) => setEmail(e.target.value)
    const handlePasswordChange =(e) => setPassword(e.target.value)

    const handleSignInClick = (e) => {
        try {
            const user = findUserByCredentials({ email, password })
            if (user) navigate("/home")
        } catch (err) {
            toast.error("Invalid credentials")
        }
    };

    return (
    <div className=" justify-content-between card p-5 m-3 text-center border border-2 shadow ">
        <div className="mb-4 text-center "> <h4 className="fw-bold">Login</h4> </div>
        
        <div className="mx-4 mb-1 p-1">
             <input className="form-label px-2" name ="email" type="text" placeholder="Email" onChange={handleEmailChange}/>
        </div>
        
        <div className="mx-4 mb-1">
            <input className="form-label px-2" type="password" placeholder="Password" onChange={handlePasswordChange}/>
        </div>

        <div className="mx-4 mb-2 pt-4">
            <p>Don't have Account? <Link className="mx-2 col" to = "/register" >Sign Up</Link></p>
        </div>

        <div className="mx-3 mb-3">
            <button className="mx-3 col btn btn-primary" onClick={handleSignInClick} >Sign In</button>
            
        </div>
        

    </div>
    )
}

export default LoginForm;