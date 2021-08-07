import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios'

const EditDestination = (props) => {
    const [location, setLocation] = useState("")
    const [description, setDescription] = useState("")
    const [src, setSrc] = useState("")

    // select menu
    const [srcType, setSrcType] = useState("img")

    // checkboxes
    const [summer, setSummer] = useState(false)
    const [winter, setWinter] = useState(false)
    const [fall, setFall] = useState(false)
    const [spring, setSpring] = useState(false)

    useEffect(() => {
        axios
        .get("http://localhost:5000/api/destinations/" + props.id)
        .then((res) => {
            console.log(res)
            setLocation(res.data.location)
            setDescription(res.data.description)
            setSrc(res.data.src)
            setSrcType(res.data.srcType)
            setSummer(res.data.summer)
            setFall(res.data.fall)
            setWinter(res.data.winter)
            setSpring(res.data.spring)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [props.id])

    const handleEditDestinationSubmit = (event) => {
        event.preventDefault();

        const editedDestination = {
            location: location,
            description: description,
            src: src,
            srcType: srcType,
            summer: summer,
            fall: fall,
            winter: winter,
            spring: fall,
        };

        axios
            .put(`http://localhost:5000/api/destinations/${props.id}`, editedDestination)
            .then((res) => {
                console.log(res)
                navigate("/destinations/" + props.id)
                
            })
            .catch((err) => {
                console.log(err)
            })
        };
    
    return (
    <div className="w-50 p-4 rounded mx-auto shadow">
        <h3 className="text-center">All Destinations</h3>
            <form onSubmit={(event) => { 
                handleEditDestinationSubmit(event) 
                }}>

{/* setLocation */}

                <div className="form-group">
                    <label className="h6">Location</label>
                    <input 
                        onChange={(event) => {
                            setLocation(event.target.value)
                        }}
                        type="text"
                        className="form-control"
                        value={location}>
                            
                    </input>
                </div>

{/* setDescription */}

                <div className="form-group">
                    <label className="h6">Description</label>
                    <input 
                        onChange={(event) => {
                            setDescription(event.target.value)
                        }}
                        type="text"
                        className="form-control"
                        value={description}>
                    </input>
                </div>

{/* setSrc */}

                <div className="form-group">
                    <label className="h6">Media URL</label>
                    <input 
                        onChange={(event) => {
                            setSrc(event.target.value)
                        }}
                        type="text"
                        className="form-control"
                        value={src}>
                    </input>
                </div>

{/* setSrcType */}

                <div className="form-group">
                    <label className="h6">Media Type</label>
                    <select 
                        onChange={(event) => {
                            setSrcType(event.target.value)
                        }}
                        type="text"
                        className="form-control"
                        value={srcType}
                    >
                        <option value="img">Image</option>
                        <option value="Google Maps Embed">Google Maps</option>
                        <option value="YoutTube Embed">Youtube</option>
                    </select>
                </div>

{/* checkboxes */}

            <h5>Travel Seasons</h5>
                <div className="form-group">
                    <input 
                        onChange={(event) => {
                            setSummer(event.target.checked)
                        }}
                        checked={summer}
                        type="checkbox"
                        className="form-check-input"
                        style={{ marginRight: "10px" }}
                        >
                    </input>
                    <label className="h6">Summer</label>
                </div>

                <div className="form-group">
                    <input 
                        onChange={(event) => {
                            setFall(event.target.checked)
                        }}
                        checked={fall}
                        type="checkbox"
                        className="form-check-input"
                        style={{ marginRight: "10px" }}
                        >
                    </input>
                    <label className="h6">Fall</label>
                </div>

                <div className="form-group">
                    <input 
                        onChange={(event) => {
                            setWinter(event.target.checked)
                        }}
                        checked={winter}
                        type="checkbox"
                        className="form-check-input"
                        style={{ marginRight: "10px" }}
                        >
                    </input>
                    <label className="h6">Winter</label>
                </div>

                <div className="form-group">
                    <input 
                        onChange={(event) => {
                            setSpring(event.target.checked)
                        }}
                        checked={spring}
                        type="checkbox"
                        className="form-check-input"
                        style={{ marginRight: "10px" }}
                        >
                    </input>
                    <label className="h6">Spring</label>
                </div>
                <button className="btn btn-sm btn-outline-success">Save Changes</button>
        </form>
    </div>
    )
}

export default EditDestination