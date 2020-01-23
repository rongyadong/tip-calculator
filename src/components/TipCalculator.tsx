import * as React from 'react'
import {TipInput} from './TipInput'
import {TipReset} from './TipReset'
import {TipResult} from './TipResult'

export const TipCalculator = () => {
    return (
        <>
            <TipInput/>

            <TipReset/>

            <TipResult/>
        </>
    )
}
