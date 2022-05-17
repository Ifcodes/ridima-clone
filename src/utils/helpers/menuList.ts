import HomeIcon from "../../components/atoms/vectors/HomeIcon";
import ActivitiesIcon from "../../components/atoms/vectors/ActivitiesIcon";
import WalletIcon from "../../components/atoms/vectors/WalletIcon";
import SupportIcon from "../../components/atoms/vectors/SupportIcon";
import NotificationIcon from "../../components/atoms/vectors/NotificationIcon";
import UserIcon from "../../components/atoms/vectors/UserIcon";
import LeaderBoardIcon from "../../components/atoms/vectors/LeaderBoardIcon";
import ReferralIcon from "../../components/atoms/vectors/ReferralIcon";
import ShieldIcon from "../../components/atoms/vectors/ShieldIcon";
import ArrowRightLogoutIcon from "../../components/atoms/vectors/ArrowRightLogoutIcon";

export const primaryMenuList = [
  {
    id: 1,
    icon: HomeIcon,
    text: 'Home',
    location: '/home',
  },
  {
    id: 2,
    icon: ActivitiesIcon,
    text: 'Activities',
    location: '/activities',
  },
  {
    id: 3,
    icon: WalletIcon,
    text: 'Wallet',
    location: '/wallet',
  },
  {
    id: 4,
    icon: SupportIcon,
    text: 'Support',
    location: '/support',
  },
  {
    id: 5,
    icon: NotificationIcon,
    text: 'Notification',
    location: '/notification',
  },
]

export const secondaryMenuList = [
  {
    id: 6,
    icon: UserIcon,
    text: 'Profile',
    location: '/profile',
  },
  {
    id: 7,
    icon: LeaderBoardIcon,
    text: 'Leaderboard',
    location: '/leaderboard',
  },
  {
    id: 8,
    icon: ReferralIcon,
    text: 'Referral',
    location: '/referral',
  },
  {
    id: 9,
    icon: ShieldIcon,
    text: 'Security',
    location: '/security',
  },
  {
    id: 10,
    icon: ArrowRightLogoutIcon,
    text: 'Logout',
    location: '/logout',
  },
]