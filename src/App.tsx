import React, {useState} from 'react';
import './App.css';

const App = () => {

    type Items = {
        hasItem: boolean,
        clicked: boolean,
    };

    const createItems = () => {

        const itemsArray: Items[] = [];

        for (let i = 0; i < 36; i++) {
            const gameItems = {
                hasItem: false,
                clicked: false,
            };

            itemsArray.push(gameItems);
        }
        const trueItem = Math.floor(Math.random() * itemsArray.length);
        itemsArray[trueItem].hasItem = true;

    };

    const [items, setItems] = useState(createItems());

    return (
        <div className="App">

        </div>
    );
};

export default App;
