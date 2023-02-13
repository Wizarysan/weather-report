import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers/rootReducer';
import coreSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: [
        sagaMiddleware
    ]
});

sagaMiddleware.run(coreSaga);

export default store;