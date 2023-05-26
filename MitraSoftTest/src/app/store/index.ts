import { configureStore } from '@reduxjs/toolkit'
import postsSlice from './slices/postsSlice'
import createSagaMiddleware from 'redux-saga'
import fetchPostsSaga from './sagas/postsSagas'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        posts: postsSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
})

sagaMiddleware.run(fetchPostsSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// const action = (type) => store.dispatch({ type })
