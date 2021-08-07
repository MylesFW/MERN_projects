import React, { useEffect, useState } from "react"
import axios from 'axios'
import { Link } from '@reach/router'

const Posts = (props) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/api/posts')
        .then((res) => {
            setPosts(res.data)
        })
                // this is what will sort all posts a-z 
        // .then((res) => {
        //     const sortedPosts =res.data.sort((a, b) => a.primaryCategory.localeCompare(b.primaryCategory))
        //     setPosts(sortedPosts)
        // })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    const handleDelete = (delId) => {
        axios.delete('http://localhost:5000/api/posts/' + delId)
        .then((res) => {
            const filteredPosts = posts.filter((post) => {
                return post._id !== delId
            })
            setPosts(filteredPosts)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
    const handleLikeCount = (likedPost) => {
        const updateBody = {
            likeCount: likedPost.likeCount + 1
        }
        axios.put(`http://localhost:5000/api/posts/${likedPost._id}`, updateBody)
        .then((res) => {
            const updatedPosts = posts.map((post) => {
                if (likedPost._id === post._id) {
                    return res.data
                }
                return post
            })
            setPosts(updatedPosts)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <div>
            <h1 style={{margin: '0 auto'}}>Buildings Accross Seattle</h1>
            <h6 style={{margin: '0 auto'}}>(All Posts)</h6>
            {
                posts.map((post) => {
                    return (
                        <div key={post._id} style={{ width: "75%", margin: "0 auto", padding: 0}}>
                            <h2 style={{marginBottom: 20}}><Link to={ '/posts/' + post._id }>{post.title}</Link></h2>
                            <small>Categories: {post.primaryCategory}, {post.secondaryCategory}</small>
                            <img src={post.imgURL} alt={post.title} width="100%" />
                            <div style={{margin: 15}}>
                    {/* delete from all posts */}
                                <button onClick={(e) => {
                                    handleDelete(post._id)
                                }}
                                style={{marginRight: 30, borderRadius: '5px',border:'10px solid red', backgroundColor: 'red', color: 'white', fontStyle: 'bold', cursor: 'pointer'}}>Delete</button>
                    {/* edit post from all posts */}
                                <Link to ={`/posts/${post._id}/edit`}><button style={{marginRight: '40%', borderRadius: '5px',border:'10px solid dodgerblue', backgroundColor: 'dodgerblue', color: 'white', fontStyle: 'bold', cursor: 'pointer'}}>Edit</button></Link>
                    {/* counter button from all posts */}
                                <span onClick={(e) => {
                                    handleLikeCount(post)
                                }}
                                    style={{marginRight: 30, borderRadius: '5px',border:'10px solid green', backgroundColor: 'green', color: 'white', fontStyle: 'bold', cursor: 'pointer'}}>{post.likeCount} &#10084;</span>
                            </div>
                            <hr style={{ marginBottom: 30}}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Posts