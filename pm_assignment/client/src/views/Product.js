import React, { useEffect, useState } from "react"
import axios from 'axios'

const Product = (props) => {
    const [product, setProduct] = useState(null)

    useEffect(() => {
        axios.get('http://localhost:5000/api/products/' + props.id)
        .then((res) => {
            setProduct(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [props.id])

    if (product === null) {
        return "Loading Product Information..."
    }

    return (
        <div>
            <h2>Product Details: </h2>
            <div>
                <p>{product.title}</p>
                <p>${product.price}</p>
                <p>{product.description}</p>
            </div>
        </div>
    )
}

export default Product