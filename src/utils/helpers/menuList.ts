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
import HomeFilledIcon from "../../components/atoms/vectors/HomeFilledIcon";
import ActivitiesFilledIcon from "../../components/atoms/vectors/ActivitiesFilledIcon";
import WalletFilledIcon from "../../components/atoms/vectors/WalletFilledIcon";
import SupportFilledIcon from "../../components/atoms/vectors/SupportFilledIcon";
import NotificationFilledIcon from "../../components/atoms/vectors/NotificationFilledIcon";
import ProfileFilledIcon from "../../components/atoms/vectors/ProfileFilledIcon";
import LeaderBoardFilledIcon from "../../components/atoms/vectors/LeaderBoardFilledIcon";
import ReferralIconFilled from "../../components/atoms/vectors/ReferralIconFilled";
import ShieldIconFilled from "../../components/atoms/vectors/ShieldIconFiled";
import LogoutIconFilled from "../../components/atoms/vectors/LogoutIconFilled";

export const primaryMenuList = [
  {
    id: 1,
    icon: HomeIcon,
    iconFilled: HomeFilledIcon,
    text: 'Home',
    location: '/home',
  },
  {
    id: 2,
    icon: ActivitiesIcon,
    iconFilled: ActivitiesFilledIcon,
    text: 'Activities',
    location: '/activities',
  },
  {
    id: 3,
    icon: WalletIcon,
    iconFilled: WalletFilledIcon,
    text: 'Wallet',
    location: '/wallet',
  },
  {
    id: 4,
    icon: SupportIcon,
    iconFilled: SupportFilledIcon,
    text: 'Support',
    location: '/support',
  },
  {
    id: 5,
    icon: NotificationIcon,
    iconFilled: NotificationFilledIcon,
    text: 'Notification',
    location: '/notification',
  },
]

export const secondaryMenuList = [
  {
    id: 6,
    icon: UserIcon,
    iconFilled: ProfileFilledIcon,
    text: 'Profile',
    location: '/profile',
  },
  {
    id: 7,
    icon: LeaderBoardIcon,
    iconFilled: LeaderBoardFilledIcon,
    text: 'Leaderboard',
    location: '/leaderboard',
  },
  {
    id: 8,
    icon: ReferralIcon,
    iconFilled: ReferralIconFilled,
    text: 'Referral',
    location: '/referral',
  },
  {
    id: 9,
    icon: ShieldIcon,
    iconFilled: ShieldIconFilled,
    text: 'Security',
    location: '/security',
  },
  {
    id: 10,
    icon: ArrowRightLogoutIcon,
    iconFilled: LogoutIconFilled,
    text: 'Logout',
    location: '/logout',
  },
]