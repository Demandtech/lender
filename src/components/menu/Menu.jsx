import React from 'react'
import { ReactComponent as ViewIcon } from '../../assets/svgs/view-icon.svg'
import { ReactComponent as BlackListIcon } from '../../assets/svgs/blacklist-icon.svg'
import { ReactComponent as ActivateIcon } from '../../assets/svgs/activate-icon.svg'
function Menu() {
  return (
    <div className='menu-wrapper'>
      <button>
        <ViewIcon />
         <span>View Details</span>
      </button>
      <button>
        <BlackListIcon />
         <span>Blacklist User</span>
      </button>
      <button>
        <ActivateIcon />
         <span>Activate User</span>
      </button>
    </div>
  )
}

export default Menu
