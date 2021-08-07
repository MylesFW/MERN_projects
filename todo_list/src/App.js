import React, { useState } from 'react';

import Input from './components/Input';
import List from './components/List';

function App() {
  const [listItems, setListItems] = useState([])
  //[listItems, setListItems] must be consistant on Input.js

  return (

    <div className="App" style={{margin: '40px', fontSize: '25px'}}>
      <Input listItems={listItems} setListItems={setListItems}/>

        <table style={{ marginLeft: '15px', width: '100%'}}>
          <th style={{display: 'flex', justifyContent: 'space-evenly'}}>
            <td style={{width: '60%'}}>Task Description</td>
            <td style={{width: '20%'}}>Status</td>
            <td style={{width: '15%'}}>Remove</td>
          </th>
          <hr></hr>
          {listItems.map((newListItem, indexPosition) => (
            <List 
              newListItem={newListItem}
              setListItems={setListItems}
              listItems={listItems}
              indexPosition={indexPosition}/>
            ))
          }

      </table>
    </div>
  );
}

export default App;

