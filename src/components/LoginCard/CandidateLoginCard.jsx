import React from "react";
import { Link } from "react-router-dom";

export default function LoginCard() {
    const [showPassword, setShowPassword] = React.useState(false);
    return(
        <div className="LoginCard p-5 bg-white rounded-xl w-sm">
            <div className="details flex flex-col justify-center items-center">
                <h1> Login </h1>
                <form action="" className="form flex flex-col gap-5 p-5">
                    <input type="text" name="email" id="" placeholder="Enter Email" className="border-gray-500 border-2 p-2 rounded-md"/>
                    <div className="password flex flex-row justify-center items-center gap-3">
                        <input type={ showPassword ? `text` : `password`} name="" id="" placeholder="Enter Password" className="border-gray-500 border-2 p-2 rounded-md"/>
                        <h1 className="cursor-pointer w-11 select-none" onClick={ (e) => {
                            e.preventDefault();
                            setShowPassword( !showPassword );
                        }}> { showPassword ? `Hide` : `Show`} </h1>
                    </div>
                    <div className="btns flex flex-row justify-between">
                        <Link to='/'> Back </Link>
                        <input type="submit" value="Login" />
                    </div>
                </form>
            </div>
        </div>
    )
}