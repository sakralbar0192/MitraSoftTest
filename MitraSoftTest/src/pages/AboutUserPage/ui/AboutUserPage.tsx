import { UserCard } from 'entities/Users/ui/UserCard'
import { Suspense, type FC } from 'react'
import { Await, Link, useLoaderData } from 'react-router-dom'
import { ErrorPlug } from 'widgets/ErrorPlug'
import { Loader } from 'widgets/Loader'
import { IGetUserResponse } from 'app/api/getUser'
import classes from './styles.module.scss'
import { UserPostsList } from 'widgets/UserPostsList/ui/UserPostsList'

export const AboutUserPage: FC = () => {
    const { response } = useLoaderData() as { response: IGetUserResponse | null }

    return (
        <Suspense fallback={ <Loader /> } >
            <Link to='/'>Back home</Link>
            <div className={ classes.container }>
                <Await
                    resolve={ response }
                    errorElement={ <ErrorPlug /> }
                    children={ (awaitedResponse: IGetUserResponse | null) => {
                        return awaitedResponse && awaitedResponse.isSucceeded && awaitedResponse.data
                            ? <>
                                <UserCard user={ awaitedResponse.data }/>
                                <UserPostsList userId={ awaitedResponse.data.id }/>
                            </>
                            : <ErrorPlug />

                    } }
                />
            </div>
        </Suspense>
    )
}
