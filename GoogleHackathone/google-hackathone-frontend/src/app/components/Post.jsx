import React from 'react'
import '../../App.css'

function Post(props) {
    return (

        <div className='post'>
            <div style={{ display: "flex", justifyContent: "space-between" }}>

                <h4 className='author'>It is {props?.status}</h4>
                <h4 className='author'>publisher:  {props.authorName}</h4>
                <h4 className='publishDate'>Publish Date:  {new Date(props.dateTime).toLocaleDateString('en-US', {
                    year: 'numeric', month: 'long', day: 'numeric'
                })}</h4></div>
            <h2 className='title'>{props.title}</h2>
            <p className='description'>{props.description}</p>

        </div>

    )
}

export default Post