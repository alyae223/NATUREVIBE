import React, { useState } from 'react';
import { MdEmail } from "react-icons/md";
import { TiUser } from "react-icons/ti";
import { RiLockPasswordFill } from "react-icons/ri";
import './User.css';
import Logo from '../Layouts/Logo/logo2.png';

export default function User1({ toggleForm, onSignUp }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const userData = await response.json();
        onSignUp(userData);  // Update the user state in the parent component
      } else {
        console.error('Sign up failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="bac">
      <div className='User'>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="form">
            <h1 className="mb-4" id='text'>SIGN UP</h1>
            <div className="mb-3">
              <div className="input-group">
                <div className="input-group-prepend">
                  <TiUser />
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="name"
                  placeholder="Username"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-3">
              <div className="input-group">
                <div className="input-group-prepend">
                  <MdEmail />
                </div>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-3">
              <div className="input-group">
                <div className="input-group-prepend">
                  <RiLockPasswordFill />
                </div>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            <input type="button" value="sing up" className='btn12' />
            <p>
              Already have an account? <span onClick={toggleForm} style={{ color: 'blue', cursor: 'pointer' }}>Log In</span>
            </p>
          </div>
          <div className="logo"></div>
        </form>
      </div>
      <img src={Logo} alt="" id='imageL1' width={200} />
    </div>
  );
}
