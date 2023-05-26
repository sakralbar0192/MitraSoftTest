import { useAppDispatch, useAppSelector } from 'app/hooks'
import { fetchPostsAsync } from 'app/store/slices/postsSlice'
import { useEffect, type FC } from 'react'
import { Loader } from 'shared/ui/Loader/ui/Loader'
import { ErrorPlug } from 'widgets/ErrorPlug'
import { PostCard } from 'widgets/PostCard'

export const PostsPage: FC = () => {
    const isLoading = useAppSelector(state => state.posts.isLoading)
    const isError = useAppSelector(state => state.posts.isError)
    const posts = useAppSelector(state => state.posts.posts)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchPostsAsync())
    }, [])

    return (
        <>
            {
                isLoading
                    ? <Loader />
                    : isError
                        ? <ErrorPlug />
                        : posts
                            ? posts.map(post => <PostCard key={ post.id } post={ post } />)
                            : 'nothing to display'
            }
        </>
    )
}
