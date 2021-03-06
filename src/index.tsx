import { StrictMode } from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { App } from './app'
import { AuthProvider, MacroUserActionsProvider } from './context'
import { Global } from './styles/global'
import { theme } from './styles/theme'

render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <MacroUserActionsProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </MacroUserActionsProvider>

        <Global />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
)
