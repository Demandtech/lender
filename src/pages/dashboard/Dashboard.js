import React from 'react'
import { useGlobalContext } from '../../context'

function Dashboard() {
  const { user } = useGlobalContext()
  return (
    <div className='dashboard'>
      <h1>DASHBOARD</h1>
    </div>
  )
}

export default Dashboard
