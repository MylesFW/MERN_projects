import React, { useEffect, useState } from "react"
import axios from 'axios'
import { Link } from '@reach/router'

const Authors = (props) => {
    const [authors, setAuthors] = useState([])
    
    useEffect (() => {
        axios.get('http://localhost:5000/api/authors')
        .then((res) => {
            setAuthors(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    const handleDelete = (delId) => {
        axios.delete('http://localhost:5000/api/authors/' + delId)
        .then((res) => {
            const filteredAuthors = authors.filter((author) => {
                return author._id !== delId
            })
            setAuthors(filteredAuthors)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <div>
            <h3>Author List: </h3>
            <p><Link to='/new'>Add New Author</Link></p>

            {authors.map((author) => {
                return (
                    <div key={author._id}>

                    <div>
                        {author.name} {' | '}
                        <Link to={'/edit/' + author._id}><button>Edit</button></Link> {' | '}
                        <button onClick={(e) => {
                            handleDelete(author._id)
                            }}>Delete</button></div>
                    </div>
                )
            })}

        </div>
    )
}

export default Authors