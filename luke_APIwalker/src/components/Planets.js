import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Planets = props => {
    const [planetData, setPlanetData] = useState([])

    let URL = "https://swapi.dev/api/planets";

    if (props.id === 'all') {
        URL += "?limit=100"
    } else {
        URL += "/" + props.id
    }

    useEffect(() => {
        axios
        .get(URL)
        .then (response => {
            if (props.id === "all") {
                setPlanetData(response.data.results);
            } else {
                setPlanetData(response.data)
            }
            console.log(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [props.id])


    
    if (props.id === "all") {
        return (
            <ui>
                <div>
                    {planetData.map((planetData, index) => {
                    return (
                        <div key = {index}> <hr></hr>
                            <div>Name: {planetData.name}</div>
                            <div>Climate: {planetData.climate}</div>
                            <div>Environment: {planetData.terrain}</div>
                            <div>Population: {planetData.population}</div>
                        </div>)
                })}</div>
            </ui>
        )
    }

    return (
        <div> <hr></hr>
            <div>Name: {planetData.name}</div>
            <div>Climate: {planetData.climate}</div>
            <div>Environment: {planetData.terrain}</div>
            <div>Population: {planetData.population}</div>
        </div>)
}

export default Planets