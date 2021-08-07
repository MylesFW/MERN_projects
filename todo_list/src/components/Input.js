import React, { useState } from 'react';

const Input = (props) => {
    const {listItems, setListItems} = props;


    let newListItem = {
        value : "",
        completed : false
    }

    const onChange = event => {
        newListItem.value = event.target.value
    }

    const onClick = event => {
        setListItems([...listItems, newListItem]);
        event.target.value = "";
        newListItem = "";
    }

    return (
        <form onSubmit={ event => event.preventDefault() }>
            <div>
                <h1 style={{height: '25px'}}>Your Todo List </h1>
                <button style={{fontWeight: 'bold', marginLeft: '15px', marginRight: '15px', height: '35px', color: 'white', backgroundColor: 'royalblue', borderRadius: '5px' }}type="reset" onClick={onClick}>Add to List</button>
                <label htmlFor="listItems"></label>
                <input onChange={onChange} type="text" name=""></input>
                <hr style={{marginTop: 15, marginBottom: 15}}></hr>
            </div>
        </form>
    );
}
export default Input;