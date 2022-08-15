import React from 'react'

const ProfileCard = (props) => {
  return (
    <div className='hidden md:flex flex-col flex-none justify-center items-center bg-white drop-shadow-lg w-[250px] h-[300px] py-5 px-4 rounded-lg'>
      <img src={props.user?props.user.photoURL:"/gdsc-avatar.png"} className="flex-none rounded-full w-24 h-24"></img>
      <p className='text-2xl text-black pt-2'>{props.user.displayName}</p>
      <p className='text-lg text-gray-400 pb-2'>{props.user.email}</p>
      <img src="/gdsc-mvj-logo.svg" className="flex-none w-15"/>
    </div>
  )
}

export default ProfileCard