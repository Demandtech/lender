import React, { useEffect } from 'react'
import { ReactComponent as FilterIcon } from '../../assets/svgs/filter-icon.svg'
import { ReactComponent as MenuIcon } from '../../assets/svgs/menu.svg'

import { ReactComponent as ArrowDownIcon } from '../../assets/svgs/arrow-down.svg'
import { ReactComponent as PrevIcon } from '../../assets/svgs/prev.svg'
import { ReactComponent as NextIcon } from '../../assets/svgs/next.svg'
import { useGlobalContext } from '../../context'
import { useState } from 'react'

const UsersWrapper = () => {
  const { users } = useGlobalContext()
  const [page, setPage] = useState(0)
  const [displayUser, setDisplayUser] = useState([])

  useEffect(() => {
    setDisplayUser(users[page])
  }, [page])

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

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1
      if (nextPage > displayUser.length - 1) {
        nextPage = displayUser.length - 1
      }
      return nextPage
    })
  }

  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1
      if (prevPage < 0) {
        prevPage = 0
      }

      return prevPage
    })
  }

  return (
    <>
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
          {displayUser.map((item) => {
            const { orgName, userName, email, id, createdAt, phoneNumber } =
              item
            return (
              <div className='user-info' key={id}>
                <p className='organization'>{orgName}</p>
                <p className='username'>{userName}</p>
                <p className='email'>{email}</p>
                <p className='number'>{formattedPhoneNumber(phoneNumber)}</p>
                <p className='dateJoined'>{dateIssued(createdAt)}</p>
                <p>Active</p>
                <MenuIcon className='icon' />
              </div>
            )
          })}
        </div>
      </section>
      <section className='pagination'>
        <div className='left'>
          <p>Showing</p>
          <div className='pag'>
            <span>{users.length}</span>
            <ArrowDownIcon />
          </div>
          <p>of {users.flat().length}</p>
        </div>
        <div className='right'>
          <div className='prev-btn'>
            <PrevIcon onClick={prevPage} />
          </div>
          {users.map((_, index) => (
            <p>{index + 1}</p>
          ))}
          <div className='next-btn'>
            <NextIcon onClick={nextPage} />
          </div>
        </div>
      </section>
    </>
  )
}

export default UsersWrapper
