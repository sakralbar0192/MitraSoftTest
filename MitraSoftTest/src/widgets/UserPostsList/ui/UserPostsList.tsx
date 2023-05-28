import { useAppDispatch, useAppSelector } from 'app/hooks'
import { fetchUserPostsAsync, setActiveUserId, setUserPosts } from 'app/store/slices/usersSlice'
import { PostsList } from 'entities/Posts/ui/PostsList'
import { useEffect, type FC } from 'react'
import { ErrorPlug } from 'widgets/ErrorPlug'
import { Loader } from 'widgets/Loader'

interface IUserPostsListProps {
    userId: number
}

export const UserPostsList: FC<IUserPostsListProps> = ({ userId }) => {
    const isPostsRequested =  useAppSelector(state => state.posts.isPostsRequested)
    const isLoading = useAppSelector(state => state.users.isLoading)
    const isError = useAppSelector(state => state.users.isError)
    const allPosts = useAppSelector(state => state.posts.posts)
    const activeUserId = useAppSelector(state => state.users.activeUserId)
    const activeUserPosts = useAppSelector(state => state.users.activeUserPosts)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setActiveUserId(userId))

        if (isPostsRequested && allPosts) {
            const userPosts = [...allPosts].filter(post => post.userId === userId)
            dispatch(setUserPosts(userPosts))
        } else {
            dispatch(fetchUserPostsAsync(userId))
        }
    }, [])

    return (
        <>
            {
                isLoading
                    ? <Loader />
                    : isError
                        ? <ErrorPlug />
                        : activeUserId && activeUserPosts
                            ? <PostsList posts={ activeUserPosts }/>
                            : ''
            }
        </>
    )
}
