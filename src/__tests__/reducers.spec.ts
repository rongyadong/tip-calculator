import {initialState, rootReducer as reducer} from "../store/reducers";
import {ActionTypes} from "../store/actions";

describe('reducer tests', () => {
    const testState = initialState;

    describe('reducer tests', () => {
        it('should return initial state', () => {
            expect(reducer(undefined, {type: ActionTypes.Reset})).toEqual(testState);
        });

        it('should set bill to number', () => {
            const payload = 100;
            expect(
                reducer(testState, {
                    type: ActionTypes.BillChange,
                    payload: String(payload),
                }).bill,
            ).toEqual(payload);
        });

        it('should set bill to decimal number', () => {
            const payload = 13.14;
            expect(
                reducer(testState, {
                    type: ActionTypes.BillChange,
                    payload: String(payload),
                }).bill,
            ).toEqual(payload);
        });

        it('should not be able to set string', () => {
            const payload = 'a';
            expect(
                reducer(testState, {
                    type: ActionTypes.BillChange,
                    payload: String(payload),
                }).bill,
            ).not.toEqual(payload);
        });

        it('should set percentage to number', () => {
            const payload = 100;
            expect(
                reducer(testState, {
                    type: ActionTypes.PercentageChange,
                    payload: String(payload),
                }).percentage,
            ).toEqual(payload);
        });

        it('should set bill to decimal number', () => {
            const payload = 13.14;
            expect(
                reducer(testState, {
                    type: ActionTypes.PercentageChange,
                    payload: String(payload),
                }).percentage,
            ).toEqual(payload);
        });

        it('should not be able to set string', () => {
            const payload = 'Yadong Rong';
            expect(
                reducer(testState, {
                    type: ActionTypes.PercentageChange,
                    payload: String(payload),
                }).percentage,
            ).not.toEqual(payload);
        });

        it('should increment split', () => {
            expect(
                reducer(testState, {type: ActionTypes.SplitIncrement}).split,
            ).toEqual(2);
        });

        it('should decrement split', () => {
            expect(
                reducer(
                    {
                        ...testState,
                        split: 3,
                    },
                    {type: ActionTypes.SplitDecrement},
                ).split,
            ).toEqual(2);
        });

        it('should not decrement split under 1', () => {
            expect(
                reducer(testState, {type: ActionTypes.SplitDecrement}).split,
            ).toEqual(1);
        });

        it('should reset state', () => {
            expect(reducer(testState, {type: ActionTypes.Reset})).toEqual(testState);
        });
    });
});