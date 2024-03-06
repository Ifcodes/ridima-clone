import { Route, Routes } from "react-router-dom";
import CreateVirtualCard from "./pages/CreateVirtualCard";
import BVNAuthentication from "./pages/AuthPage/BVNAuthentication";
import CreateAccountPage from "./pages/AuthPage/CreateAccount";
import ForgotPassword from "./pages/AuthPage/ForgotPassword";
import ForgotPin from "./pages/AuthPage/ForgotPin";
import Loginpage from "./pages/AuthPage/Login";
import Logout from "./pages/Dashboard/Logout";
import Notification from "./pages/Dashboard/Notifications";
import Profile from "./pages/Dashboard/Account";
import Referral from "./pages/Dashboard/Referral";
import Security from "./pages/Dashboard/Security";
import Support from "./pages/Dashboard/Support";
import VirtualCardsPage from "./pages/VirtualCardsPage";
import CardDetails from "./pages/VirtualCardsPage/cardDetails";
import Wallet from "./pages/Dashboard/Wallet";
import TradeGiftCard from "./pages/TradeGiftCard";

import PayBills from "./pages/PayBills";
import WithdrawToBank from "./pages/Dashboard/Wallet/withdrawToBank";
import SendMoney from "./pages/Dashboard/Wallet/sendMoney";
import RequestMoney from "./pages/Dashboard/Wallet/requestMoney";
import EditProfile from "./pages/Dashboard/Account/editProfile";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./pages/Dashboard/Home"));
const Activities = lazy(() => import("./pages/Dashboard/Activities"));
const Leaderboard = lazy(() => import("./pages/Dashboard/Leaderboard"));
const SellGiftCards = lazy(() => import("./pages/TradeGiftCard/SellGiftCard"));
const BuyGiftCards = lazy(() => import("./pages/TradeGiftCard/BuyGiftCard"));
const CheckRates = lazy(() => import("./pages/TradeGiftCard/CheckRates"));
const HotGiftCards = lazy(() => import("./pages/TradeGiftCard/HotGiftCards"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Loginpage />} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/create-account" element={<CreateAccountPage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/forgot-pin" element={<ForgotPin />} />
      <Route
        path="/home"
        element={
          <Suspense fallback="Loading...">
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/activities"
        element={
          <Suspense>
            <Activities />
          </Suspense>
        }
      />
      <Route
        path="/wallet"
        element={
          <Suspense>
            <Wallet />
          </Suspense>
        }
      />
      <Route path="/support" element={<Support />} />
      <Route path="/notification" element={<Notification />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/edit-profile" element={<EditProfile />} />
      <Route
        path="/leaderboard"
        element={
          <Suspense>
            <Leaderboard />
          </Suspense>
        }
      />
      <Route path="/referral" element={<Referral />} />
      <Route path="/security" element={<Security />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/bvn-authentication" element={<BVNAuthentication />} />
      <Route path="/trade-giftcards" element={<TradeGiftCard />} />
      <Route
        path="/trade-giftcards/sell-giftcards"
        element={
          <Suspense>
            <SellGiftCards />
          </Suspense>
        }
      />
      <Route
        path="/trade-giftcards/buy-giftcards"
        element={
          <Suspense>
            <BuyGiftCards />
          </Suspense>
        }
      />
      <Route
        path="/trade-giftcards/check-rates"
        element={
          <Suspense>
            <CheckRates />
          </Suspense>
        }
      />
      <Route
        path="/trade-giftcards/hot-giftcards"
        element={
          <Suspense>
            <HotGiftCards />
          </Suspense>
        }
      />
      <Route path="/virtual-cards" element={<VirtualCardsPage />} />
      <Route path="/virtual-cards/:id" element={<CardDetails />} />
      <Route path="/pay-bills" element={<PayBills />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/wallet/withdraw" element={<WithdrawToBank />} />
      <Route path="/wallet/send-money" element={<SendMoney />} />
      <Route path="/wallet/request-money" element={<RequestMoney />} />
    </Routes>
  );
}

export default App;
