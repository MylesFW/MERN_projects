import React, { useEffect, useState } from "react"
import axios from 'axios'
import { navigate } from "@reach/router"

const Post = (props) => {
    const [post, setPost] = useState(null)

    useEffect(() => {
        axios.get('http://localhost:5000/api/posts/' + props.id)
        .then((res) => {
            setPost(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [props.id])

    const handleDelete = (delId) => {
        axios.delete('http://localhost:5000/api/posts/' + delId)
        .then((res) => {
            navigate('/posts')
        })
        .catch((err) => {
            console.log(err)
        })
    }

    if (post === null) {
        return "Loading..."
    }

    return (
        <div>
            <div style={{ width: "75%", margin: "0 auto", padding: 5}}>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <small>Categories: {post.primaryCategory}, {post.secondaryCategory}</small>
                <img src={post.imgURL} alt={post.title} width="100%" />
                <div>
                    <button onClick={(e) => {
                        handleDelete(post._id)
                    }}
                    style={{borderRadius: '5px',border:'10px solid red', backgroundColor: 'red', color: 'white', fontStyle: 'bold', cursor: 'pointer'}}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Post