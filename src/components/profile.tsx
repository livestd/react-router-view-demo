import React from 'react';
import {Counter} from "./Counter";
import {observer} from "mobx-react";
import {RouteComponentProps} from "react-router";

const ProfileComponent = observer((props: RouteComponentProps) => {
    console.log(props.location.state)
    const {count} = props.location.state || {count: 0}
    return (
        <div>
            <Counter/>
            is profile component - {count}
        </div>
    )
})

export default ProfileComponent