import { StrictMode } from 'react'
import SignUp from './components/SignUp'
import LoginScreen from './components/LoginScreen.jsx'
import  ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import NotFoundPage from './components/NotFoundPage.js'
import PasswordReset from './components/PasswordReset.jsx'
import ToEmail from './components/ToEmail.jsx'
import SetNewPassword from './components/SetNewPassword.jsx'
import PasswordSuccess from './components/PasswordSuccess.jsx'


const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  errorElement: <NotFoundPage />
},
{
  path: '/login',
  element: <LoginScreen />
},
{
  path: '/signup',
  element: <SignUp />
},
{
  path: '/resetpassword',
  element: <PasswordReset />
},
{
  path: '/toemail',
  element: <ToEmail />
},
{
  path: '/newpassword',
  element: <SetNewPassword />
},
{
  path: '/success',
  element: <PasswordSuccess />
}
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
