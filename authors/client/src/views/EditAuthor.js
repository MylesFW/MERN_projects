import React, { useEffect, useState } from "react"
import axios from 'axios'
import { Link } from '@reach/router'
import { navigate } from "@reach/router"

const EditAuthor = (props) => {
    const [name, setName] = useState("")
    const [errors, setErrors] = useState(null)


    useEffect (() => {
        axios.get('http://localhost:5000/api/authors/' + props.id)
            .then((res) => {
                setName(res.data.name)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [props.id])

    const handleEditAuthorSubmit = (event) => {
        event.preventDefault()

        const editedAuthor = {
            name: name
        }

        axios.put('http://localhost:5000/api/authors/' + props.id, editedAuthor)
            .then((res) => {
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
                setErrors(err.response?.data?.errors)
            })
        }


    return (
        <div>
            <p><Link to='/'>Home</Link></p>
            <h3>Edit Author: </h3>
                <h5>Name:</h5>
            <form onSubmit={(e) => {
                handleEditAuthorSubmit(e)
                }}>
                <div>
                    {errors?.name && (
                        <span style={{color: "red"}}>{errors.name.message}</span>
                    )}
                    <input onChange={(e) => {
                        setName(e.target.value)
                    }}
                    type='text'
                    value={name}
                    />
                </div>
                <button>Update</button>
            </form>
            <Link to="/"><button>Cancel</button></Link>
        </div>
    )
}

export default EditAuthor