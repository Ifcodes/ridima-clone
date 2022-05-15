import { Route, Routes } from 'react-router-dom'
import CreateAccountPage from './pages/AuthPage/CreateAccount'
import ForgotPassword from './pages/AuthPage/ForgotPassword'
import ForgotPin from './pages/AuthPage/ForgotPin'
import Loginpage from './pages/AuthPage/Login'
import Homepage from './pages/Homepage'

function App() {

  return (
    <Routes>
      <Route path='/' element={<CreateAccountPage />} />
      <Route path='/login' element={<Loginpage />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route path='/forgot-pin' element={<ForgotPin />} />
    </Routes>
  )
}

export default App
