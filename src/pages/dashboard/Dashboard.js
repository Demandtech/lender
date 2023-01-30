import React from 'react'
import { useGlobalContext } from '../../context'

function Dashboard() {
  const { users } = useGlobalContext()
  return (
    <section className='dashboard'>
        <h3>Users</h3>
    </section>
  )
}

export default Dashboard
