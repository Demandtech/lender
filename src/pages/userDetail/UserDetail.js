import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../../context'
import { Link } from 'react-router-dom'
import { ReactComponent as ArrowBackIcon } from '../../assets/svgs/arrow-back-icon.svg'
import { ReactComponent as StartFillIcon } from '../../assets/svgs/star-fill-icon.svg'
import { ReactComponent as StarIcon } from '../../assets/svgs/star-icon.svg'
import { LoadingPage } from '../../pages'
import { formatPrice } from '../../utils'

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
      <main style={{display:'grid', placeItems: 'center'}}>
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

export default UserDetail
