import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
//outlet hame dynamic changes krne deta h yaha pe
//Outlet is not a hook. It is a React Router component that acts as a placeholder for rendering child routes inside a parent route.

function Layout() {
  return (
    <div>
      <Header />
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
