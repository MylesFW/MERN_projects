import React, { useEffect, useState } from "react"
import axios from 'axios'
import { navigate } from "@reach/router"

const NewPost = (props) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [primaryCategory, setPrimaryCategory] = useState("")
    const [secondaryCategory, setSecondaryCategory] = useState("")
    const [imgURL, setImgURL] = useState("")
    
    const [errors, setErrors] = useState(null)

    useEffect(() => {
        axios.get('http://localhost:5000/api/posts/' + props.id)
        .then((res) => {
            setTitle(res.data.title)
            setDescription(res.data.description)
            setPrimaryCategory(res.data.primaryCategory)
            setSecondaryCategory(res.data.secondaryCategory)
            setImgURL(res.data.imgURL)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [props.id])

const handleNewPostSubmit = (event) => {
    event.preventDefault()

    const editedPost = {
        title: title,
        description: description,
        primaryCategory: primaryCategory,
        secondaryCategory: secondaryCategory,
        imgURL: imgURL,
    }

    axios.put('http://localhost:5000/api/posts/' + props.id, editedPost)
        .then((res) => {
            navigate("/posts/" + res.data._id)
        })
        .catch((err) => {
            console.log(err)
            setErrors(err.response?.data?.errors)
        })
}


    return (
            <form onSubmit={(e) => {
                handleNewPostSubmit(e)
            }}>
                <div>
                    <label>Title: </label>
                        {errors?.title && (
                            <span style={{color: "red"}}>{errors.title.message}</span>
                        )}
                    <input onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                        type="text"
                        value={title}
                    />
                </div>

                <div>
                    <label>Description: </label>
                        {errors?.description && (
                            <span style={{color: "red"}}>{errors.description.message}</span>
                        )}
                    <textarea onChange={(e) => {
                        setDescription(e.target.value)
                    }}
                        type="text"
                        value={description}
                    ></textarea>
                </div>

                <div>
                    <label>Primary Category: </label>
                        {errors?.primaryCategory && (
                            <span style={{color: "red"}}>{errors.primaryCategory.message}</span>
                        )}
                    <input onChange={(e) => {
                        setPrimaryCategory(e.target.value)
                    }}
                        type="text"
                        value={primaryCategory}
                    />
                </div>

                <div>
                    <label>Secondary Category: </label>
                        {errors?.secondaryCategory && (
                            <span style={{color: "red"}}>{errors.secondaryCategory.message}</span>
                        )}
                    <input onChange={(e) => {
                        setSecondaryCategory(e.target.value)
                    }}
                        type="text"
                        value={secondaryCategory}
                    />
                </div>

                <div>
                    <label>Image URL: </label>
                        {errors?.imgURL && (
                            <span style={{color: "red"}}>{errors.imgURL.message}</span>
                        )}
                    <input onChange={(e) => {
                        setImgURL(e.target.value)
                    }}
                        type="text"
                        value={imgURL}
                    />
                </div>

                <button>Update</button>
            </form>
    )
}

export default NewPost