import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit'
import { IPostItem } from 'entities/Posts/types'
import { DEFAULT_ERROR_MESSAGE } from 'shared/consts'

export interface postsSliceInitialState {
    posts: IPostItem[],
    isLoading: boolean,
    isError: boolean,
    message: string
}

const initialState: postsSliceInitialState = {
    posts: [],
    isLoading: false,
    isError: false,
    message: ''
}

const name = 'posts'

export const fetchPostsAsync = createAction(`${name}/fetchPosts`)

const postsSlice = createSlice({
    name,
    initialState: initialState,
    reducers: {
        requestPosts: (state) => {
            return {
                ...state,
                isLoading: true
            }
        },
        requestPostsSucceeded: (state, action: PayloadAction<IPostItem[]>) => {
            return {
                ...state,
                posts: action.payload,
                isLoading: false
            }
        },
        requestPostsFailed: (state, action: PayloadAction<string>) => {
            return {
                ...state,
                isLoading: false,
                isError: true,
                message: action.payload || DEFAULT_ERROR_MESSAGE
            }
        },
    }
})

export const { requestPosts, requestPostsFailed, requestPostsSucceeded } = postsSlice.actions

export default postsSlice.reducer
