import { useAppDispatch, useAppSelector } from 'app/hooks'
import { fetchPostsAsync } from 'app/store/slices/postsSlice'
import { useEffect, type FC } from 'react'
import { Loader } from 'shared/ui/Loader'
import { ErrorPlug } from 'widgets/ErrorPlug'
import classes from './style.module.scss'
import { PostsList } from 'entities/Posts/ui/PostsList'
import { PostsFilters } from 'widgets/PostsFilters'
import { PostsPagination } from 'widgets/PostsPagination'

export const PostsPage: FC = () => {
    const isLoading = useAppSelector(state => state.posts.isLoading)
    const isError = useAppSelector(state => state.posts.isError)
    const isPostsRequested = useAppSelector(state => state.posts.isPostsRequested)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchPostsAsync())
    }, [])

    return (
        <div className={ classes.postsPage }>
            {
                isPostsRequested
                    ? isLoading
                        ? <Loader />
                        : isError
                            ? <ErrorPlug />
                            : (
                                <>
                                    <div className={ classes.filters }>
                                        <PostsFilters />
                                    </div>
                                    <div className={ classes.list }>
                                        <PostsList />
                                    </div>
                                    <div className={ classes.pagination }>
                                        <PostsPagination />
                                    </div>
                                </>
                            )
                    : ''
            }
        </div>
    )
}
