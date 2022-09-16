import React, {ChangeEvent, useEffect, useState} from 'react';
import '././counter/Counter/Counter.css';
import {Counter} from "./counter/Counter/Counter";
import {BlockSettings} from "./counter/BlockSettings/BlockSettings";

function App() {

    let [number, setNumber] = useState<number>(0)

    useEffect(() => {
        let value = localStorage.getItem('counterValue')
        if (value) {
            let newValue = JSON.parse(value)
            setNumber(newValue)
        }

    }, [])

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(number))
    }, [number])

    const Increment = () => {
        setNumber(number + 1)
    }

    const Reset = () => setNumber(0)

    ///////////////////////////////////////////////////////

    let [maxValue, setMaxValue] = useState(1)
    let [startValue, setStartValue] = useState(0)

    const ChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(e.currentTarget.valueAsNumber)
    }

    const ChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(e.currentTarget.valueAsNumber)
    }

    const SetStartValue = () => {
        setNumber(startValue)
        setMaxValue(maxValue)
    }

    return (
        <div className='background-counter'>
            <BlockSettings
                ChangeMaxValue={ChangeMaxValue}
                ChangeStartValue={ChangeStartValue}
                maxValue={maxValue}
                startValue={startValue}
                SetStartValue={SetStartValue}
            />
            <Counter
                startValue={startValue}
                maxValue={maxValue}
                number={number}
                reset={Reset}
                increment={Increment}
            />
        </div>
    );
}

export default App;

export const Num = () => {
    const [value, setValue] = useState(0)
    useEffect(() => {
        debugger
        let valueAsString = localStorage.getItem('Value')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    }, [])
    useEffect(() => {
        debugger
        localStorage.setItem('Value', JSON.stringify(value))
    }, [value])
    const inc = () => setValue(value + 1)

    return (
        <div>
            {value}
            <button onClick={inc}>plus</button>
        </div>
    )
}
