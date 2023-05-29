import React from 'react';
interface IBtnReset {
    clickCell: Function,
}
const Buttons: React.FC<IBtnReset> = props => {
    return (
        <div>
            <button className="button-50" role="button">reset</button>
        </div>
    );
};

export default Buttons;