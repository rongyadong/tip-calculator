import {initialState} from "../store/reducers";
import {StoreState} from '../store/index'
import {selectTotal, selectTip, selectSplit, selectPerPerson} from "../store/selectors";


describe('selector tests', () => {
    const testState: StoreState = initialState;

    it('should select correct total', () => {
        expect(selectTotal({...testState, bill: 100, percentage: 10})).toEqual('110.00');
    });

    it('should select correct decimal total', () => {
        expect(selectTotal({...testState, bill: 89.99, percentage: 10})).toEqual('98.99');
    });

    it('should select correct tip', () => {
        expect(selectTip({...testState, bill: 100, percentage: 20})).toEqual('20.00');
    });

    it('should select correct decimal tip', () => {
        expect(selectTip({...testState, bill: 13.14, percentage: 50})).toEqual('6.57');
    });

    it('should select correct rounded total', () => {
        expect(selectTotal({...testState, bill: 89.99, percentage: 25})).toEqual('112.49');
    });

    it('should select correct rounded tip', () => {
        expect(selectTip({...testState, bill: 89.99, percentage: 25})).toEqual('22.50');
    });

    it('should split evenly', () => {
        expect(selectPerPerson({bill: 89.99, percentage: 25, split: 3})).toEqual('37.50');
    });

});