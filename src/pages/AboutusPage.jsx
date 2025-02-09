import React from 'react'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'


const AboutusPage = () => {
    const navcolor = "bg-black"
    return (
        <div>
            
            <div className="w-full bg-black">
                <Banner />
                <Navbar navcolor={navcolor} />
            </div>

        </div>
    )
}

export default AboutusPage
