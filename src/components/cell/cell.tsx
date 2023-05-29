import React from 'react';

interface ICell  {
    hasItem: boolean,
    clicked: boolean,
    key: string
    onCellClick: React.MouseEventHandler,
}

const Cell: React.FC<ICell> = props => {

    const cell: React.CSSProperties = {
        width: "30px",
        height: "30px",
        margin: "1px",
        background: "#468798",
    }

    if (props.clicked) {
        cell.background = "gray";
        if (props.hasItem) {
            cell.background = "green";
        }
    }

    return (
        <div style={cell} onClick={props.onCellClick}></div>
    );
};

export default Cell;