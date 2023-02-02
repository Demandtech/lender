import React, { useState } from 'react'
//import { useGlobalContext } from '../../context'
import {Card, UsersWrapper} from '../../components'


function Dashboard() {
  const [page, setPage] = useState(10)
  return (
    <main className='dashboard'>
      <h3>Users</h3>
      <div className='header'>
        <Card />
      </div>
      <UsersWrapper setPage={setPage} itemsPerPage={page} />
    </main>
  )
}

export default Dashboard
