import { configureStore } from '@reduxjs/toolkit'
import postsSlice from './slices/postsSlice'
import createSagaMiddleware from 'redux-saga'
import usersSlice from './slices/usersSlice'
import rootSaga from './sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        posts: postsSlice,
        users: usersSlice

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
