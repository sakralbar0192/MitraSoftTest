import { call, put, takeLatest } from 'redux-saga/effects'
import { DEFAULT_ERROR_MESSAGE } from 'shared/consts'
import { fetchUserPostsAsync, requestUserPosts, requestUserPostsFailed, setUserPosts } from '../slices/usersSlice'
import { IGetUserPostsResponse, getUserPosts } from 'app/api/getUserPosts'
import { PayloadAction } from '@reduxjs/toolkit'

function* fetchUserPosts(action: PayloadAction<number>) {
    try {
        yield put(requestUserPosts())
        const response: IGetUserPostsResponse = yield call(getUserPosts, action.payload)
        yield new Promise(res=> setTimeout(() => res(true), 500))
        if (response.isSucceeded) {
            yield put(setUserPosts(response.data || [] ))
        } else {
            yield put(requestUserPostsFailed(response.message || DEFAULT_ERROR_MESSAGE))
        }

    } catch (e) {
        yield put(requestUserPostsFailed(DEFAULT_ERROR_MESSAGE))
    }
}

function* fetchUserPostsSaga() {
    yield takeLatest(fetchUserPostsAsync, fetchUserPosts)
}

export default fetchUserPostsSaga
