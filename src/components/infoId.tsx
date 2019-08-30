import React from 'react';
import { RouterView, WithRoute } from '../route';

const InfoIdComponent = (props: WithRoute<any>) => {
    const params: Record<string, string> = props.route.match.params

    return (
        <div style={{border: "1px solid green", padding: "10px"}}>
            is infoId - {params.id} component
            <RouterView route={props.route} store={props.store}/>
        </div>
    )
}

export default InfoIdComponent