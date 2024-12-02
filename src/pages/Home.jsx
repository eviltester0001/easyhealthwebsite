import React from 'react'
import Header from '../components/Header'
import Speciality from '../components/Speciality'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'

const home = () => {
  return (
    <div>
       <Header/>
       <Speciality/>
       <TopDoctors/>
       <Banner/>
    </div>
  )
}

export default home