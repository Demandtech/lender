import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {useGlobalContext} from '../context'


const url = 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/'

function UserDetail() {
 const {id}= useParams()
 const { FetchSingleUser } = useGlobalContext()
  
 console.log(id)

  useEffect(()=> {
    FetchSingleUser(`${url}${id}`)
  }, [id])
  return (
    <section style={{marginLeft: '250px', marginTop: '72px'}}>UserDetail</section>
  )
}

export default UserDetail