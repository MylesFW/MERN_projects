import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Pokemon = props => {
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then (response => {
            setPokemonList(response.data.results);
        })
        .catch((error) => {
            console.log(error)
        })
    }) // empty array prevents useEffect from running the everytime the is anychange to the API)


    return (
        <ui>
            <div>{pokemonList.length > 0 && pokemonList.map((pokemon, index) => {
                return (<li key = {index}>{pokemon.name}</li>)
            })}</div>
        </ui>
    )
}
export default Pokemon
