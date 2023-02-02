import React, { useEffect } from 'react'
import { useState } from 'react'
import { useGlobalContext } from '../../context'
import { ReactComponent as CalenderIcon } from '../../assets/svgs/calendar-icon.svg'
import Select from 'react-select'

const Filter = () => {
  const { users } = useGlobalContext()
  const [options, setOptions] = useState([])
  const optionsTest = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ]

  useEffect(() => {
    users.map((user) => {
      setOptions((prev) => {
        return [...prev, { value: user.orgName, label: user.orgName }]
      })
    })
  }, [])

  return (
    <div className='filter-wrapper'>
      <OrganizationFilter options={options} />
      <InputFilter label={'User'} />
      <InputFilter label= {'Email'} />
      <DateFilter />
      <InputFilter label={'Phone Number'}/>
      <InputFilter label={'Status'}/>
      <div className="buttons-wrapper">
           <Button label={'reset'}/>
           <Button label={'filter'}/>
      </div>
    </div>
  )
}

const OrganizationFilter = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(null)
  const { orgFilter } = useGlobalContext()

  return (
    <div className='org'>
      <label htmlFor='org'>Organization</label>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </div>
  )
}

const InputFilter = ({label}) => {
  return (
    <div className={label} style={{marginBottom:'20px'}}>
      <label htmlFor='username'>{label}</label>
      <input
        className='username-input'
        type='text'
        id='username'
        placeholder={label}
      />
    </div>
  )
}

// const EmailFilter = () => {
//   return (
//     <div className='email'>
//       <label htmlFor='email'>Email</label>
//       <input
//         className='username-input'
//         type='text'
//         id='email'
//         placeholder='Email'
//       />
//     </div>
//   )
// }

const DateFilter = () => {
  return (
    <div className='date' style={{marginBottom:'20px'}}>
      <label htmlFor='date'>Date</label>
      <div className='date'>
        <input
          className='username-input'
          type='text'
          id='date'
          placeholder='Date'
        />
        <div className='calendar'>
          <CalenderIcon />
        </div>
      </div>
    </div>
  )
}


const Button = ({label})=> {
 return (
  <button className={label}>
     {label} 
  </button>
 )
}

export default Filter
