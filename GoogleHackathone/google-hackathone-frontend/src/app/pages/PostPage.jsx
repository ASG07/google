import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar';
import axios from 'axios';
import { useForm } from 'react-hook-form';

function PostPage() {
    const params = useParams();
    console.log(params);
    const [post, setPost] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [isUsersListOpen, setIsUsersListOpen] = useState(false);
    const [applicants, setApplicants] = useState([]);
    const role = localStorage.getItem('role');
    const username = localStorage.getItem('username');
    const userId = localStorage.getItem('id');

    const { register, handleSubmit, formState: { errors }, setError } = useForm();
    const navigate = useNavigate();


    const onSubmit = async data => {
        console.log(data)
        try {
            const response = await axios.put(`https://localhost:7287/api/posts/${params.postId}`, data, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            });
            console.log(response.data);
            requestData()
            setIsEditing(false);
            //navigate('/posts', { replace: true })
        } catch (error) {
            console.error("error fetching data: ", error)
        }
    };

    const apply = async () => {
        console.log(userId, params.postId)
        try {
            const response = await axios.post(`https://localhost:7287/api/Posts/Apply`, JSON.stringify(params.postId), {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                }
            });
            console.log(response.data);
            requestData()
            alert("Application was sent")
            navigate('/posts', { replace: true })
        } catch (error) {
            alert("Application was already sent")
            console.error("error fetching data: ", error)
        }
    }

    const deletePost = (id) => {
        console.log(id);
        axios.delete(`https://localhost:7287/api/posts/${id}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
            .then(response => {
                console.log(response);
                navigate('/posts', { replace: true });
            }).catch(error => {
                console.error('there was an error!', error);
            })
    }

    const requestData = () => {
        axios.get(`https://localhost:7287/api/posts/${params.postId}`)
            .then(response => {
                // handle success
                setPost(response.data);
                console.log(response.data)
            })
            .catch(error => {
                // handle error
                console.error('There was an error!', error);
            });
    }

    const openList = async () => {
        setIsUsersListOpen(true)
        try {
            const response = await axios.get(`https://localhost:7287/api/Posts/applicants/${params.postId}`, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                }
            });
            console.log(response.data);
            setApplicants(response.data);

        } catch (error) {
            console.error("error fetching data: ", error)
        }
    }

    useEffect(() => {
        requestData();
    }, []);

    return (
        <>
            <NavBar />
            {isEditing ?
                <div className='add_post_container'>
                    <form className='add_post_page' onSubmit={handleSubmit(onSubmit)}>
                        <h1>Edit Coop Advertisement</h1>
                        <div>
                            <label>Coop Training Title: </label>
                            <input defaultValue={post?.title}
                                type="text"
                                {...register('title', {
                                    required: "Field required",
                                })}
                            />
                            {errors.title && <p className='error_message'>{errors.title.message}</p>}
                        </div>

                        <div>
                            <label>Coop Training Description: </label>
                            <textarea defaultValue={post?.description}
                                {...register('description', {
                                    required: "Field required",
                                })}
                            />
                            {errors.description && <p className='error_message'>{errors.description.message}</p>}
                        </div>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <button type="submit" className='send_button'>Save Changes</button>
                            <button className='cancel_button' style={{ marginTop: "40px" }} onClick={() => setIsEditing(false)}>Cancel</button>
                        </div>
                    </form>
                </div>
                :
                <>
                    {isUsersListOpen ?
                        <div className='postPage_container'>
                            <div className='post_page'>
                                <div style={{ display: "block" }}>
                                    <div style={{ display: "flex", justifyContent: "space-around", }}>
                                        <h4>Username</h4>
                                        <h4>Email</h4>
                                        <h4>Assign Date</h4>
                                    </div>
                                    {applicants?.map(a => <div style={{ display: "flex", justifyContent: "space-around" }}>
                                        <p style={{ margin: "5px" }}>{a.userName}</p>
                                        <p style={{ margin: "5px" }}>{a.email}</p>
                                        <p style={{ margin: "5px" }}>{new Date(a.applicationDate).toLocaleDateString('en-US', {
                                            year: 'numeric', month: 'long', day: 'numeric'
                                        })}</p>
                                    </div>)}</div>
                                <button className='cancel_button' onClick={() => setIsUsersListOpen(false)}>Go Back</button>
                            </div>
                        </div>
                        :
                        <div className='postPage_container'>
                            <div className='post_page'>
                                <div>
                                    <div className='first_row'>
                                        <h3>{post?.authorName}</h3>
                                        <h3>{new Date(post?.dateTime).toLocaleDateString('en-US', {
                                            year: 'numeric', month: 'long', day: 'numeric'
                                        })}</h3>
                                    </div>
                                    <h1>{post?.title}</h1>
                                    <p>{post?.description}</p>
                                </div>
                                {role == 'admin' && username == post?.authorName ? <div className='postpage_controls'>
                                    <button className='cancel_button' onClick={() => deletePost(params.postId)}>Delete</button>
                                    <button className='primary_button' onClick={() => setIsEditing(true)}>Edit</button>
                                    <button className='primary_button' onClick={() => openList()}>View Assignee</button>
                                </div>
                                    :
                                    <>{role == 'user' && <button className='primary_button' style={{ marginRight: "0px" }} onClick={() => apply()}>Start Task</button>}</>
                                }
                            </div>
                        </div>
                    }
                </>
            }

        </>
    )
}

export default PostPage