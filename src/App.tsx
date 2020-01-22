import React from 'react';
import {Provider} from 'react-redux'
import {store} from './store'
import {TipCalculator} from "./components/TipCalculator";

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <>
                <TipCalculator/>
            </>
        </Provider>
    );
}

export default App;
