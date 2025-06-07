import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function UserLoginCard() {
    const [showPassword, setShowPassword] = useState(false);
    const [ formData, setFormData ] = useState({
        email : "",
        password: ""
    } );
    const [message, setMessage] = useState("")  
    const navigate = useNavigate();

    const handleChange = ( e ) => {
        e.preventDefault();
        setFormData( {
            ...formData, 
            [ e.target.name ] : e.target.value
        })
    }
    
    const login = () => {
        axios.post( "http://localhost:8800/api/v1/user/login", formData, {
            withCredentials: true,
        } )
        .then( ( payload ) => {
            if( payload.data.success ) {
                setMessage( "Login successful" );
            }
            else
            setMessage( payload.data.message)
        })
        .catch( ( err ) => {
            console.log( err );
            setMessage( "Error in logging in")
        })
    }

    return(
        <div className="LoginCard p-5 bg-white rounded-xl w-sm">
            <div className="details flex flex-col justify-center items-center">
                <h1> Login </h1>
                <form action="" className="form flex flex-col gap-5 p-5" onSubmit={ (e) => {
                    e.preventDefault();
                    login();
                }}>
                    <input type="text" name="email" id="" placeholder="Enter Email" className="border-gray-500 border-2 p-2 rounded-md" onChange={handleChange}/>
                    <div className="password flex flex-row justify-center items-center gap-3">
                        <input type={ showPassword ? `text` : `password`} name="password" placeholder="Enter Password" className="border-gray-500 border-2 p-2 rounded-md" onChange={handleChange}/>
                        <h1 className="cursor-pointer w-11 select-none" onClick={ (e) => {
                            e.preventDefault();
                            setShowPassword( !showPassword );
                        }}> { showPassword ? `Hide` : `Show`} </h1>
                    </div>
                    <div className="btns flex flex-row justify-between">
                        <Link to='/'> Back </Link>
                        <input type="submit" className="text-white p-2 bg-blue-600 hover:bg-blue-700 rounded-md" value="Login" />
                    </div>
                    <p className="message text-center text-red-600"> {message} </p>
                </form>
            </div>
        </div>
    )
}