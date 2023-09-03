
import React from 'react'
import "./App.css"
import Header from './Component/Header'
import Hero from './Component/Hero'
import Card from './Component/Card'
 import Daily from './Component/Daily'
import Best from './Best'

import Customer from './Customer'
import Contact from './Contact'

import Foot from './Foot'
import Top from './Component/Top'
import Features from './Component/Features'
import { Companies } from './Component/Companies'



function App() {
  return (
    <>
    <Top/>
   <Header/>
   <Hero/>
   <Features/>
    <Card/> 
 
    <Daily/> 
   <Best/>
  
   <Customer/>
   
   <Companies/>
  <Contact/>
  
  <Foot/>
   </>
  )
}

export default App