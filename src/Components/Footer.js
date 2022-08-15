import React from 'react'
import {FaInstagram,FaLinkedinIn,FaGoogle} from "react-icons/fa"

const Footer = () => {

    const socials = [
        {
            link:"https://www.instagram.com/gdscmvjce/",
            icon:<FaInstagram size="1.5em"/>,
        },
        {
            link:"https://www.linkedin.com/company/gdsc-mvjce",
            icon:<FaLinkedinIn size="1.5em"/>,
        },
        {
            link:"https://gdsc.community.dev/mvj-college-of-engineering-bengaluru/",
            icon:<FaGoogle size="1.5em"/>
        }
    ]
  return (
    <footer className="w-full bg-slate-100 h-40 drop-shadow-lg flex flex-col md:flex-row justify-center mb-0 mt-5">
        <div className="flex-col md:flex-row flex items-center justify-between px-5 min-w-[75%] max-w-[95%] md:max-w-[80%] ">
        <div className="flex flex-col justify-start align-left items-center px-6 py-4 border-b md:border-none">
        <img
          src="/gdsc-logo.svg"
          className="w-[300px] sm:w-[400px] md:w-[480px]"
          alt="GDSC"
        />
        
        <p className='text-xs md:text-sm font-sans'>MVJ College of Engineering, Bangalore</p>
        </div>
        <div>
        <div className="flex flex-row text-sm md:text-2xl justify-center py-3">
            <h2>Connect with us</h2>
        </div>
        <div className="flex flex-row py-1">
            {socials.map(social => {
                return(
                    <div className="px-3">
                    <a href={social.link}>
                    {social.icon}
                    </a>
                    </div>
                )
                
            })}
        </div>
        </div>
        
        </div>
    </footer>
  )
}

export default Footer