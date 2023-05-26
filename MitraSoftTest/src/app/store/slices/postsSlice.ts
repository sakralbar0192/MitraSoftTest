import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit'
import { splitPosts } from 'entities/Posts/helpers/splitPosts'
import { IPostItem } from 'entities/Posts/types'
import { DEFAULT_ERROR_MESSAGE } from 'shared/consts'

export interface postsSliceInitialState {
    posts: IPostItem[]
    splitedPosts: IPostItem[][]
    isPostsRequested: boolean
    isLoading: boolean
    isError: boolean
    message: string
    activePaginationIndex: number,
    displayedPostsCount: number
}

const initialState: postsSliceInitialState = {
    posts: [],
    splitedPosts: [],
    isPostsRequested: false,
    isLoading: false,
    isError: false,
    message: '',
    activePaginationIndex: 0,
    displayedPostsCount: 10
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
                isLoading: true,
                isPostsRequested: true
            }
        },
        requestPostsSucceeded: (state, action: PayloadAction<IPostItem[]>) => {
            return {
                ...state,
                posts: action.payload,
                splitedPosts: splitPosts(action.payload, state.displayedPostsCount),
                isLoading: false,
                activePaginationIndex: 0
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
        changeActivePaginationIndex: (state, action: PayloadAction<number>) => {
            return {
                ...state,
                activePaginationIndex: action.payload
            }
        }
    }
})

export const {
    requestPosts,
    requestPostsFailed,
    requestPostsSucceeded,
    changeActivePaginationIndex
} = postsSlice.actions

export default postsSlice.reducer
