import React, {useState} from 'react'

class CounterState {
    public count: number
    constructor(private initialValue: number = 0) {
        this.count = initialValue
    }
    public inc() {
        this.count = this.count + 1
    }
}

export function Counter() {
    const [counter, ] = useState(new CounterState())
    counter.inc()
    return <div>-{counter.count}-</div>
}