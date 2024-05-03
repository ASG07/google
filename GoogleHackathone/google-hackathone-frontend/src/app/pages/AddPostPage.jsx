import React from 'react'
import { useForm } from 'react-hook-form'
import NavBar from '../components/NavBar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function AddPostPage() {
    const { register, handleSubmit, formState: { errors }, setError } = useForm();
    const navigate = useNavigate();


    const onSubmit = async data => {
        console.log(data)
        try {
            const response = await axios.post('https://localhost:7287/api/posts', data, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            });
            console.log(JSON.parse(response.data));
            let jsonObject = JSON.parse(response.data);
            let textValue = jsonObject.candidates[0].content.parts[0].text;
            console.log(textValue)
            navigate('/posts', { replace: true })
        } catch (error) {
            console.error("error fetching data: ", error)
            if (error.response.status == 401) {
                navigate('/login', { replace: true })
            }
            //if(error.response)
        }
    };

    return (
        <>
            <NavBar />
            <div className='add_post_container'>
                <form className='add_post_page' onSubmit={handleSubmit(onSubmit)}>
                    <h1>Complaint Form</h1>
                    <div>
                        <label>Title: </label>
                        <input
                            type="text"
                            {...register('title', {
                                required: "Field required",
                            })}
                        />
                        {errors.title && <p className='error_message'>{errors.title.message}</p>}
                    </div>

                    <div>
                        <label>Description: </label>
                        <textarea
                            {...register('description', {
                                required: "Field required",
                            })}
                        />
                        {errors.description && <p className='error_message'>{errors.description.message}</p>}
                    </div>

                    <button type="submit" className='send_button'>submit</button>
                </form>
            </div>
        </>
    )
}

export default AddPostPage