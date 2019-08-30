import React, { useContext } from 'react';
import {Counter} from "./Counter";
import {observer} from "mobx-react";
import {RouteComponentProps} from "react-router";
import { rootContext } from '../stores';

const ProfileComponent = observer((props: RouteComponentProps) => {
    const { routerStore } = useContext(rootContext)
    const { actualRoute } = routerStore
    const {count} = actualRoute.location.state || {count: 0}

    return (
        <div style={{border: "1px solid blue", padding: "10px"}}>
            <Counter/>
            is profile component - {count}
        </div>
    )
})

export default ProfileComponent