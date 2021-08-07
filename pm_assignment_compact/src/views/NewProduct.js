import React, { useState, useEffect } from "react"
import axios from 'axios'
import { navigate } from '@reach/router'
import { Link } from '@reach/router'

const NewProduct = (props) => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [products, setProducts] = useState([])


    const [errors, setErrors] = useState(null)

    const handleNewProductSubmit = (event) => {
        event.preventDefault()

        const newProduct = {
            title: title,
            price: price,
            description: description
        }

        axios.post('http://localhost:5000/api/products', newProduct)
            .then((res) => {
                navigate('/products/' + res.data._id + '/edit')
            })
            .catch((err) => {
                console.log(err)
                setErrors(err.response?.data?.errors)
            })
        }
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//used for retreiving all products listed along the bottom
    useEffect (() => {
        axios.get('http://localhost:5000/api/products')
        .then((res) => {
            setProducts(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const handleDelete = (delId) => {
    axios.delete('http://localhost:5000/api/products/' + delId)
    .then((res) => {
        const filteredProducts = products.filter((product) => {
            return product._id !== delId
        })
        setProducts(filteredProducts)
    })
    .catch((err) => {
        console.log(err)
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
                        />
                    </div>
                    <button>Add Product</button>
                </form>

            <div>
                <h3>Product List: </h3>
                {products.map((product) => {
                return (
                    <div key={product._id}>
                        <p><Link to={ '/products/' + product._id + '/edit'}>{product.title}</Link></p>
                        <button onClick={(e) => {
                            handleDelete(product._id)
                            }}
                        >Delete</button>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default NewProduct