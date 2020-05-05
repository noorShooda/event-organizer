import React from 'react';

import { TimeCarte } from './timeCarte/TimeCarte';
import { showTodayTime } from './timeCarte/helper';

export const HomePage: React.FunctionComponent = () => {
 
    return(
        <div>
            <TimeCarte time={showTodayTime()}/>
        </div>
    );
};