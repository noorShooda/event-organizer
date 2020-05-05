import React from 'react';

import './timeCarte.css';

interface Props {
    time: number;
}

export const TimeCarte: React.FunctionComponent<Props> = (props) => {

    return(
        <div className="timeCarteStyle">
            <p>{props.time}</p>
        </div>
    );
};