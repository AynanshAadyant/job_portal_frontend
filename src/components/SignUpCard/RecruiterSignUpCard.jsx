import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function RecruiterSignUpCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    company: {
      name: '',
      location: ''
    }
  });

  // ✅ Handle input changes including nested fields like company.name
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith('company.')) {
      const field = name.split('.')[1];
      setFormData((prev) => ({
        ...prev,
        company: {
          ...prev.company,
          [field]: value
        }
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  // ✅ Signup logic
  const signUp = async (e) => {
    e.preventDefault();
    setMessage( "Signing Up.... ")
    try {
      const response = await axios.post('http://localhost:8800/api/v1/recruiter/register', formData);
      
      if (response.data.success) {
        setMessage("Sign Up successful");
        console.log( response.data.message );
      } 
      else {
        setMessage(response.data.message || "Signup failed");
      }
    } catch (err) {
      console.log("ERROR: ", err);
      setMessage("Error in signing up");
    }
  };

  return (
    <div className="recruiter p-5 bg-white rounded-xl w-sm items-center">
      <div className="details flex flex-col justify-center items-center">
        <h1> Recruiter Sign Up</h1>

        <form className='flex flex-col gap-4 p-5' onSubmit={signUp}>

          <input type="text" name="name" placeholder="Enter Name"
            className='border-gray-500 border-2 p-2 rounded-md w-64'
            onChange={handleChange} required />

          <input type="email" name="email" placeholder='Enter Email'
            className='border-gray-500 border-2 p-2 rounded-md' 
            onChange={handleChange} required />

          <div className="password flex flex-row justify-center items-center gap-3 w-64">
            <input type={showPassword ? `text` : `password`} name="password"
              placeholder='Enter Password'
              className='border-gray-500 border-2 p-2 rounded-md'
              onChange={handleChange} required />
            <h1 className="showPassword select-none cursor-pointer w-11" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? `Hide` : `Show`}
            </h1>
          </div>

          <input type="text" name="phone" placeholder='Enter Phone Number'
            className='border-gray-500 border-2 p-2 rounded-md'
            onChange={handleChange} required />

          <div className="company-details flex flex-col gap-2">
            <h1> Company : </h1>
            <input type="text" name="company.name" placeholder='Name'
              className='border-gray-500 border-2 p-2 rounded-md w-64'
              onChange={handleChange} required />
            <input type="text" name="company.location" placeholder='Location'
              className='border-gray-500 border-2 p-2 rounded-md w-64'
              onChange={handleChange} required />
          </div>

          <div className="btns flex flex-row justify-between">
            <Link to='/'>Back</Link>
            <input type="submit" value="Sign Up"
              className='bg-blue-500 text-white rounded-md p-3 hover:bg-blue-700 cursor-pointer' />
          </div>

        </form>
      </div>
      <p className='text-center text-sm text-red-500'>{message}</p>
    </div>
  );
}
