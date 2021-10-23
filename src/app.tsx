import { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

import { PrivateRouter, RoteLazyLoading } from './components'
import { MacroUserActionsProvider } from './context'

const Authentication = lazy(() => import('./components/routes/authentication'))
const DashBoard = lazy(() => import('./components/routes/dashboard'))
const ForgotYourPassword = lazy(
  () => import('./components/routes/forgot-your-password')
)

export const App = () => {
  return (
    <Suspense fallback={RoteLazyLoading()}>
      <Switch>
        <Route exact path="/forgot-your-password">
          <ForgotYourPassword />
        </Route>

        <Route exact path="/authentication">
          <Authentication />
        </Route>

        <PrivateRouter path="/">
          <MacroUserActionsProvider>
            <DashBoard />
          </MacroUserActionsProvider>
        </PrivateRouter>
      </Switch>
    </Suspense>
  )
}
