import React from 'react';
import Cell from "../cell/cell";

type Items = {
    hasItem: boolean,
    clicked: boolean,
    id: string,
};
interface IGameField {
    items: Items[],
    clickCell: Function;
}

const GameField: React.FC<IGameField> = props => {

    const everyCell = props.items.map(object => {
        return <Cell hasItem={object.hasItem}
                     clicked={object.clicked}
                     key={object.id} onCellClick={() => props.clickCell(object.id)}
        />
    });

    return (
        <div className="gameField">
            {everyCell}
        </div>
    );
};

export default GameField;