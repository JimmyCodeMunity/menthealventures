import React from 'react'

const Hero = () => {
    return (
        <div className="w-full h-full bg-transparent">
                <section className="bg-transparent w-full md:grid flex flex-col space-y-4 grid-cols-2 max-w-7xl mx-auto">


                    <div class="relative flex flex-row items-center pt-12 bg-transparent sm:pt-16 lg:py-36 xl:py-48">
                        {/* <div class="absolute inset-0 hidden lg:block">
                            <img class="object-cover object-right w-full h-full" src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/4/background.png" alt="" />
                        </div> */}

                        

                        <div class="relative mx-auto">
                            <div class="max-w-lg mx-auto text-center lg:mx-0 lg:max-w-md lg:text-left">
                                <p class="text-base font-bold text-neutral-300">Use “FIT40” coupon to get 40% flat discount</p>
                                <h1 class="mt-3 text-4xl font-bold text-white sm:mt-8 sm:text-5xl xl:text-7xl">Your mental health is work taking care of.</h1>

                                <div class="mt-8 sm:mt-12">
                                    <a
                                        href="#"
                                        title=""
                                        class="
                            inline-flex
                            items-center
                            justify-center
                            px-8
                            py-3
                            text-base
                            font-bold
                            leading-7
                            text-gray-900
                            transition-all
                            duration-200
                            bg-white
                            border border-transparent
                            rounded-md
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
                            hover:bg-gray-600
                            focus:ring-offset-[#FFE942]
                        "
                                        role="button"
                                    >
                                        Get Started
                                    </a>
                                </div>
                            </div>

                            
                        </div>



                        
                    </div>


                    <div className="w-full h-full flex flex-row justify-center items-center">
                            <div className="rounded-t-full overflow-hidden">
                            <img src="../images/medi2.jpg" className="rounded-t-5xl" alt="" />
                            </div>
                        </div>
                </section>




            </div>
    )
}

export default Hero
