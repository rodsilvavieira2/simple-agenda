import { AnimatePresence } from 'framer-motion'
import { lazy, Suspense } from 'react'
import { Switch, Route, useRouteMatch, useLocation } from 'react-router-dom'

import {
  Header,
  MobileSidebar,
  Sidebar,
  ExportModal,
  DoubleLoadingSpinner
} from '../..'
import { ContactsManagerProvider } from '../../../context'
import { useMacroUserActionsContext } from '../../../hooks'
import { InnerContainer, Main, Container } from './styles'

const Contacts = lazy(() => import('./sub-routes/contacts'))
const ViewContactAndEdit = lazy(
  () => import('./sub-routes/view-and-edit-contact')
)
const NewContact = lazy(() => import('./sub-routes/new-contact'))
const Trash = lazy(() => import('./sub-routes/trash'))

const DashBoard = () => {
  const { path } = useRouteMatch()

  const location = useLocation()

  const {
    dispatch,
    state: { isExportModalOpen }
  } = useMacroUserActionsContext()

  return (
    <Container>
      <ContactsManagerProvider>
        <Sidebar />

        <MobileSidebar />

        <InnerContainer>
          <Header />

          <Main>
            <Suspense fallback={DoubleLoadingSpinner()}>
              <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.key}>
                  <Route exact path={path}>
                    <Contacts />
                  </Route>

                  <Route path="/view-contact-and-edit/:id">
                    <ViewContactAndEdit />
                  </Route>

                  <Route path="/new-contact">
                    <NewContact />
                  </Route>

                  <Route path="/trash">
                    <Trash />
                  </Route>
                </Switch>
              </AnimatePresence>
            </Suspense>
          </Main>

          <ExportModal
            isOpen={isExportModalOpen}
            onRequestClose={() =>
              dispatch({ type: 'toggle-export-modal-open' })
            }
          />
        </InnerContainer>
      </ContactsManagerProvider>
    </Container>
  )
}

export default DashBoard
