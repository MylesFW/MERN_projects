import React, { useEffect, useState } from "react"
import axios from 'axios'
import { navigate } from "@reach/router"

const EditProduct = (props) => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    const [errors, setErrors] = useState(null)

    useEffect (() => {
        axios.get('http://localhost:5000/api/products/' + props.id + '/edit')
        .then((res) => {
            setTitle(res.data.title)
            setPrice(res.data.price)
            setDescription(res.data.description)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [props.id])

    const handleNewProductSubmit = (event) => {
        event.preventDefault()
    
        const editedProduct = {
            title: title,
            price: price,
            description: description,
        }
    
        axios.put('http://localhost:5000/api/products/' + props.id, editedProduct)
            .then((res) => {
                navigate("/products/new")
            })
            .catch((err) => {
                console.log(err)
                setErrors(err.response?.data?.errors)
            })
    }



    return (
        <div>
            <form onSubmit={(e) => {
                    handleNewProductSubmit(e)
                }}>
                    <div>
                        <label>Name of Product: </label>
                            {errors?.title && (
                                <span style={{color: "red"}}>{errors.title.message}</span>
                            )}
                        <input onChange={(e) => {
                            setTitle(e.target.value)
                            }}
                            type='text'
                            value={title}
                        />
                    </div>

                    <div>
                        <label>Set Price: </label>
                            {errors?.price && (
                                <span style={{color: "red"}}>{errors.price.message}</span>
                            )}
                        <input onChange={(e) => {
                            setPrice(e.target.value)
                            }}
                            type='text'
                            value={price}
                        />
                    </div>

                    <div>
                        <label>Product Description: </label>
                            {errors?.description && (
                                <span style={{color: "red"}}>{errors.description.message}</span>
                            )}
                        <input onChange={(e) => {
                            setDescription(e.target.value)
                            }}
                            type='text'
                            value={description}
                        />
                    </div>
                    <button>Update</button>
                </form>
        </div>
    )
}

export default EditProduct