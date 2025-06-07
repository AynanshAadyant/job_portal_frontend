import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function UserSignUpCard()
{
    const [showPassword, setShowPassword] = useState( false );
    const [ formData, setFormData ] = useState( {
        name: "",
        email: "",
        password: "",
        phone: ""
    })
    const [ message, setMessage ] = useState( "" )

    const handleChange = ( e ) => {
        setFormData( {
            ...formData,
            [ e.target.name ] : e.target.value,
        })
    }

    const signUp = () => {
        setMessage("Loading .. .. ");
        axios.post( "http://localhost:8800/api/v1/user/signup", formData )
        .then( (payload ) => {
            if( payload.data.success ) {
                setMessage( "Sign up successful" );
            }
            console.log( payload.data.message );
        })
        .catch( (err) => {
            console.log( err );
            setMessage( "Error in signing up" );
        })
    }

    return(
        <div className="SignUpCard p-5 bg-white rounded-xl w-sm">
            <div className="details flex flex-col justify-center items-center">
                <h1>Sign Up</h1>
                <form className='flex flex-col gap-4 p-5' onSubmit={(e) => {
                    e.preventDefault();
                    signUp();
                }}>
                    <input type="text" placeholder="Enter Name" name = "name" className='border-gray-500 border-2 p-2 rounded-md w-64' onChange={handleChange}/>
                    <input type="text" placeholder='Enter Email' name = "email" className='border-gray-500 border-2 p-2 rounded-md' onChange={handleChange}/>
                    <div className="password flex flex-row justify-center items-center gap-3 w-64">
                        <input type={showPassword ? `text` : `Password`} name="password" placeholder='Enter Password' className='border-gray-500 border-2 p-2 rounded-md' onChange={handleChange} />
                        <h1 className="showPassword select-none cursor-pointer w-11" onClick={ (e) => {
                            e.preventDefault();
                            setShowPassword( !showPassword );
                        }}> { showPassword ? `Hide` : `Show` } </h1>
                    </div>
                    <input type="text"  placeholder='Enter Phone Number' name="phone" className='border-gray-500 border-2 p-2 rounded-md' onChange={handleChange}/>
                    <div className="btns flex flex-row justify-between">
                        <Link to='/'> Back </Link>
                        <input type="submit" className='text-white text-center bg-blue-600 rounded-md p-2 hover:bg-blue-700' value="Sign Up" />
                    </div>
                    <p className="message text-red-500 text-center"> {message} </p>
                </form>
            </div>
        </div>
    )
}