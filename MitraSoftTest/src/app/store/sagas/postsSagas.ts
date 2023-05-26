import { call, put, takeLatest } from 'redux-saga/effects'
import { IGetAllPostsResponse, getAllPosts } from 'app/api/getAllPosts'
import { fetchPostsAsync, requestPosts, requestPostsFailed, requestPostsSucceeded } from '../slices/postsSlice'
import { DEFAULT_ERROR_MESSAGE } from 'shared/consts'

function* fetchPosts() {
    try {
        yield put(requestPosts())
        const response: IGetAllPostsResponse = yield call(getAllPosts)
        yield new Promise(res=> setTimeout(() => res(true), 500))
        if (response.isSucceeded) {
            yield put(requestPostsSucceeded(response.data || []))
        } else {
            yield put(requestPostsFailed(response.message || DEFAULT_ERROR_MESSAGE))
        }

    } catch (e) {
        yield put(requestPostsFailed(DEFAULT_ERROR_MESSAGE))
    }
}

function* fetchPostsSaga() {
    yield takeLatest(fetchPostsAsync, fetchPosts)
}

export default fetchPostsSaga
