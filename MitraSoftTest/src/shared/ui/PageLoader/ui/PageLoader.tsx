import { type FC } from 'react'
import classes from './style.module.scss'
import { Loader } from 'shared/ui/Loader/ui/Loader'

export const PageLoader: FC = () => {
    return (
        <div className={ classes.pageLoader }>
            <Loader />
        </div>
    )
}
