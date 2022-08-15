import React from 'react'
import ContentLoader from 'react-content-loader'

const ProfileLoader = props => {
  return (
    <ContentLoader 
    speed={2}
    width={250}
    height={300}
    viewBox="0 0 250 300"
    backgroundColor="#ffffff"
    foregroundColor="#f0f0f0"
    {...props}
  >
    <circle cx="128" cy="93" r="50" /> 
    <rect x="47" y="158" rx="8" ry="8" width="158" height="31" /> 
    <rect x="28" y="215" rx="12" ry="12" width="195" height="57" /> 
    <rect x="2" y="1" rx="0" ry="0" width="7" height="361" /> 
    <rect x="4" y="2" rx="0" ry="0" width="280" height="9" /> 
    <rect x="241" y="7" rx="0" ry="0" width="9" height="317" /> 
    <rect x="3" y="292" rx="0" ry="0" width="243" height="8" />
  </ContentLoader>
  )
}


export default ProfileLoader