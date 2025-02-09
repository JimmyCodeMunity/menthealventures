import React from 'react'
import * as motion from "motion/react-client"

const Hero = () => {
    return (
        <div className="w-full h-full bg-transparent">
            
            <section className="bg-transparent w-full md:grid flex flex-col space-y-4 grid-cols-2 max-w-7xl mx-auto">


                <div class="relative flex flex-row items-center pt-12 bg-transparent sm:pt-16 lg:py-36 xl:py-48">
                    {/* <div class="absolute inset-0 hidden lg:block">
                            <img class="object-cover object-right w-full h-full" src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/4/background.png" alt="" />
                        </div> */}



                    <div class="relative mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.4,
                                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                            }}
                            class="max-w-lg mx-auto text-center lg:mx-0 lg:max-w-md lg:text-left">
                            <p class="text-base font-bold text-neutral-300">Use “CARE#NOW” coupon to get 40% flat discount</p>
                            <h1 class="mt-3 text-4xl font-bold text-white sm:mt-8 sm:text-5xl xl:text-7xl">Your <span className="text-transparent text-white">Mental</span> health  🧠  is worth taking care of.</h1>

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
                            rounded-full
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
                            hover:bg-[#724B62]
                            hover:text-white
                            focus:ring-offset-[#FFE942]
                        "
                                    role="button"
                                >
                                    Get Started
                                </a>
                            </div>
                        </motion.div>


                    </div>




                </div>


                <div className="w-full h-full flex flex-row justify-center items-center">
                    <motion.div
                        // whileHover={{ scale: 1.2 }}
                        // whileTap={{ scale: 0.8 }}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 2,
                            delay: 0.5,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}
                        className="rounded-t-full overflow-hidden">
                        <img src="../images/medi2.jpg" className="rounded-t-5xl md:h-8/12 h-full" alt="" />
                    </motion.div>
                </div>
            </section>




        </div>
    )
}

export default Hero
