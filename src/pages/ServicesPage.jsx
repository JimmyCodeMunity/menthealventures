import React from 'react'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import Programs from '../components/Programs'

const ServicesPage = () => {
    return (
        <div>
            <div className="w-full bg-black">
                <Banner />
                <Navbar />
            </div>
            <Programs/>
            
        </div>
    )
}

export default ServicesPage
