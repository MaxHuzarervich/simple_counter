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

const error = 'Incorrect value!'

export const Counter = ({number, reset, increment, maxValue, startValue}: CounterType) => {

    const conditionForIncButton = number === maxValue || maxValue === startValue || maxValue < 0 || startValue < 0

    const conditionForResetButton = maxValue === startValue || maxValue < 0 || startValue < 0

    const conditionForCurrentNumber = maxValue === startValue || startValue < 0 || maxValue < 0 ? <div className='error'>{error}</div>
        : <div>{number === maxValue ? <div className='error'>{number}</div> : number}</div>

    return (
        <div>
            <div className='counter'>
                <div className='number'>
                    <div>
                        {conditionForCurrentNumber}
                    </div>
                </div>
                <div className='buttons'>
                    <div className={conditionForIncButton ? 'buttonDisabled' : 'button'}>
                        <Button
                            disabled={number === maxValue}
                            callBack={increment}
                            title='Inc'
                        />
                    </div>
                    <div className={conditionForResetButton ? 'buttonDisabled' : 'button'}>
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