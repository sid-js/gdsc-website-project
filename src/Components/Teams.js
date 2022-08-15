import React from 'react'
import { TeamHero,TechTeam,DesignTeam,AndroidTeam,SocialTeam,CommunityTeam,JoinTeam } from "./Teams/index"

const Teams = () => {
  return (
    <div>
      <TeamHero/>
      <TechTeam/>
      <DesignTeam/>
      <AndroidTeam/>
      <SocialTeam/>
      <CommunityTeam />
      <JoinTeam />
    </div>
  )
}

export default Teams