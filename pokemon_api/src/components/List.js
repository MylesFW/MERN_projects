import React, { useEffect, useState } from 'react';

const Pokemon = props => {
    const [state, setState] = useState([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(response => response.json())
            .then(response => setState(response.results))
            .catch(err => {
                console.log(err);
            })
    
      }, []) // empty array prevents useEffect from running the everytime the is anychange to the API)


    return (
        <ui>
            <div>{state.length > 0 && state.map((pokemon, index) => {
                    return (<li key = {index}>{pokemon.name}</li>)
            })}</div>
        </ui>
    )
}
export default Pokemon
