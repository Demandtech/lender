import React from 'react'
import { ReactComponent as ViewIcon } from '../../assets/svgs/view-icon.svg'
import { ReactComponent as BlackListIcon } from '../../assets/svgs/blacklist-icon.svg'
import { ReactComponent as ActivateIcon } from '../../assets/svgs/activate-icon.svg'
import { Link } from 'react-router-dom'

function Menu({id}) {
 
  return (
    <div className='menu-wrapper' id={id}>
      <Link to={`/users/${id}`}>
        <ViewIcon />
         <span>View Details</span>
      </Link>
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
