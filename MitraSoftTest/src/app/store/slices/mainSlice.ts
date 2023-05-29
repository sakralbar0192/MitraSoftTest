import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit'
import { ICommentItem } from 'entities/Comments/types'
import { splitPosts } from 'entities/Posts/helpers/splitPosts'
import { IPostItem } from 'entities/Posts/types'
import { IUserItem } from 'entities/Users/types'
import { DEFAULT_ERROR_MESSAGE } from 'shared/consts'

export interface IUserHistory {
    user: IUserItem
    posts: IPostItem[]
}

export interface IPostHistory {
    postId: number
    comments: ICommentItem[]
}

export interface IMainSliceInitialState {
    isPostFetching?: boolean
    postFetchingError?: string

    isUserFetching?: boolean
    userFetchingError?: string

    isUserPostsFetching?: boolean
    userPostsFetchingError?: string

    posts?: IPostItem[]
    activeUser?: IUserItem
    activeUserPosts?: IPostItem[]

    usersHistory: IUserHistory[]
    postsHistory: IPostHistory[]

    splitedPosts?: IPostItem[][]
    activePaginationIndex: number,
    displayedPostsCount: number
}

const initialState: IMainSliceInitialState = {
    usersHistory: [],
    postsHistory: [],

    activePaginationIndex: 0,
    displayedPostsCount: 10
}

const name = 'main'

export const fetchPostsAsync = createAction(`${name}/fetchPostsAsync`)
export const fetchUserAsync = createAction<number>(`${name}/fetchUserAsync`)
export const fetchUserPostsAsync = createAction<number>(`${name}/fetchUserPostsAsync`)

const mainSlice = createSlice({
    name,
    initialState,
    reducers: {
        changeActivePaginationIndex: (state, action: PayloadAction<number>) => {
            return {
                ...state,
                activePaginationIndex: action.payload
            }
        },
        changeSplitedPosts: (state, action: PayloadAction<IPostItem[][]>) => {
            return {
                ...state,
                splitedPosts: action.payload
            }
        },
        fetchPosts: (state) => {
            return {
                ...state,
                isPostFetching: true,
                postFetchingError: '',
            }
        },
        fetchPostsSucceeded: (state, action: PayloadAction<IPostItem[]>) => {
            const splitedPosts = splitPosts(action.payload, state.displayedPostsCount)

            return {
                ...state,
                posts: action.payload,
                splitedPosts,
                isPostFetching: false,
                postFetchingError: '',
                activePaginationIndex: 0,
            }
        },
        fetchPostsFailed: (state, action: PayloadAction<string>) => {
            const message = action.payload || DEFAULT_ERROR_MESSAGE

            return {
                ...state,
                isPostFetching: false,
                postFetchingError: message
            }
        },
        setActiveUser: (state, action: PayloadAction<IUserItem>) => {
            return {
                ...state,
                activeUser: action.payload,
                isUserFetching: false,
                userFetchingError: ''
            }
        },
        fetchUser: (state) => {
            return {
                ...state,
                isUserFetching: true,
                userFetchingError: '',
                activeUser: undefined
            }
        },
        fetchUserFailed: (state, action: PayloadAction<string>) => {
            const message = action.payload || DEFAULT_ERROR_MESSAGE

            return {
                ...state,
                isUserFetching: false,
                userFetchingError: message,
                activeUser: undefined
            }
        },
        setActiveUserPosts: (state, action: PayloadAction<IPostItem[]>) => {
            return {
                ...state,
                activeUserPosts: action.payload,
                isUserPostsFetching: false,
                userPostsFetchingError: ''
            }
        },
        fetchUserPosts: (state) => {
            return {
                ...state,
                isUserPostsFetching: true,
                userPostsFetchingError: '',
                activeUserPosts: undefined
            }
        },
        fetchUserPostsFailed: (state, action: PayloadAction<string>) => {
            const message = action.payload || DEFAULT_ERROR_MESSAGE

            return {
                ...state,
                isUserPostsFetching: false,
                userPostsFetchingError: message
            }
        },
        setUsersInfo: (state, action: PayloadAction<IUserHistory[]>) => {
            return {
                ...state,
                usersHistory: action.payload
            }
        },
        setPostsHistory: (state, action: PayloadAction<IPostHistory[]>) => {
            return {
                ...state,
                postsHistory: action.payload
            }
        },
    }
})

export const {
    changeActivePaginationIndex,
    changeSplitedPosts,
    fetchPosts,
    fetchPostsSucceeded,
    fetchPostsFailed,
    setActiveUser,
    fetchUser,
    fetchUserFailed,
    setActiveUserPosts,
    fetchUserPosts,
    fetchUserPostsFailed,
    setUsersInfo,
    setPostsHistory
} = mainSlice.actions

export default mainSlice.reducer
