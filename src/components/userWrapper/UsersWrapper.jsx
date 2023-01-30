import React from 'react'
import { ReactComponent as FilterIcon } from '../../assets/svgs/filter-icon.svg'
import { ReactComponent as MenuIcon } from '../../assets/svgs/menu.svg'
import { useGlobalContext } from '../../context'

const UsersWrapper = () => {
  const { users } = useGlobalContext()

  const dateIssued = (createdAt) => {
    const date = new Date(createdAt)
    const formattedDate = date
      .toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      })
      .split('/')
      .join('-')
    return formattedDate
  }

  const formattedPhoneNumber = (num) => {
    const formmatedNumber = num.replace(/[^\d]/g, '').slice(0, 11)
    return formmatedNumber
  }

  return (
    <section className='users'>
      <div className='headers-wrapper'>
        <div className='user-header organization'>
          <span>organization</span>
          <FilterIcon />
        </div>
        <div className='user-header username'>
          <span>Username</span>
          <FilterIcon />
        </div>
        <div className='user-header email'>
          <span>Email</span>
          <FilterIcon />
        </div>
        <div className='user-header number'>
          <span>phone Number</span>
          <FilterIcon />
        </div>
        <div className='user-header dateJoined'>
          <span>date joined</span>
          <FilterIcon />
        </div>
        <div className='user-header status'>
          <span>status</span>
          <FilterIcon />
        </div>
      </div>
      <div className='user-content'>
        {users.map((item) => {
          const { orgName, userName, email, id, createdAt, phoneNumber } = item
          return (
            <div className='user-info' key={id}>
              <p className='organization'>{orgName}</p>
              <p className='username'>{userName}</p>
              <p className='email'>{email}</p>
              <p className='number'>{formattedPhoneNumber(phoneNumber)}</p>
              <p className='dateJoined'>{dateIssued(createdAt)}</p>
              <p>Active</p>
              <MenuIcon className='icon'/>
            </div>
          )
        }).slice(0, 10)}
      </div>
    </section>
  )
}

export default UsersWrapper
