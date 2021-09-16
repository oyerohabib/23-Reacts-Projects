import React from 'react'
import Charts from '../../components/charts/Charts'
import FeaturedInfo from '../../components/featuredinfo/featuredInfo'
import "./home.css"

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo/>
      <Charts/>
    </div>
  )
}
