import React, {useState} from 'react';
import GameField from "./components/gameFIeld/gameField";
import {nanoid} from "nanoid";
import './App.css';
import Buttons from "./components/buttons/buttons";

const App = () => {

    type Items = {
        hasItem: boolean,
        clicked: boolean,
        id: string,
    };

    const createItems = () => {
        const itemsArray: Items[] = [];

        for (let i = 0; i < 36; i++) {
            const gameItems = {
                hasItem: false,
                clicked: false,
                id: nanoid(),
            };

            itemsArray.push(gameItems);
        }
        const trueItem = Math.floor(Math.random() * itemsArray.length);
        itemsArray[trueItem].hasItem = true;
        return itemsArray;
    };

    const [items, setItems] = useState(createItems());

    const clickCell = (id: string) => {
        const itemsCopy = [...items];
        const idObject = items.findIndex(object => object.id === id);
        const itemsObject = {...itemsCopy[idObject]};
        itemsObject.clicked = true;
        itemsCopy[idObject] = itemsObject;
        setItems(itemsCopy);
    };

    return (
        <div className="App">
            <GameField items={items} clickCell={clickCell}/>
            <Buttons items={items} clickCell={clickCell} />
        </div>
    );
};

export default App;
