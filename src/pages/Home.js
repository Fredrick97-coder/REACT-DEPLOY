import React from 'react'
import GetUpdated from '../component/GetUpdated'
import JobFilter from '../component/JobFilter'
import Reviews from '../component/Review'
// import Search from '../component/Search'
import HomeShowcase from '../component/showcase'
import Sponsors from '../component/Sponsors'
import { TrendingJobs } from '../component/TrendingJobs'

export default function Home() {
  return (
    <div>
      <HomeShowcase />
      <JobFilter />
      <TrendingJobs />
      <Reviews />
      <GetUpdated />
      <Sponsors />
    </div>
  )
}
