import React from 'react'
import Post from '../components/Post'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import axios from 'axios'
import { useEffect, useState } from 'react'

function PostsPage() {

    const [posts, setPosts] = useState(null);
    const role = localStorage.getItem('role');
    const username = localStorage.getItem('username');

    useEffect(() => {
        axios.get('https://localhost:7287/api/posts')
            .then(response => {
                // handle success
                setPosts(response.data);
                console.log(response.data)
            })
            .catch(error => {
                // handle error
                console.error('There was an error!', error);
            });
    }, []);

    // const posts = [
    //     {
    //         postId: 1,
    //         author: "ahmed",
    //         title: "Lorem ipsum dolor",
    //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et pharetra nulla. Maecenas cursus pellentesque metus nec finibus. Pellentesque sit amet semper augue. Sed in quam sit amet metus malesuada iaculis. Nullam ligula turpis, vestibulum commodo nisi sed, scelerisque volutpat felis. Etiam tempor, est id blandit pharetra, purus odio ultricies ex, vel consectetur mauris tellus in ligula. Sed et nibh eleifend, elementum nulla nec, volutpat mauris. Mauris scelerisque tellus sit amet augue hendrerit rutrum.",
    //         publishDate: Date.now()
    //     },
    //     {
    //         postId: 2,
    //         author: "sameer",
    //         title: "blandit pharetra",
    //         description: "Proin ultrices lobortis justo vel ultrices. Etiam ornare tortor sapien. In molestie, elit non interdum pulvinar, leo orci interdum metus, ut blandit elit elit rhoncus orci. Vivamus aliquam venenatis lectus sed iaculis. Proin vel dui porta, auctor magna sed, vulputate sem. Suspendisse potenti. Nulla malesuada leo tellus, vitae laoreet felis sodales nec. Quisque eget porta risus. Aenean volutpat ultricies hendrerit. Cras aliquet ac massa sit amet elementum. Donec accumsan sem eget augue dictum dapibus.",
    //         publishDate: Date.now()
    //     },
    //     {
    //         postId: 3,
    //         author: "fahad",
    //         title: "augue hendrerit",
    //         description: "Donec hendrerit accumsan commodo. Mauris viverra urna a diam placerat, vel volutpat enim mattis. Proin vitae nisi quis sem finibus hendrerit a ultrices ante. Vestibulum at ullamcorper odio, non ullamcorper elit. Integer id luctus arcu. Donec vehicula dolor vitae est faucibus vehicula. Praesent volutpat vulputate tempor. Nullam vestibulum pellentesque odio, a sollicitudin lacus ullamcorper sit amet. In rutrum felis est, id interdum ligula malesuada sit amet.",
    //         publishDate: Date.now()
    //     },
    //     {
    //         postId: 4,
    //         author: "saleh",
    //         title: "massa sit amet",
    //         description: "Vestibulum placerat condimentum ante eu auctor. Proin consectetur auctor orci quis elementum. Proin quis nulla sed nisl rhoncus tempus. Etiam vehicula mollis bibendum. Donec tincidunt augue nec justo blandit aliquet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam ac porttitor orci.",
    //         publishDate: Date.now()
    //     },
    // ]

    return (
        <>
            <NavBar />
            <div className='posts_page'>

                <div className='posts_container'>
                    {posts?.map(post => <a className='post_link' key={post.postId} href={`/posts/${post.postId}`}><Post authorName={post.authorName} title={post.title} description={post.description} dateTime={post.dateTime} /></a>)}
                </div>

            </div></>
    )
}

export default PostsPage