import { Route, Routes } from "react-router-dom";
import CreateVirtualCard from "./pages/CreateVirtualCard";
import BVNAuthentication from "./pages/AuthPage/BVNAuthentication";
import CreateAccountPage from "./pages/AuthPage/CreateAccount";
import ForgotPassword from "./pages/AuthPage/ForgotPassword";
import ForgotPin from "./pages/AuthPage/ForgotPin";
import Loginpage from "./pages/AuthPage/Login";
import Activities from "./pages/Dashboard/Activities";
import Home from "./pages/Dashboard/Home";
import Homepage from "./pages/Dashboard/Home";
import Leaderboard from "./pages/Dashboard/Leaderboard";
import Logout from "./pages/Dashboard/Logout";
import Notification from "./pages/Dashboard/Notifications";
import Profile from "./pages/Dashboard/Profile";
import Referral from "./pages/Dashboard/Referral";
import Security from "./pages/Dashboard/Security";
import Support from "./pages/Dashboard/Support";
import VirtualCardsPage from "./pages/VirtualCardsPage";
import CardDetails from "./pages/VirtualCardsPage/cardDetails";
import Wallet from "./pages/Dashboard/Wallet";
import TradeGiftCard from "./pages/TradeGiftCard";
import SellGiftCards from "./pages/TradeGiftCard/SellGiftCard";
import BuyGiftCards from "./pages/TradeGiftCard/BuyGiftCard";
import CheckRates from "./pages/TradeGiftCard/CheckRates";
import HotGiftCards from "./pages/TradeGiftCard/HotGiftCards";
import PayBills from "./pages/PayBills";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Loginpage />} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/create-account" element={<CreateAccountPage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/forgot-pin" element={<ForgotPin />} />
      <Route path="/home" element={<Home />} />
      <Route path="/activities" element={<Activities />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/support" element={<Support />} />
      <Route path="/notification" element={<Notification />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="/referral" element={<Referral />} />
      <Route path="/security" element={<Security />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/bvn-authentication" element={<BVNAuthentication />} />
      <Route path="/trade-giftcards" element={<TradeGiftCard />} />
      <Route
        path="/trade-giftcards/sell-giftcards"
        element={<SellGiftCards />}
      />
      <Route path="/trade-giftcards/buy-giftcards" element={<BuyGiftCards />} />
      <Route path="/trade-giftcards/check-rates" element={<CheckRates />} />
      <Route path="/trade-giftcards/hot-giftcards" element={<HotGiftCards />} />
      <Route path="/virtual-cards" element={<VirtualCardsPage />} />
      <Route path="/virtual-cards/:id" element={<CardDetails />} />
      <Route path="/pay-bills" element={<PayBills />} />
    </Routes>
  );
}

export default App;
