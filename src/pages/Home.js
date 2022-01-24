import React from 'react'
import Navbar from '../components/MainNavbar/Navbar'
import Header from '../components/Header'
import InfoSection from '../components/InfoSection/InfoSection'
import { homeObject1 } from '../components/InfoSection/InfoSectionData'
import { homeObject2 } from '../components/InfoSection/InfoSectionData'
import Services from '../components/Services'
import Footer from '../components/Footer'

import svg1 from '../images/svg-1.svg'
import svg2 from '../images/svg-3.svg'
import svg3 from '../images/svg-2.svg'
import svg4 from '../images/svg-4.svg'
import svg5 from '../images/svg-5.svg'
import svg6 from '../images/svg-6.svg'

export const Home = () => {
    return (
        <>
            <Navbar/>
            <Header/>
            <div id='about'>
                <InfoSection {...homeObject1} svg={ svg1 }/>
                <InfoSection {...homeObject2} svg={ svg2 }/>
            </div>
            <Services icon1={ svg3 } icon2={ svg4 } icon4={ svg6 } icon3={svg5}/>
            <Footer/>
        </>
    )
}

export default Home
