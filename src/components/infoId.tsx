import React from 'react';
import {RouteComponentProps} from "react-router";

const InfoIdComponent = (props: RouteComponentProps) => {
    console.log('props infoid', props)

    const params: Record<string, string> = props.match.params
    return (
        <div>
            is infoId - {params.n} component
        </div>
    )
}

export default InfoIdComponent