import React, { useEffect, useState } from 'react';
import axios from 'axios'

const People = props => {
    // const {category} = props
    // const {id} = props
    const [peopleList, setPeopleList] = useState([])



    const baseURL = "https://swapi.dev/api/people";
    let URL = baseURL



    if (props.id === 'all') {
        URL += "?limit=100"
    } else {
        URL += "/" + props.id // <line 5>   URL += "/" + id
    }



    useEffect(() => {
        axios
        .get(URL)
        .then (response => {
            if (props.id === "all") {
                setPeopleList(response.data.results);
            } else {
                setPeopleList(response.data)
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
                    {peopleList.map((peopleList, index) => {
                    return (
                        <div key = {index}> <hr></hr>
                            <div>Name: {peopleList.name}</div>
                            <div>Height: {peopleList.height}</div>
                            <div>Gender: {peopleList.gender}</div>
                            <div>DOB: {peopleList.birth_year}</div>
                        </div>)
                })}</div>
            </ui>
        )
    }

    return (
        <div> <hr></hr>
            <div>Name: {peopleList.name}</div>
            <div>Height: {peopleList.height}</div>
            <div>Gender: {peopleList.gender}</div>
            <div>DOB: {peopleList.birth_year}</div>
        </div>)
}

export default People