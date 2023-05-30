import { type FC, Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { AppHeader } from 'widgets/AppHeader/ui/AppHeader'
import { Loader } from 'widgets/Loader'

const App: FC = ()=> {
    return (
        <Suspense fallback={ <Loader /> }>
            <AppHeader />
            <Outlet />
        </Suspense>
    )
}

export default App
