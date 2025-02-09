import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const TestCarousel = () => {
    return (
        <div className="flex justify-center items-center py-8">
            <Carousel 
                autoPlay 
                infiniteLoop 
                interval={3000} 
                showThumbs={false} 
                showStatus={false} 
                className="w-full h-full shadow-lg rounded-lg overflow-hidden"
            >
                <div className="p-4 rounded-lg space-y-5">
                    <img src="../images/tele.png" className="w-full h-full object-cover mx-auto rounded-lg" alt="Therapy 1" />
                    <p className="legend text-lg font-semibold text-gray-800">Online Sessions</p>
                </div>
                <div className="p-4 rounded-lg">
                    <img src="../images/thrapy1.jpg" className="w-full h-full object-cover mx-auto rounded-lg" alt="Therapy 2" />
                    <p className="legend text-lg font-semibold text-gray-800">Physical Therapy</p>
                </div>
                <div className="p-4 rounded-lg">
                    <img src="../images/mypic.jpg" className="w-full h-full object-cover mx-auto rounded-lg" alt="Therapy 3" />
                    <p className="legend text-lg font-semibold text-gray-800">Resources</p>
                </div>
            </Carousel>
        </div>
    );
}

export default TestCarousel;
