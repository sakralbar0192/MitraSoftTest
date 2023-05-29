import { call, put, takeLatest } from 'redux-saga/effects'
import { IGetAllPostsResponse, getAllPosts } from 'app/api/getAllPosts'
import { DEFAULT_ERROR_MESSAGE } from 'shared/consts'
import { fetchPosts, fetchPostsAsync, fetchPostsFailed, fetchPostsSucceeded } from '../slices/mainSlice'

function* asyncFetchPosts() {
    try {
        yield put(fetchPosts())
        const response: IGetAllPostsResponse = yield call(getAllPosts)
        yield new Promise(res=> setTimeout(() => res(true), 500))
        if (response.isSucceeded) {
            yield put(fetchPostsSucceeded(response.data || []))
        } else {
            yield put(fetchPostsFailed(response.message || DEFAULT_ERROR_MESSAGE))
        }

    } catch (e) {
        yield put(fetchPostsFailed(DEFAULT_ERROR_MESSAGE))
    }
}

export function* fetchPostsSaga() {
    yield takeLatest(fetchPostsAsync, asyncFetchPosts)
}
