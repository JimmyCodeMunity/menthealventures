import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import Faq from '../components/Faq'
import GetApp from '../components/GetApp'
import Subscribe from '../components/Subscribe'
import Stats from '../components/Stats'
import Services from '../components/Services'
import ContactUs from '../components/ContactUs'
import Team from '../components/Team'

const HomePage = () => {
    return (
        <div>
            <div id="hero">
                <div className="cover">
                    <Navbar />

                    <Hero />
                    <Services />
                    {/* <Stats /> */}
                    
                    <Testimonials />
                    
                    <Stats/>
                    <Faq />
                    <Team/>
                    <GetApp />
                    <Subscribe />
                    <ContactUs/>
                    <Footer />
                </div>

            </div>
        </div>
    )
}

export default HomePage
