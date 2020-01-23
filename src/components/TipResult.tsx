import * as React from 'react';
import {useSelector} from 'react-redux';
import {selectPerPerson, selectSplit, selectTip, selectTotal} from "../store/selectors";

export const TipResult = () => {
    const total = useSelector(selectTotal);
    const tip = useSelector(selectTip);
    const split = useSelector(selectSplit);
    const perPerson = useSelector(selectPerPerson);

    return (
        <div className='border bg-white mt-2 rounded-lg border-gray-800 w-full p-2 uppercase shadow-lg text-teal-600'>
            <div className='flex justify-between'>
                <span>Bill Total</span>
                <span>${total}</span>
            </div>
            <div className='flex justify-between'>
                <span>Tip</span>
                <span>${tip}</span>
            </div>
            {split > 1 && (
                <div className='flex justify-between'>
                    <span>Per Person</span>
                    <span>${perPerson}</span>
                </div>
            )}
        </div>
    );
}