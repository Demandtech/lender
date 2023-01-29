import React from 'react'
import { ReactComponent as BriefCaseIcon } from '../../assets/svgs/briefcase.svg'
import { ReactComponent as ArrowDownIcon } from '../../assets/svgs/arrow-down.svg'
import { ReactComponent as HomeIcon } from '../../assets/svgs/home.svg'
import { NavLink } from 'react-router-dom'
function Sidebar() {
  return (
    <aside>
      <div className='aside-wrapper'>
        <div className='aside-item organisation'>
          <BriefCaseIcon />
          <p>Switch Organization</p>
          <ArrowDownIcon />
        </div>
        <div className='aside-item'>
          <HomeIcon />
          <p>Dashboard</p>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar