import React from 'react';

const List = (props) => {
    const { newListItem, setListItems, listItems, indexPosition } = props;

        const onClick = () => {
            setListItems(() => {
                return listItems.filter(newListItem => listItems.indexOf(newListItem) !== indexPosition)
            })
        }
        const onChange = () => {
            listItems[indexPosition].completed = !listItems[indexPosition].completed;
            setListItems([...listItems]);
            }
        

    return (
        <div>
            <form onSubmit={ event => event.preventDefault() }>
                <tr style={{display: 'flex', alignItems: 'center'}}>
                    <td style={{marginLeft: '10px', marginRight: '10px', width: '80%'}}>
                    {
                        newListItem.completed ?
                        <span style={{color: 'silver',  textDecoration: 'line-through', fontStyle: 'italic'}}>{newListItem.value}</span> : <span>{newListItem.value}</span>
                    }
                    </td>
                    <td style={{width: '25%', fontSize: 15, color: 'silver', fontStyle: 'italic'}}>completed?<input onChange={onChange} htmlFor="checkbox" type="checkbox" checked={newListItem.completed}></input></td>
                    <td style={{ width: '15%', display: 'flex', alignItems: 'center'}}><button onClick={onClick}>Delete</button></td>
                </tr>
            </form><hr></hr>
        </div>
    )
}
export default List;