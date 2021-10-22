import { AnimatePresence } from 'framer-motion'
import { Switch, Route, useRouteMatch, useLocation } from 'react-router-dom'

import { Header, MobileSidebar, Sidebar, ExportModal } from '../..'
import { ContactsManagerProvider } from '../../../context'
import { useMacroUserActionsContext } from '../../../hooks'
import { InnerContainer, Main, Container } from './styles'
import { Contacts, ViewContactAndEdit, NewContact, Trash } from './sub-routes'

export const DashBoard = () => {
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
