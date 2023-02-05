import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../../context'
import { Link } from 'react-router-dom'
import { ReactComponent as ArrowBackIcon } from '../../assets/svgs/arrow-back-icon.svg'
import { ReactComponent as StartFillIcon } from '../../assets/svgs/star-fill-icon.svg'
import { ReactComponent as StarIcon } from '../../assets/svgs/star-icon.svg'
import { LoadingPage } from '../../pages'
import { formatPrice, formatNumber } from '../../utils'


const url = 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/'

function UserDetail() {
  const { id } = useParams()
  const { FetchSingleUser, loading, singleUser } = useGlobalContext()

  console.log(singleUser)
  console.log(loading)

  useEffect(() => {
    FetchSingleUser(`${url}${id}`)
  }, [id])

  if (loading) {
    return (
      <main style={{ display: 'grid', placeItems: 'center' }}>
        <LoadingPage />
      </main>
    )
  }

  return (
    <section className='user-detail'>
      <Link to={'/dashboard'}>
        <ArrowBackIcon /> Back to Users
      </Link>
      <div className='user-top'>
        <h2>User Details</h2>
        <div className='btns-con'>
          <button className='blacklist-btn'>blackList user</button>
          <button className='activate-btn'>activate user</button>
        </div>
      </div>
      <UserHeader />
      <div className='informations-wrapper'>
        <PersonalInformation />
        <EducationInformation />
        <Social />
        <GuarrantorInformation />
      </div>
    </section>
  )
}

const UserHeader = () => {
  const { singleUser } = useGlobalContext()
  console.log(singleUser)
  const { profile, accountNumber, accountBalance } = singleUser
  return (
    <article className='user-detail-header'>
      <div className='header-wrapper'>
        <div className='profile'>
          <img src={profile?.avatar} alt='' />
          <div>
            <p className='name'>
              {profile?.firstName} {profile?.lastName}
            </p>
            <p className='account-num'>{accountNumber}</p>
          </div>
        </div>
        <hr />
        <div className='tiers'>
          <h3>User's Tier</h3>
          <div className='stars'>
            <StartFillIcon />
            <StarIcon />
            <StarIcon />
          </div>
        </div>
        <hr />
        <div className='account'>
          <p className='balance'>{formatPrice(accountBalance)}</p>
          <p className='bvn'>{profile?.bvn}</p>
        </div>
      </div>
      <div className='tabs'>
        <div className='active'>General Details</div>
        <div>Document</div>
        <div>Bank Details</div>
        <div>Loans</div>
        <div>Savings</div>
        <div>App and System</div>
      </div>
    </article>
  )
}

const PersonalInformation = () => {
  const { singleUser } = useGlobalContext()

  const {profile,email} = singleUser
  return (
    <article>
      <h3>Personal Information</h3>
      <div className='content'>
        <div className='info'>
          <div>
            <span>Full Name</span>
            <p>
              {profile?.firstName} {profile?.lastName}
            </p>
          </div>
          <div>
            <span>Phone number</span>
            <p>{formatNumber(profile?.phoneNumber)}</p>
          </div>
          <div>
            <span>Email Address</span>
            <p>{email}</p>
          </div>
          <div>
            <span>Bvn</span>
            <p>{profile?.bvn}</p>
          </div>
          <div>
            <span>Gender</span>
            <p>{profile?.gender}</p>
          </div>
          <div>
            <span>marital status</span>
            <p>Married</p>
          </div>
          <div>
            <span>children</span>
            <p>N/A</p>
          </div>
          <div>
            <span>Type of residence</span>
            <p>N/A</p>
          </div>
        </div>
      </div>
    </article>
  )
}

const EducationInformation = () => {
  const { singleUser } = useGlobalContext()
  return (
    <article>
      <h3>Education and Employemnt</h3>
      <div className='content'></div>
    </article>
  )
}
const Social = () => {
  const { singleUser } = useGlobalContext()
  return (
    <article>
      <h3>Social</h3>
      <div className='content'></div>
    </article>
  )
}

const GuarrantorInformation = () => {
  const { singleUser } = useGlobalContext()
  return (
    <article>
      <h3>Guarantor</h3>
      <div className='content'></div>
    </article>
  )
}
export default UserDetail
