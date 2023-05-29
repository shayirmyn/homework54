import React from 'react';

interface ITries {
    tries: number,
}

const Tries: React.FC<ITries> = props => {
    return (
        <div>
            <h3>Tries: {props.tries}</h3>
        </div>
    );
};

export default Tries;