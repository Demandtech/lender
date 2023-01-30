import React from 'react'
import { ReactComponent as UsersIcon } from '../../assets/svgs/all-users-icon.svg'
import { ReactComponent as ActiveUsersIcon } from '../../assets/svgs/active-users-icon.svg'
import { ReactComponent as LoanUsersIcon } from '../../assets/svgs/users-loan-icon.svg'
import { ReactComponent as SavingUsersIcon } from '../../assets/svgs/users-saving-icon.svg'
import { useGlobalContext } from '../../context'

function Info() {
  const {users} = useGlobalContext() 

  console.log(useGlobalContext())
  const items = [
    {
      id: 1,
      icon: <UsersIcon />,
      label: 'Users',
      value: users.length,
      color: '#fce8ff',
    },
    {
      id: 2,
      icon: <ActiveUsersIcon />,
      label: 'Active Users',
      value: users.length,
      color: '#eee8ff',
    },
    {
      id: 3,
      icon: <LoanUsersIcon />,
      label: 'Users With loans',
      value: users.length,
      color: '#feefec',
    },
    {
      id: 4,
      icon: <SavingUsersIcon />,
      label: 'Users With saving',
      value: users.length,
      color: '#ffebf0',
    },
  ]

  return (
    <div className='info-wrapper'>
      {items.map(item=>{
        return (
          <div className='card' key={item.id}>
            <div className='icon' style={{backgroundColor: item.color}}>
              {item.icon}
            </div>
            <p>{item.label}</p>
            <span>{item.value}</span>
          </div>
        )
      })}
      
    </div>
  )
}

export default Info
