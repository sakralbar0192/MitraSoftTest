import { UserCard } from 'entities/Users/ui/UserCard'
import { type FC, useLayoutEffect } from 'react'
import {  Link, useParams } from 'react-router-dom'
import classes from './styles.module.scss'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { IUserHistory, fetchUserAsync, fetchUserPostsAsync, setActiveUser, setActiveUserPosts, setUsersInfo,  } from 'app/store/slices/mainSlice'
import { Loader } from 'widgets/Loader'
import { ErrorPlug } from 'widgets/ErrorPlug'
import { PostsList } from 'entities/Posts/ui/PostsList'
import { FIRST_ARRAY_ITEM_INDEX } from 'shared/consts'

export const UserInfo: FC = () => {
    const { userId } = useParams() as {userId: string}

    const posts = useAppSelector(state => state.main.posts)

    const activeUser = useAppSelector(state => state.main.activeUser)
    const activeUserPosts = useAppSelector(state => state.main.activeUserPosts)

    const isUserFetching = useAppSelector(state => state.main.isUserFetching)
    const userFetchingError = useAppSelector(state => state.main.userFetchingError)

    const isUserPostsFetching = useAppSelector(state => state.main.isUserPostsFetching)
    const userPostsFetchingError = useAppSelector(state => state.main.userPostsFetchingError)

    const usersInfo = useAppSelector(state => state.main.usersHistory)

    const dispatch = useAppDispatch()

    useLayoutEffect(() => {
        const currentUserId = Number(userId)
        const existingUserInfo  = usersInfo.find(item => item.user.id === currentUserId)

        if (existingUserInfo) {
            dispatch(setActiveUser(existingUserInfo.user))
            dispatch(setActiveUserPosts(existingUserInfo.posts))
        } else {
            if (!activeUser || activeUser.id !== currentUserId) {
                dispatch(fetchUserAsync(currentUserId))
            }

            if (posts) {
                const activeUserPost = posts.filter(post => post.userId === currentUserId)
                dispatch(setActiveUserPosts(activeUserPost))
            } else if (
                !activeUserPosts ||
                activeUserPosts[FIRST_ARRAY_ITEM_INDEX].userId !== currentUserId
            ) {
                dispatch(fetchUserPostsAsync(currentUserId))
            }
        }

        return function() {
            if (activeUser && activeUserPosts) {
                const userInfo: IUserHistory = {
                    user: activeUser,
                    posts: activeUserPosts
                }

                const isCurrentUserInfoExist = usersInfo.find(item => item.user.id === activeUser.id)

                if (!isCurrentUserInfoExist) {
                    dispatch(setUsersInfo([...usersInfo, userInfo]))
                }
            }
        }
    }, [])

    return (
        <>
            <Link to='/'>Back home</Link>
            <div className={ classes.container }>
                {
                    activeUser
                        ? <UserCard user={ activeUser } />
                        : isUserFetching
                            ? <Loader />
                            : userFetchingError
                                ? <ErrorPlug message={ userFetchingError } />
                                :''
                }
                {
                    activeUserPosts
                        ? <PostsList posts={ activeUserPosts } showAvatar={ false }/>
                        : isUserPostsFetching
                            ? <Loader />
                            : userPostsFetchingError
                                ? <ErrorPlug message={ userPostsFetchingError } />
                                :''
                }
            </div>
        </>
    )
}
