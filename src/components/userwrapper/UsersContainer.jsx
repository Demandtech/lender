import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import { ReactComponent as FilterIcon } from '../../assets/svgs/filter-icon.svg'
import { ReactComponent as NextIcon } from '../../assets/svgs/next-icon.svg'
import { ReactComponent as PrevIcon } from '../../assets/svgs/prev-icon.svg'
import { ReactComponent as MenuIcon } from '../../assets/svgs/menu-icon.svg'
import { formatDate, formatNumber, shorttenStr } from '../../utils'
import { useGlobalContext } from '../../context'
import { Filter, Menu } from '../../components'

export const Items = ({ currentItems }) => {
  const { openFilter, filter } = useGlobalContext()
  return (
    <section style={{ position: 'relative' }}>
      {filter && <Filter />}
      <div className='users-wrapper'>
        <div className='users-wrapper-header'>
          <div className='table-header organization-header'>
            <span>Organization</span>
            <FilterIcon onClick={() => openFilter()} />
          </div>
          <div className='table-header'>
            <span>username</span>
            <FilterIcon onClick={() => openFilter()} />
          </div>
          <div className='table-header'>
            <span>email</span>
            <FilterIcon onClick={() => openFilter()} />
          </div>
          <div className='table-header'>
            <span>phone number</span>
            <FilterIcon onClick={() => openFilter()} />
          </div>
          <div className='table-header'>
            <span>date joined</span>
            <FilterIcon onClick={() => openFilter()} />
          </div>
          <div className='table-header'>
            <span>status</span>
            <FilterIcon onClick={() => openFilter()} />
          </div>
        </div>
        {currentItems
          ? currentItems.map((item) => {
              return <User {...item} key={item.id} />
            })
          : null}
      </div>
    </section>
  )
}

const UsersWrapper = ({ itemsPerPage, setPage }) => {
  const [itemOffset, setItemOffset] = useState(0)
  const { users } = useGlobalContext()
  let items = users

  // const options = users.map

  const endOffset = itemOffset + itemsPerPage
  const currentItems = items.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(items.length / itemsPerPage)

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length

    setItemOffset(newOffset)
  }

  const handleChange = (e) => {
    setPage(e.target.value)
  }

  return (
    <>
      <Items currentItems={currentItems} />
      <div className='pag-wrapper'>
        <div className='select-page'>
          <p>showing</p>
          <select onChange={(e) => handleChange(e)} name='page' id='page'>
            <option value='10'>10</option>
            <option value='25'>25</option>
            <option value='50'>50</option>
            <option value='75'>75</option>
            <option value='100'>100</option>
          </select>
          <p>Out of {users.length}</p>
        </div>
        <div className='pagination'>
          <ReactPaginate
            breakLabel='...'
            nextLabel={
              <div className='next'>
                <NextIcon className='next-icon' />
              </div>
            }
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel={
              <div className='prev'>
                <PrevIcon className='prev-icon' />
              </div>
            }
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </>
  )
}

const User = ({ orgName, userName, phoneNumber, createdAt, email, id }) => {
  const [openMenu, setOpenMenu] = useState(null)

  const handleMenu = () => {
    if (openMenu) {
      setOpenMenu(false)
    } else {
      setOpenMenu(true)
    }
  }
  return (
    <div className='users-wrapper-content'>
      <div className='content-wrapper'>
        <div className='content organization-content'>
          {shorttenStr(orgName)}
        </div>
        <div className='content'>{userName}</div>
        <div className='content'>{email}</div>
        <div className='content'>{phoneNumber}</div>
        <div className='content'>{formatDate(createdAt)}</div>
        <div className='content status'>active</div>
        <div className='content'>
          <button className='menu-btn' id={id}>
            <MenuIcon onClick={handleMenu} />
          </button>
          {openMenu && <Menu id={id} />}
        </div>
      </div>
    </div>
  )
}

export default UsersWrapper
