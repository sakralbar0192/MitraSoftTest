import { type FC } from 'react'
import { PostCard } from 'entities/Posts/ui/PostCard'
import { useAppSelector } from 'app/hooks'
import classes from './style.module.scss'

export const PostsList: FC = () => {
    const activePaginationIndex = useAppSelector(state => state.posts.activePaginationIndex)
    const splitedPosts = useAppSelector(state => state.posts.splitedPosts)

    return (
        <div className={ classes.postList }>
            {
                splitedPosts.length
                    ? [...splitedPosts[activePaginationIndex]].map(post => <PostCard key={ post.id } post={ post } />)
                    : 'Nothing to display'
            }
        </div>
    )
}
