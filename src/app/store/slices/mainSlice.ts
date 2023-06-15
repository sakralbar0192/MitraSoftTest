import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface IMainSliceInitialState {
    activePaginationIndex: number,
    codeExampleSourceLinkHref: string
}

const initialState: IMainSliceInitialState = {
    activePaginationIndex: 0,
    codeExampleSourceLinkHref: ''
}

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        changeActivePaginationIndex: (state, action: PayloadAction<number>) => {
            return {
                ...state,
                activePaginationIndex: action.payload
            }
        },
        resetActivePaginationIndex: (state) => {
            return {
                ...state,
                activePaginationIndex: 0
            }
        },
        setCodeExampleSourceLinkHref: (state, action: PayloadAction<string>) => {
            return {
                ...state,
                codeExampleSourceLinkHref: action.payload
            }
        }
    }
})

export const {
    changeActivePaginationIndex,
    resetActivePaginationIndex,
    setCodeExampleSourceLinkHref
} = mainSlice.actions

export default mainSlice.reducer
