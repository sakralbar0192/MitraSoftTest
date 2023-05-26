import { type FC } from 'react'
import { Spinner } from 'react-bootstrap'

export const Loader: FC = () => {
    return <Spinner animation='grow' variant='primary' />
}
