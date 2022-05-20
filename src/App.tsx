import { Route, Routes } from 'react-router-dom'
import BVNAuthentication from './pages/AuthPage/BVNAuthentication'
import CreateAccountPage from './pages/AuthPage/CreateAccount'
import ForgotPassword from './pages/AuthPage/ForgotPassword'
import ForgotPin from './pages/AuthPage/ForgotPin'
import Loginpage from './pages/AuthPage/Login'
import Activities from './pages/Dashboard/Activities'
import Home from './pages/Dashboard/Home'
import Homepage from './pages/Dashboard/Home'
import Leaderboard from './pages/Dashboard/Leaderboard'
import Logout from './pages/Dashboard/Logout'
import Notification from './pages/Dashboard/Notifications'
import Profile from './pages/Dashboard/Profile'
import Referral from './pages/Dashboard/Referral'
import Security from './pages/Dashboard/Security'
import Support from './pages/Dashboard/Support'
import Wallet from './pages/Dashboard/Wallet'

function App() {

  return (
    <Routes>
      <Route path='/' element={<CreateAccountPage />} />
      <Route path='/login' element={<Loginpage />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route path='/forgot-pin' element={<ForgotPin />} />
      <Route path='/home' element={<Home />} />
      <Route path='/activities' element={<Activities />} />
      <Route path='/wallet' element={<Wallet />} />
      <Route path='/support' element={<Support />} />
      <Route path='/notification' element={<Notification />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/leaderboard' element={<Leaderboard />} />
      <Route path='/referral' element={<Referral />} />
      <Route path='/security' element={<Security />} />
      <Route path='/logout' element={<Logout />} />
      <Route path='/bvn-authentication' element={<BVNAuthentication />} />
    </Routes>
  )
}

export default App
