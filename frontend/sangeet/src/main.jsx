import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './provider/auth-provider'
import { Provider } from 'react-redux'
import { store } from './app/store'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <AuthProvider>
          <App />
        </AuthProvider>
      </ClerkProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)