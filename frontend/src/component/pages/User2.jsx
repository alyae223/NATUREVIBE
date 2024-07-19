import React from 'react';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import './User2.css';
import Logo from '../Layouts/Logo/logo1.png'
export default function User2({ toggleForm }) {
  return (
    <div className="bac1">
    <div className='User2'>
      <form action={`http://127.0.0.1:8000/api/login`} method='POST' encType="multipart/form-data">
        <div className="form">
          <h1 className="mb-4" id='text'>LOGIN</h1>
          <div className="mb-3">
            <div className="input-group">
              <div className="input-group-prepend">
                <MdEmail />
              </div>
              <input type="email" className="form-control" id="email" name='email' placeholder="Email" />
            </div>
          </div>
          <div className="mb-3">
            <div className="input-group">
              <div className="input-group-prepend">
                <RiLockPasswordFill />
              </div>
              <input type="password" className="form-control" id="password" name='password' placeholder="Password" />
            </div>
          </div>
          <button type="submit" className="btn1">Log In</button>
          <p>
            Don't have an account? <span onClick={toggleForm} style={{ color: 'blue', cursor: 'pointer' }}>Sign Up</span>
          </p>
        </div>
      </form>
      
    </div><div id='imageL'><img src={Logo} alt=""  id='imageL' width={200}/></div>
    
    </div>
  );
}
