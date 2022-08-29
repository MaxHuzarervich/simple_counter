import React, {ChangeEvent} from "react";
import '../Counter/Counter.css'
import {Button} from "../Button/Button";
import './BlockSettings.css'

type BlockSettingType = {
    ChangeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    ChangeStartValue: (e: ChangeEvent<HTMLInputElement>) => void
    maxValue: number
    startValue: number
    SetStartValue: () => void
}

export const BlockSettings = ({
                                  ChangeMaxValue,
                                  ChangeStartValue,
                                  maxValue,
                                  startValue,
                                  SetStartValue
                              }: BlockSettingType) => {

    return (
        <div className='counter'>
            <div className={'settings'}>
                <div>
                    <span>max value:</span>
                    <input onChange={ChangeMaxValue} value={maxValue} type='number'/>
                </div>
                <div>
                    <span>start value:</span>
                    <input onChange={ChangeStartValue} value={startValue} type='number'/>
                </div>
            </div>
            <div className={'buttons'} style={{justifyContent: 'center', alignItems: 'center'}}>
                <div className={startValue >= maxValue ? 'buttonDisabled' : 'button'}>
                    <Button title='Set' disabled={maxValue === startValue} callBack={SetStartValue}/>
                </div>
            </div>
        </div>
    )
}