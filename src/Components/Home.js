import React from 'react'
import Hero from './Hero'
import BriefSection from './BriefSection'
import Eventssection from './Eventssection'
import CardSection from "./CardsSection"
import JoinUs from './JoinUs'
const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center content-center m-auto justify-items-center">
        <Hero/>
        <BriefSection/>
        <CardSection/>
        <Eventssection/>
        <JoinUs/>
    </div>
  )
}

export default Home