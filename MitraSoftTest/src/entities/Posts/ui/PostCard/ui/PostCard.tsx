import { IPostItem } from 'entities/Posts/types'
import { type FC } from 'react'
import Card from 'react-bootstrap/Card'

export interface IPostCardProps {
    post: IPostItem
}

export const PostCard: FC<IPostCardProps> = ({ post }) => {
    return (
        <Card style={ { width: '18rem' } }>
            <Card.Header as='h5'>{post.title}</Card.Header>
            <Card.Body>
                <Card.Text>
                    {post.body}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
