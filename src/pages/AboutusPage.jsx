import React from 'react'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Footer from '../components/Footer'


const AboutusPage = () => {
    const navcolor = "bg-black"
    return (
        <div>
            
            <div className="w-full bg-black">
                <Banner />
                <Navbar navcolor={navcolor} />
            </div>
            <About/>
            <Footer/>

        </div>
    )
}

export default AboutusPage
