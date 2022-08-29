import React, {ChangeEvent, useState} from 'react';
import '././counter/Counter/Counter.css';
import {Counter} from "./counter/Counter/Counter";
import {BlockSettings} from "./counter/BlockSettings/BlockSettings";

function App() {

    let [number, setNumber] = useState(0)

    const Increment = () => setNumber(++number)

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
