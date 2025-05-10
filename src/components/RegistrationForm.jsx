import { useState } from "react"
import { toast } from "react-toastify"
import { Link, useNavigate } from "react-router"
import { userSave } from "../services/users"

const RegistrationForm = () => {

    const [info,setInfo] = useState({
        fname:"",
        lname:"",
        email:"",
        password:"",
        confirmPassword:"",
        mobile:"",
        address:"",
    })
    const navigate = useNavigate()

    const handleEmailChange = (e) => { 
        const newInfo = {...info, email:e.target.value}
        setInfo(newInfo)
    }

    const handlePasswordChange = (e) => {
        const newInfo = { ...info,password:e.target.value}
        setInfo(newInfo)
    }

    const handleInputFieldChange = (e) => {
        const newInfo = { ...info,[e.target.name]:[e.target.value] }
        setInfo(newInfo) 
    }

    const handleConfirmPasswordChange = (e) => {
        const newInfo = {...info,confirmPassword:e.target.value}
        setInfo(newInfo)

    }

    const handleSignUpClick = (e) => {
        let valid= true
     
        if (!info.fname || info.fname.length == 0 ){
            toast.error("First Name cannot be empty")
            valid = false
        }
        if(!info.lname || info.lname.length == 0){
            toast.error("Last name cannot be empty")
            valid=false
        }
        if(!info.email || info.email.length == 0) {
            toast.error("Email cannot be empty !")
            valid = false
        }

        if(!info.password || info.password.length == 0){
            toast.error("Password cannot be empty")
            valid=false
        } 
        if (!info.confirmPassword || info.confirmPassword.length == 0  ){
            toast.error(" confirm password cant be empty")
            valid = false
        }
        if(info.password !=info.confirmPassword || info.password.length != info.confirmPassword.length){
            toast.error("password and confirm password should be same")
            valid=false
        }

        if(valid){
            const message = `First Name: ${info.fname}\n 
            Last Name: ${info.lname}\n 
            Email: ${info.email}\n 
            Password: ${info.password}\n 
            Confirm Password: ${info.confirmPassword}\n `
            toast.success(message)
            userSave(info)
            navigate("/")

        }
    }


  

    return(
        <div className="justify-content-between card p-5 m-3 text-center border border-2 shadow ">
        
            <div className="mt-4 mb-4 text-center" >
                <h4 className="fw-bold">Registration Form</h4>
            </div>

            <div className="mx-4 mb-1 p-1">
                <input className="form-label px-2"  
                name="fname" 
                type="text" 
                placeholder="First Name" 
                value={info.fname} 
                onChange={handleInputFieldChange} />
            </div>

            <div className="mx-4 mb-1 p-1">
                <input className="form-label px-2" 
                name="lname" 
                type="text" 
                placeholder="Last Name" 
                value={info.lname} 
                onChange={handleInputFieldChange} />
            </div>

            <div className="mx-4 mb-1 p-1">
                <input className="form-label px-2" 
                name="email" 
                type="text" 
                placeholder="Email" 
                value={info.email} 
                onChange={handleEmailChange} />
            </div>

            <div className="mx-4 mb-1 p-1">
                <input className="form-label px-2" 
                name="password" 
                type="password" 
                placeholder="Password" 
                value={info.password} 
                onChange={handlePasswordChange} />
            </div>

<div className="mx-4 mb-1 p-1">
                <input className="form-label px-2" 
                name="confirmPassword" 
                type="password" 
                placeholder="Confirm Password" 
                value={info.confirmPassword} 
                onChange={handleConfirmPasswordChange   } />
            </div>

            <div className="mx-4 mb-2 pt-4">
                <p>Already have account? <Link to = "/">login here</Link></p>

            </div>

            <div className="mx-3 mb-3">
                <button className="mx-3 col btn btn-primary" onClick={handleSignUpClick} >Sign Up</button>
           
            </div>
           

        </div>
    )
}

export default RegistrationForm