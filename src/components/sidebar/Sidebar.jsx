import React from 'react'
import { ReactComponent as BriefCaseIcon } from '../../assets/svgs/briefcase.svg'
import { ReactComponent as ArrowDownIcon } from '../../assets/svgs/arrow-down.svg'
import { ReactComponent as HomeIcon } from '../../assets/svgs/home.svg'
import { customer, business, settings } from './sidebarData'
import { useGlobalContext } from '../../context'
function Sidebar() {
  return (
    <aside>
      <div className='aside-wrapper'>
        <div className='aside-item organisation'>
          <BriefCaseIcon />
          <p>Switch Organization</p>
          <ArrowDownIcon className='arrow-down' />
        </div>
        <div className='aside-item dashboard-btn'>
          <HomeIcon />
          <p>Dashboard</p>
        </div>
        <Sub content={customer} title='Customer'/>
        <Sub content={business} title='Business'/>
        <Sub content={settings} title={'Setting'}/>
      </div>
    </aside>
  )
}

const Sub = ({ content, title }) => {

  return (
    <div className='sub-item-wrapper'>
      <h6>{title}</h6>
      <ul>
        {content.map((item) => {
          return (
            <li key={item.id} className='aside-item'>
              {item.icon}
              <p>{item.text}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Sidebar
