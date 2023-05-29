import { useAppDispatch, useAppSelector } from 'app/hooks'
import { type FC, useLayoutEffect } from 'react'
import { Loader } from 'widgets/Loader'
import { ErrorPlug } from 'widgets/ErrorPlug'
import classes from './style.module.scss'
import { PostsList } from 'entities/Posts/ui/PostsList'
import { PostsFilters } from 'widgets/PostsFilters'
import { PostsPagination } from 'widgets/PostsPagination'
import { changeSplitedPosts, fetchPostsAsync } from 'app/store/slices/mainSlice'
import { splitPosts } from 'entities/Posts/helpers/splitPosts'

export const Main: FC = () => {
    const posts = useAppSelector(state => state.main.posts)
    const isPostFetching = useAppSelector(state => state.main.isPostFetching)
    const postFetchingError = useAppSelector(state => state.main.postFetchingError)

    const splitedPosts = useAppSelector(state => state.main.splitedPosts)

    const displayedPostsCount = useAppSelector(state => state.main.displayedPostsCount)
    const activePaginationIndex = useAppSelector(state => state.main.activePaginationIndex)

    const dispatch = useAppDispatch()

    useLayoutEffect(() => {
        if (!posts) {
            dispatch(fetchPostsAsync())
        } else {
            const splitedPosts = splitPosts(posts, displayedPostsCount)
            dispatch(changeSplitedPosts(splitedPosts))
        }
    }, [])

    return (
        <div className={ classes.postsPage }>
            {
                posts && splitedPosts
                    ? (
                        <>
                            <PostsFilters />
                            <div className={ classes.pagination }>
                                <PostsPagination />
                            </div>
                            <div className={ classes.list }>
                                <PostsList posts={ splitedPosts[activePaginationIndex] } />
                            </div>
                        </>
                    )
                    : isPostFetching
                        ? <Loader />
                        : postFetchingError
                            ? <ErrorPlug message={ postFetchingError } />
                            : ''
            }
        </div>
    )
}
