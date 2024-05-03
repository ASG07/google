import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    const id = localStorage.getItem('id');
    const [isLoggedIn, setIsLoggedIn] = useState();

    const logOut = () => {
        localStorage.clear();
        setIsLoggedIn(false);
        console.log("user logged out")
    }

    return (
        <div className='nav_container'>
            {token && <div className='identity'>
                <Link to='/posts' onClick={() => logOut()}>Logout</Link>
                <p>Welcome {localStorage.getItem('username')} 👋</p>
            </div>}
            {!token && <div className='identity'>
                <Link to='/register'>sign up</Link>
                <Link to='/login'>Login</Link>
            </div>}

            <div className='posts_controls'>
                {role == 'admin' && <Link to='/myPosts'>My Complaints&nbsp;</Link>}
                <Link to='/posts'>Compaints&nbsp;</Link>
                {/* {role == 'admin' && <Link to='/createPost'>My Tasks</Link>} */}
                {role == 'admin' && <Link to='/createPost'>Add New Complaint</Link>}

            </div>
            <div className='posts_controls' style={{ marginInlineEnd: "40px" }}><h1>Complaints Manager</h1></div>
        </div>
    )
}

export default NavBar