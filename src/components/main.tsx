import React from 'react';
import { RouterView, WithRoute } from '../route';

const MainComponent = (props: WithRoute<any>) => {
    return (
        <div style={{border: "1px solid yellow", padding: "10px"}}>
            is main component
            <RouterView route={props.route} store={props.store}/>
        </div>
    )
}

export default MainComponent