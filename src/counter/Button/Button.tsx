import React from "react";
import './Button.css'

type ButtonType = {
    title: string
    disabled: boolean
    callBack: () => void
}

export const Button = ({title, disabled, callBack}: ButtonType) => {
    debugger
    return (
        <>
            <button
                onClick={callBack}
                disabled={disabled}
                className='button'
            >
                {title}
            </button>
        </>
    )
}