import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { AppContext, useGlobal } from './context'

const Home = () => {
  const data1 = useContext(AppContext)
  const data2 = useGlobal()
  const {openSidebar, openModal} = useGlobal()

  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars/>
      </button>
      <button className="btn" onClick={openModal}>show modal</button>
    </main>
  )
}

export default Home
