import { type FC } from 'react'
import { Link, useRouteError, isRouteErrorResponse } from 'react-router-dom'
import { ErrorPlug } from 'widgets/ErrorPlug'
import classes from './styles.module.scss'
import { NOT_FOUND_PAGE_STATUS } from 'shared/consts'

export const ErrorBoundary: FC = () => {
    const error = useRouteError()

    return (
        <div className={ classes.errorPage }>
            {
                isRouteErrorResponse(error) && error.status === NOT_FOUND_PAGE_STATUS
                    ? <div>
                        Requested page not exist
                        <br/>
                        <Link to='/'>Home</Link>
                    </div>
                    : <ErrorPlug />
            }
        </div>
    )
}
