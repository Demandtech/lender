import { ReactComponent as UserFriendIcon } from '../../assets/svgs/user-friends.svg'
import { ReactComponent as UsersIcon } from '../../assets/svgs/users-icon.svg'
import { ReactComponent as SackIcon } from '../../assets/svgs/sack.svg'
import { ReactComponent as HandShakeIcon } from '../../assets/svgs/handshake.svg'
import { ReactComponent as PiggyBankIcon } from '../../assets/svgs/piggybank.svg'
import { ReactComponent as HandSackIcon } from '../../assets/svgs/handsack.svg'
import { ReactComponent as UserCheckIcon } from '../../assets/svgs/user-check.svg'
import { ReactComponent as UserTimesIcon } from '../../assets/svgs/user-times.svg'
import { ReactComponent as BriefCaseIcon } from '../../assets/svgs/briefcase.svg'

export const customer = [
  {id: 1, text: 'User', icon: <UserFriendIcon /> },
  {id: 2, text: 'Guarantors', icon: <UsersIcon /> },
  {id:3, text: 'Loans', icon: <SackIcon /> },
  {id:4, text: 'Decision Models',icon:<HandShakeIcon /> },
  {id:6, text: 'Saving',icon:<PiggyBankIcon /> },
  {id:7, text: 'Loan Request',icon:<HandSackIcon /> },
  {id:8, text: 'Whitelist',icon:<UserCheckIcon /> },
  {id:9, text: 'Karma',icon:<UserTimesIcon /> },
]

export const business = [
  { id: 1, text: 'Organization', icon: <BriefCaseIcon /> },
  { id: 2, text: 'Loan Products', icon: <HandSackIcon /> },
  { id: 3, text: 'Savings Products', icon: <HandSackIcon /> },
  { id: 4, text: 'Fees and Charges', icon: <HandSackIcon /> },
  { id: 5, text: 'Transactions', icon: <HandSackIcon /> },
  { id: 6, text: 'Services', icon: <HandSackIcon /> },
  { id: 7, text: 'Service Account', icon: <HandSackIcon /> },
  { id: 8, text: 'Settlements', icon: <HandSackIcon /> },
  { id: 9, text: 'Reports', icon: <HandSackIcon /> },
]

export const settings = [ 
  { id: 1, text: 'Preferences', icon: <BriefCaseIcon /> },
  { id: 2, text: 'Fees and Pricing', icon: <BriefCaseIcon /> },
  { id: 3, text: 'Audit Logs', icon: <BriefCaseIcon /> }, 
]