import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Feed = () => {
  const navigate = useNavigate()
  const user = useSelector(store=>store.user)
  return (
    <div>

      Feeds
    </div>
  )
}

export default Feed
