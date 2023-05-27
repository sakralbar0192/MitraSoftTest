import { IPostItem } from 'entities/Posts/types'
import { type FC } from 'react'
import Card from 'react-bootstrap/Card'
import User_avatar from '../assets/account-avatar.svg'
import { Link } from 'react-router-dom'
import classes from './style.module.scss'

export interface IPostCardProps {
    post: IPostItem
}

export const PostCard: FC<IPostCardProps> = ({ post }) => {
    return (
        <Card style={ { width: '18rem' } }>
            <Card.Header as='h5' className={ classes.header }>
                <Link to='AboutUser'>
                    <User_avatar />
                </Link>
                {post.title}
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    {post.body}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
