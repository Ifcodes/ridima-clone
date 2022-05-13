import { Route, Routes } from 'react-router-dom'
import CreateAccountPage from './pages/AuthPage/CreateAccount'
import Loginpage from './pages/AuthPage/Login'
import Homepage from './pages/Homepage'

function App() {

  return (
    <Routes>
      <Route path='/' element={<CreateAccountPage />} />
      <Route path='/login' element={<Loginpage />} />
    </Routes>
  )
}

export default App
