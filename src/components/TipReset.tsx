import * as React from 'react';
import {useDispatch} from "react-redux";
import {ActionTypes} from "../store/actions";


export const TipReset = () => {
    const dispatch = useDispatch();

    return (
        <button
            className='text-center text-3xl border rounded-lg bg-gray-800 w-full text-white uppercase shadow-lg'
            onClick={() => dispatch({type: ActionTypes.Reset})}>
            RESET
        </button>
    )
}