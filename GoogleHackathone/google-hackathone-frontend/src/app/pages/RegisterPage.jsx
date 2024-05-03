import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function RegisterPage() {
    const { register, handleSubmit, formState: { errors }, setError } = useForm();
    const [serverError, setServerError] = useState()
    let navigate = useNavigate();

    const onSubmit = async data => {
        try {

            const response = await axios.post('https://localhost:7287/register', data);
            console.log('Registration successful:', response.data);
            setServerError(null);
            navigate('/login', { replace: true });

        } catch (error) {
            if (error.response) {
                console.log('Failed to register:', error.response.data);
                setServerError("User already exists.");
                if (error.response.data.errors) {
                    Object.keys(error.response.data.errors).forEach((key) => {
                        setError(key, {
                            type: 'server',
                            message: error.response.data.errors[key]
                        });
                    });
                }
            } else {
                console.log('Error while sending registration data:', error.message);

                setError('username', { type: 'manual', message: 'Failed to register. Please try again.' });
            }
        }
    };

    return (
        <>
            <NavBar />
            <div className='register_container'>
                <form className='register_form' onSubmit={handleSubmit(onSubmit)}>

                    <div>
                        <label>Username: </label>
                        <input
                            {...register('username', { required: "Field required" })}
                        />
                        {errors.username && <p className='error_message'>{errors.username.message}</p>}
                    </div>

                    <div>
                        <label>Email: </label>
                        <input
                            type="email"
                            {...register('email', {
                                required: "Field required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Email is invalid"
                                }
                            })}
                        />
                        {errors.email && <p className='error_message'>{errors.email.message}</p>}
                        {serverError && <p className='error_message'>{serverError}</p>}
                    </div>

                    <div>
                        <label>Password: </label>
                        <input
                            type="password"
                            {...register('password', {
                                required: "Field required",
                                minLength: {
                                    value: 6,
                                    message: "password must be at least 6 digits"
                                }
                            })}
                        />
                        {errors.password && <p className='error_message'>{errors.password.message}</p>}
                    </div>

                    <div className='radio'>
                        <label>Role: </label>
                        <label>
                            <input
                                type="radio"
                                value="admin"
                                {...register('role', { required: "Field required" })}
                            />
                            Admin
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="user"
                                {...register('role', { required: "Field required" })}
                            />
                            User
                        </label>
                        {errors.role && <p style={{ marginTop: "50px" }} className='error_message'>{errors.role.message}</p>}
                    </div>

                    <button className='send_button' type="submit">Register</button>&nbsp;&nbsp;
                    &nbsp;
                    <Link style={{ color: "white" }} to='/login'>login</Link>
                </form>
            </div>
        </>
    );
}

export default RegisterPage