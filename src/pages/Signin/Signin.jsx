import React, { useState } from 'react';
import { postData } from '../../services/FetchNodeServices';
import './Signin.css';

const Signin = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    ustId: '',
    mobileNo: '',
    mailId: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    else{
        const responce = await postData("signin",formData)
        console.log('responce',responce)
        console.log('Form Data Submitted:', formData);
    }
    
    // You can add API call logic here
  };

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
        <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
        <input type="text" name="ustId" placeholder="UST ID" value={formData.ustId} onChange={handleChange} required />
        <input type="text" name="mobileNo" placeholder="Mobile Number" value={formData.mobileNo} onChange={handleChange} required />
        <input type="email" name="mailId" placeholder="Email" value={formData.mailId} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Signin;