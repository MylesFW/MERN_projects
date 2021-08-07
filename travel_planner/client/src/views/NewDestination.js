import React, { useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios'

const NewDestination = (props) => {
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

    const handleNewDestinationSubmit = (event) => {
        event.preventDefault();

        const newDestination = {
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
            .post('http://localhost:5000/api/destinations', newDestination)
            .then((res) => {
                console.log(res)
                navigate("/destinations")
                
            })
            .catch((err) => {
                console.log(err)
            })
        };
    
    return (
    <div className="w-50 p-4 rounded mx-auto shadow">
        <h3 className="text-center">All Destinations</h3>
            <form onSubmit={(event) => { 
                handleNewDestinationSubmit(event) 
                }}>

{/* setLocation */}

                <div className="form-group">
                    <label className="h6">Location</label>
                    <input 
                        onChange={(event) => {
                            setLocation(event.target.value)
                        }}
                        type="text"
                        className="form-control">
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
                        className="form-control">
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
                        className="form-control">
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
                <button className="btn btn-sm btn-outline-success">Submit</button>
        </form>
    </div>
    )
}

export default NewDestination