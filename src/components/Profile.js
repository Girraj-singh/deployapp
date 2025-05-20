import React from 'react'
import { getData } from '../services/FetchNodeServices'

const Profile = () => {

    const handleProfile  = async () => {
        const result = await getData("profile")
        console.log(result)
    }

  return (
    <div>
        <button onClick={handleProfile}>
            Profile
        </button>
    </div>
  )
}

export default Profile