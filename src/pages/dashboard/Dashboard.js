import React from 'react'
//import { useGlobalContext } from '../../context'
import {Card, UsersWrapper} from '../../components'

function Dashboard() {
  return (
    <main className='dashboard'>
        <h3>Users</h3>
        <div className="header">
           <Card />
           <UsersWrapper />
        </div>
    </main>
  )
}

export default Dashboard
