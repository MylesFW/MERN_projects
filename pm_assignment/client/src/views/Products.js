import React, { useEffect, useState } from "react"
import axios from 'axios'
import { Link } from '@reach/router'

const Products = (props) => {
    const [products, setProducts] = useState([])
    
    useEffect (() => {
        axios.get('http://localhost:5000/api/products')
        .then((res) => {
            setProducts(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <div>
            <h3>Product List: </h3>
            {products.map((product) => {
                return (
                    <div key={product._id}>
                        <p><Link to={ '/products/' + product._id }>{product.title}</Link></p>
                    </div>
                )
            })}
        </div>
    )
}

export default Products