import React from 'react'
import Header from "../../components/header/Header"
import Bio from './Bio'
import Services from '../../components/Services/Services'
import DownloadApp from './DownloadApp'
import './about.css'

const About = () => {
    const headerText = "Who We Are";
    const subHeader = "Founded by musician for musicians";

  return (
    <>
    <Header headerText={headerText} subHeader={subHeader}/>
    <Bio />
    <DownloadApp />
    <Services />
    </>
  )
}

export default About