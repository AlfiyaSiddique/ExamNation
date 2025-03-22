import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: "#25b7ea"
    }
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
  </BrowserRouter>
  </StrictMode>,
)
