import React, { Fragment } from 'react'
import About from '../components/about'
import Articles from '../components/articles'
import Contact from '../components/contact'
import CovidPage from '../components/CovidPage'
import { Footer } from '../components/footer'
import Header from '../components/header'
import Home from '../components/home'
import Serives from '../components/services'


const HomePages = () => {
  return (
    <Fragment>
       <Header/>
       <main>
        <Home/>
        <About/>
        <Serives/>
        <CovidPage/>
        <Articles/>
        <Contact/>
        
       </main>
       <Footer/>
    </Fragment>
  )
}

export default HomePages