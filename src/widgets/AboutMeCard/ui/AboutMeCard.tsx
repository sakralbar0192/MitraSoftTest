import { type FC } from 'react'
import { Card } from 'react-bootstrap'
import myAvatarUrl from '../assets/myAvatar.jpeg'

export const AboutMeCard: FC = () => {
    return (
        <Card style={ { width: '18rem' } }>
            <Card.Img variant='top' src={ myAvatarUrl } />
            <Card.Body>
                <Card.Title>Ukhov Danil</Card.Title>
                <Card.Text>
                    Address: Иркутская область, Усолье-Сибирское, пр-кт Красных Партизан, 38а
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
