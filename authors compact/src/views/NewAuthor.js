import React, { useEffect, useState } from "react"
import axios from 'axios'
import { Link } from '@reach/router'
import { navigate } from "@reach/router"

const NewAuthor = (props) => {
    const [name, setName] = useState("")
    const [errors, setErrors] = useState(null)

//  USEEFFECT WILL DISRUPT THE SERVER
        // useEffect (() => {
        //     axios.get('http://localhost:5000/api/authors')
        //     .then((res) => {
        //         setName(res.data)
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     })
        // })

    const handleNewAuthorSubmit = (event) => {
        event.preventDefault()

        const newAuthor = {
            name: name
        }

        axios.post('http://localhost:5000/api/authors', newAuthor)
            .then((res) => {
                navigate('/edit/' + res.data._id)
            })
            .catch((err) => {
                // console.log(err)
                setErrors(err.response?.data?.errors)
            })
        }


    return (
        <div>
            <p><Link to='/'>Home</Link></p>
            <h3>Add a New Author: </h3>
                <h5>Name</h5>
            <form onSubmit={(e) => {
                handleNewAuthorSubmit(e)
            }}>
                <div>
                    {errors?.name && (
                        <span style={{color: "red"}}>{errors.name.message}</span>
                    )}
                    <input onChange={(e) => {
                        setName(e.target.value)
                    }}
                    type='text'
                    />
                </div>
                <button>Add Author</button>
            </form>
            <Link to="/"><button>Cancel</button></Link>
        </div>
    )
}

export default NewAuthor