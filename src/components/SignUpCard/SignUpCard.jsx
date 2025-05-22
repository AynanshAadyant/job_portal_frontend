import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignUpCard()
{
    const [showPassword, setShowPassword] = useState( false );
    return(
        <div className="SignUpCard p-5 bg-white rounded-xl w-sm">
            <div className="details flex flex-col justify-center items-center">
                <h1>Sign Up</h1>
                <form className='flex flex-col gap-4 p-5 '>
                    <input type="text" placeholder="Enter Name" name = "name" className='border-gray-500 border-2 p-2 rounded-md w-64'/>
                    <input type="text" placeholder='Enter Email' name = "email" className='border-gray-500 border-2 p-2 rounded-md'/>
                    <div className="password flex flex-row justify-center items-center gap-3 w-64">
                        <input type={showPassword ? `text` : `Password`} name="password" placeholder='Enter Password' id="" className='border-gray-500 border-2 p-2 rounded-md' />
                        <h1 className="showPassword select-none cursor-pointer w-11" onClick={ (e) => {
                            e.preventDefault();
                            setShowPassword( !showPassword );
                        }}> { showPassword ? `Hide` : `Show` } </h1>
                    </div>
                    <input type="text"  placeholder='Enter Phone Number' name="phno" className='border-gray-500 border-2 p-2 rounded-md'/>
                    <div className="btns flex flex-row justify-between">
                        <Link to='/'> Back </Link>
                        <input type="submit" value="Sign Up" />
                    </div>
                </form>
            </div>
        </div>
    )
}