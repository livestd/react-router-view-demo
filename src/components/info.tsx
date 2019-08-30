import React from 'react';
import { RouterView, WithRoute } from '../route';

const InfoComponent = (props: WithRoute<any>) => {
    return (
        <div style={{border: "1px solid black", padding: "10px"}}>
            is INFO component
            <RouterView route={props.route} store={props.store}/>
        </div>
    )
}

export default InfoComponent