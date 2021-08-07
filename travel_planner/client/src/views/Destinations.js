import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from '@reach/router'

const Destinations = (props) => {
    const [destinations, setDestinations] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/api/destinations")
            .then((res) => {
                console.log(res)
                setDestinations(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const handleDelete = (id) => {
        axios
            .delete("http://localhost:5000/api/destinations/" + id)
            .then((res) => {
                console.log(res)
                const filteredDestinations = destinations.filter((dest) => {
                    return dest._id !== id
                })
                setDestinations(filteredDestinations)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
    <div className="w-50 mx-auto text-center">
        <h2>Travel Destinations</h2>

        {destinations.map((dest) => {
            return (
                <div key={dest._id} className="w-50 mx-auto text-center">
                    <h4>
                        <Link to={"/destinations/" + dest._id}>{dest.location}</Link>
                    </h4>
                    <p>{dest.description}</p>
                    <h5>Travel Seasons:</h5>
                    <ul className="list-group">
                        {/* {dest.summer ? <li>Summer</li>} : null*/}
                        {dest.summer && <li className="list-group-item">Summer</li>}
                        {dest.fall && <li className="list-group-item">Fall</li>}
                        {dest.winter && <li className="list-group-item">Winter</li>}
                        {dest.spring && <li className="list-group-item">Spring</li>}
                    </ul>
                    <div>
                        <button onClick={(event) => {
                            handleDelete(dest._id)
                        }} className="btn btn-sm btn-outline-danger">Delete</button>
                        <Link to={"/destinations/" + dest._id + "/edit"} className="btn btn-sm btn-outline-warning mx-1">Edit</Link>
                    </div>
                </div>
            )})
        }
    </div>
    )
};

export default Destinations;