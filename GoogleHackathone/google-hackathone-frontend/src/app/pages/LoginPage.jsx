import React from 'react'
import { useForm } from 'react-hook-form'
import NavBar from '../components/NavBar';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function LoginPage() {
  const { register, handleSubmit, formState: { errors }, setError } = useForm();
  const navigate = useNavigate();

  const onSubmit = async data => {
    console.log(data)
    try {
      const response = await axios.post('https://localhost:7287/login', data, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        }
      });
      console.log('Login successful:', response.data);

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('username', response.data.username);
      localStorage.setItem('role', response.data.role);
      localStorage.setItem('id', response.data.id);

      console.log(localStorage.getItem('token'));
      console.log(localStorage.getItem('username'));
      console.log(localStorage.getItem('role'));
      navigate('/posts', { replace: true });
    } catch (error) {
      if (error.response) {
        console.log('Failed to login:', error.response.data);
        setError('email', { type: 'manual', message: 'Failed to login with provided credentials.' });
      } else {
        console.log('Error while sending login data:', error.message);
        setError('email', { type: 'manual', message: 'There was a problem with your login.' });
      }
    }
  };

  return (
    <>
      <NavBar />
      <div className='login_container'>
        <form className='login_form' onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Email: </label><br />
            <input
              type="email"
              {...register('email', {
                required: "Field Required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Email is invalid"
                }
              })}
            />
            {errors.email && <p className='error_message'>{errors.email.message}</p>}
          </div>

          <div>
            <label>Password: </label><br />
            <input
              type="password"
              {...register('password', {
                required: "Field Required",
                minLength: {
                  value: 6,
                  message: "password must be at least 6 digits"
                }
              })}
            />
            {errors.password && <p className='error_message'>{errors.password.message}</p>}
          </div>

          <button className='send_button' type="submit">Login</button> &nbsp;&nbsp;&nbsp;
          <Link style={{ color: "white" }} to='/register'>Create an account</Link>
        </form>
      </div>
    </>
  )
}

export default LoginPage