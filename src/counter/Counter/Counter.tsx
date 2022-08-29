import React from 'react'
import './Counter.css'
import {Button} from "../Button/Button";

type CounterType = {
    number: number
    reset: () => void
    increment: () => void
    maxValue: number
    startValue: number
}

const error = 'incorrect value'

export const Counter = ({number, reset, increment, maxValue, startValue}: CounterType) => {
    return (
        <div>
            <div className='counter'>
                <div className='number'>
                    <div>
                        {maxValue === startValue ? <div className='error'>{error}</div> : <div>{number}</div>}
                    </div>
                </div>
                <div className='buttons'>
                    <div className={number === maxValue || maxValue === startValue ? 'buttonDisabled' : 'button'}>
                        <Button
                            disabled={number === maxValue}
                            callBack={increment}
                            title='Inc'
                        />
                    </div>
                    <div className={maxValue === startValue ? 'buttonDisabled' : 'button'}>
                        <Button
                            disabled={number === 0}
                            callBack={reset}
                            title='Res'/>
                    </div>
                </div>
            </div>
        </div>
    )
}