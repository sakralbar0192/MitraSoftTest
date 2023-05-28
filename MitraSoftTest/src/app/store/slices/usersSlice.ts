import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit'
import { IPostItem } from 'entities/Posts/types'
import { DEFAULT_ERROR_MESSAGE } from 'shared/consts'

export interface usersSliceInitialState {
    isLoading: boolean
    isError: boolean
    errorMessage: string
    activeUserId: number
    activeUserPosts: IPostItem[]
}

const initialState: usersSliceInitialState = {
    isLoading: false,
    isError: false,
    errorMessage: '',
    activeUserId: 0,
    activeUserPosts: []
}

const name = 'users'

export const fetchUserPostsAsync = createAction<number>(`${name}/fetchPosts`)

const usersSlice = createSlice({
    name,
    initialState: initialState,
    reducers: {
        requestUserPosts: (state) => {
            return {
                ...state,
                isLoading: true
            }
        },
        setUserPosts: (state, action: PayloadAction<IPostItem[]>) => {
            return {
                ...state,
                activeUserPosts: action.payload,
                isLoading: false
            }
        },
        requestUserPostsFailed: (state, action: PayloadAction<string>) => {
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMessage: action.payload || DEFAULT_ERROR_MESSAGE
            }
        },
        setActiveUserId: (state, action: PayloadAction<number>) => {
            return {
                ...state,
                activeUserId: action.payload,
                activeUserPosts: []
            }
        }
    }
})

export const {
    requestUserPosts,
    requestUserPostsFailed,
    setUserPosts,
    setActiveUserId
} = usersSlice.actions

export default usersSlice.reducer
