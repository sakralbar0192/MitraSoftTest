import { type FC } from 'react'
import { Alert, Button } from 'react-bootstrap'
import { DEFAULT_ERROR_MESSAGE } from 'shared/consts'

export const ErrorPlug: FC = () => {
    return (
        <Alert variant='danger' className='container'>
            {DEFAULT_ERROR_MESSAGE}
            <p>Try to reload page</p>
            <Button
                variant='primary'
                onClick={ () => window.location.reload() }
            >
                Reload
            </Button>
        </Alert>
    )
}
