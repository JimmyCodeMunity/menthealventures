import React, { useState } from 'react'
import { navlinks } from '../constants'
import { Link } from 'react-router-dom'
import * as Icon from 'react-feather'



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className="bg-transparent w-full sm:py-10 py-6 sm:px-16 px-6 max-w-7xl mx-auto">
            
            {/* <div className="bg-black flex w-full p-5"></div> */}
            <div className="w-full flex flex-row items-center justify-between">
                <div>
                    <a href="">
                        <h1 className="text-2xl font-semibold text-white">Mentheal Ventures</h1>
                    </a>
                </div>


                {/* navlinks */}
                <div className="hidden md:block">
                    <ul className="flex space-x-4 items-center">
                        {
                            navlinks.map((navitem) => {
                                return (
                                    <li className="text-white">
                                        <Link to={navitem.path}>{navitem.name}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="md:hidden block">
                    {
                        isOpen ? (
                            <Icon.X onClick={handleMenu} color="white" size={30} />
                        ) : (
                            <Icon.Menu onClick={handleMenu} color="white" size={30} />
                        )
                    }
                </div>

                {
                    isOpen &&
                    <div className="md:hidden bg-white absolute top-14 w-[200px] right-10 z-10 rounded-sm p-3">
                    <ul className="flex flex-col space-y-2 items-start">
                        {
                            navlinks.map((navitem) => {
                                return (
                                    <li className="text-black text-sm">
                                        <Link to={navitem.path}>{navitem.name}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                }

                <div className="hidden md:block">
                    <a href="">
                        <button className="bg-white flex items-center space-x-2 p-2 text-black rounded-full border border-1 border-black hover:bg-yellow-500 hover:text-white hover:border-yellow-500">

                            Get Started
                            <Icon.ArrowRight className="text-black hover:text-white" size={20} />
                        </button>
                    </a>
                </div>
            </div>


        </div>
    )
}

export default Navbar

