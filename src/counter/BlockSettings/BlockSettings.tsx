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

    const conditionForMaxValueInput = startValue >= maxValue || startValue < 0 ?
        {border: '2px solid red', backgroundColor: 'red'} : undefined

    const conditionForStartValueInput = maxValue === startValue || maxValue < 0 ?
        {border: '2px solid red', backgroundColor: 'red'} : undefined

    const conditionForButtonDisabled = startValue >= maxValue || startValue < 0 || maxValue < 0 ?
        'buttonDisabled' : 'button'

    return (
        <div className='counter'>
            <div className={'settings'}>
                <div>
                    <span>max value:</span>
                    <input
                        style={conditionForStartValueInput}
                        onChange={ChangeMaxValue}
                        value={maxValue}
                        type='number'/>
                </div>
                <div>
                    <span>start value:</span>
                    <input
                        style={conditionForMaxValueInput}
                        onChange={ChangeStartValue}
                        value={startValue}
                        type='number'/>
                </div>
            </div>
            <div className={'buttons'} style={{justifyContent: 'center', alignItems: 'center'}}>
                <div className={conditionForButtonDisabled}>
                    <Button
                        title='Set'
                        disabled={maxValue === startValue}
                        callBack={SetStartValue}/>
                </div>
            </div>
        </div>
    )
}