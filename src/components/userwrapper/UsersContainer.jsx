import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import { ReactComponent as FilterIcon } from '../../assets/svgs/filter-icon.svg'
import { ReactComponent as NextIcon } from '../../assets/svgs/next-icon.svg'
import { ReactComponent as PrevIcon } from '../../assets/svgs/prev-icon.svg'
import { ReactComponent as MenuIcon } from '../../assets/svgs/menu-icon.svg'
// import { ReactComponent as ArrowDownIcon } from '../../assets/svgs/arrow-down-icon.svg'
import { formatDate, formatNumber, shorttenStr } from '../../utils'
import { useGlobalContext } from '../../context'
import { Filter } from '../../components'
import { useNavigate } from 'react-router-dom'

export const Items = ({ currentItems }) => {
  const { openFilter, filter } = useGlobalContext()
  const navigate = useNavigate()

  const th = [
    'Organization',
    'username',
    'email',
    'phone number',
    'date joined',
    'status',
  ]
  return (
    <section style={{ position: 'relative' }}>
      {filter && <Filter />}
      <table className='users-wrapper'>
        <thead>
          <tr>
            {th.map((t, index) => {
              return (
                <th key={index}>
                  <div className='table-header'>
                    {t}
                    <FilterIcon onClick={() => openFilter()} />
                  </div>
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {currentItems &&
            currentItems.map((item, index) => (
              <tr key={index}>
                <td>{shorttenStr(item.orgName)}</td>
                <td>{item.userName}</td>
                <td>{item.email}</td>
                <td>{formatNumber(item.phoneNumber)}</td>
                <td>{formatDate(item.createdAt)}</td>
                <td
                className='status'>active</td>
                <td>
                  <button className='menu-btn'>
                    <MenuIcon />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
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

export default UsersWrapper
