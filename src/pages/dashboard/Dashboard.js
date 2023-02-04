import React, { useState } from 'react'
import { useGlobalContext } from '../../context'
import { Card, UsersWrapper } from '../../components'
import LoadingPage from '../loading/LoadingPage'

function Dashboard() {
  const [page, setPage] = useState(10)
  const { loading } = useGlobalContext()

  if (loading) {
    return (
      <div className='dashboard'>
        <LoadingPage />
      </div>
    )
  }
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
