import React from 'react';
import Carrousel from './Carrousel';
import TimeUntil from './TimeUntil';


const Featured = () => {
    return (
        <div style={{position:'relative'}}>

            <Carrousel/>

            <div className="event_name">
                <div className="wrapper">
                    The End of the Beginning
                </div>
            </div>

            <TimeUntil/>

        </div>
    );
};

export default Featured;