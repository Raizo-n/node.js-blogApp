import React, { useState } from 'react'
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext';

export const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [err, setError] = useState(null);
  const navigate = useNavigate();
  const {login} = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // await axios.post("/auth/login", inputs);
      await login(inputs)
      navigate('/');
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className='auth'>
        <h1>Login</h1>
        <form>
            <input required type='text' placeholder='username' name='username' onChange={handleChange}/>
            <input required type='password' placeholder='password' name='password' onChange={handleChange}/>
            <button onClick={handleSubmit}>Submit</button>
            {err && <p>{err}</p>}
            <span>Don't you have an account? <Link to='/Register'>Register</Link></span>
        </form>
    </div>
  )
}
