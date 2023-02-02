import React, { useEffect } from 'react'
import { useState } from 'react'
import { useGlobalContext } from '../../context'
import { ReactComponent as CalenderIcon } from '../../assets/svgs/calendar-icon.svg'
import Select from 'react-select'

const Filter = () => {
  const { users } = useGlobalContext()
  const [options, setOptions] = useState([])
  const [filters, setFilters] = useState({})

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
      <InputFilter label={'user'} />
      <InputFilter label={'email'} />
      <DateFilter />
      <InputFilter label={'phone Number'} />
      <InputFilter label={'status'} />
      <div className='buttons-wrapper' >
        <div className='reset-btn'>
          <Button label={'reset'} />
        </div>
        <div className='filter-btn'>
          <Button label={'filter'} />
        </div>
      </div>
    </div>
  )
}

const OrganizationFilter = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(null)

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

const InputFilter = ({ label }) => {
 const {handleChange} = useGlobalContext()

  return (
    <div className={label} style={{ marginBottom: '20px' }}>
      <label htmlFor='username'>{label}</label>
      <input
        className='username-input'
        type='text'
        id='username'
        name={label}
        placeholder={label}
        onChange={(e)=>handleChange(e)}
      />
    </div>
  )
}

const DateFilter = () => {
  return (
    <div className='date' style={{ marginBottom: '20px' }}>
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

const Button = ({ label }) => {
  return <button className={label}>{label}</button>
}

export default Filter
