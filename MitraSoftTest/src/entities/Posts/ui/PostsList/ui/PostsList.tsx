import { type FC } from 'react'
import { PostCard } from 'entities/Posts/ui/PostCard'
import classes from './style.module.scss'
import { IPostItem } from 'entities/Posts/types'

interface IPostsListProps {
    posts: IPostItem[]
}

export const PostsList: FC<IPostsListProps> = ({ posts }) => {
    return (
        <div className={ classes.postList }>
            {
                posts.length
                    ? posts.map(post => <PostCard key={ post.id } post={ post } />)
                    : 'Nothing to display'
            }
        </div>
    )
}
