import React, { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../utils/constants'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/userSlice'
const Body = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userData = useSelector(store=>store.user)
  const fetchUser = async() => {
      try{
        if(userData) return 
        const res = await axios.get(BASE_URL+'/profile/view',{
            withCredentials:true
          })
          dispatch(addUser(res.data))
      }
      catch(err){
        if(err.status === 401){
          navigate('/login')
        }
        else{
          console.error(err.message)
        }
      }
  }

  useEffect(()=>{
    fetchUser()
  },[])

  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Body
