import { useEffect, useState } from 'react';
import axios from 'axios'

const Destination = (props) => {
    const [destination, setDestination] = useState(null)

    useEffect(() => {
        axios
        .get("http://localhost:5000/api/destinations" + props.id)
        .then((res) => {
            console.log(res)
            setDestination(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [props.id])

    if (destination === null) {
        return "Page Loading..."
    }

    return (
        <div className="w-100 mx-auto shadow mb-4 rounded border p-4">

            <h4>
                {destination.location}
            </h4>
            <p>{destination.description}</p>
            <h5>Travel Seasons:</h5>
            <ul className="list-group">
                {/* {destination.summer ? <li>Summer</li>} : null*/}
                {destination.summer && <li className="list-group-item">Summer</li>}
                {destination.fall && <li className="list-group-item">Fall</li>}
                {destination.winter && <li className="list-group-item">Winter</li>}
                {destination.spring && <li className="list-group-item">Spring</li>}
            </ul>

{/* using && is saying if input === X then do this. Turnary with more than 2 */}

            {destination.srcType === "img" && (
                <img 
                    src={destination.src} 
                    alt={destination.location} 
                    width="100%"
                    className="shadow rounded" 
                />
            )}

            {destination.srcType === "Google Maps Embend" && (
                <iframe
                    src={destination.src} 
                    title={destination.location}
                    width="100%" 
                    height="800" 
                    allowFullScreen={true}
                    loading="lazy"
                    className="shadow rounded" 
                ></iframe>
            )}

            {destination.srcType === "YouTube Embend" && (
                <iframe
                    src={destination.src} 
                    title={destination.location}
                    width="100%" 
                    height="800"
                    frameborder="0" 
                    className="" 
                    allow="accelerometer; auto-play; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen={true}
                    className="shadow rounded"
                ></iframe>
            )}

            <div>
                <button >Delete</button>
            </div>
        </div>
    )
};

export default Destination;