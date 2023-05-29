import React, {ReactEventHandler} from "react";

interface IBtnReset {
    reset: ReactEventHandler;
}

const Button: React.FC<IBtnReset> = (props) => {
    return (
        <div>
            <button className="button-50" role="button" onClick={props.reset}>reset</button>
        </div>
    );
}

export default Button;