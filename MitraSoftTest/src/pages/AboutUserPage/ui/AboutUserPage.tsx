import { UserCard } from 'entities/Users/ui/UserCard'
import { Suspense, type FC } from 'react'
import { Await, Link, useLoaderData } from 'react-router-dom'
import { ErrorPlug } from 'widgets/ErrorPlug'
import { Loader } from 'widgets/Loader'
import { IGetUserResponse } from 'app/api/getUser'
import classes from './styles.module.scss'

export const AboutUserPage: FC = () => {
    const { response } = useLoaderData() as {response: IGetUserResponse | null}

    return (
        <Suspense fallback={ <Loader /> } >
            <Link to='/'>Back home</Link>
            <div className={ classes.container }>
                <Await
                    resolve={ response }
                    errorElement={ <ErrorPlug /> }
                >
                    <UserCard />
                </Await>
            </div>
        </Suspense>
    )
}
