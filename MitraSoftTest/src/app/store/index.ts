import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/rootSaga'
import mainSlice from './slices/mainSlice'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        main: mainSlice
    },
    middleware: ( getDefaultMiddleware ) => getDefaultMiddleware({ thunk: false }).concat( sagaMiddleware ),
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
