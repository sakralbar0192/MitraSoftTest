import { IGetUserResponse } from 'app/api/getUser'
import { type FC } from 'react'
import { Card } from 'react-bootstrap'
import { useAsyncValue } from 'react-router'
import { ErrorPlug } from 'widgets/ErrorPlug'

export const UserCard: FC = () => {
    const response = useAsyncValue() as IGetUserResponse | null

    if (response && response.isSucceeded && response.data) {
        const user = response.data
        return(
            <Card
                bg='primary'
                style={ { width: '100%' } }
            >
                <Card.Header>{ user.username }</Card.Header>
                <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Text>
                        <p>Email: { user.email }</p>
                        <p>Company: {user.website}</p>
                        <p>{user.phone}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    } else {
        return <ErrorPlug />
    }
}
