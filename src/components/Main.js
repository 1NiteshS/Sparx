import React from 'react';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import image4 from '../images/image4.png';
import image6 from '../images/image6.png';
import image7 from '../images/image7.jpg';


import BGMI from '../images/BGMI.webp';
import ludo from '../images/ludo.png';
import quiz from '../images/quiz.png';
import poster from '../images/poster.jpg';

import Slider from "react-slick";

const Main = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <main className="container mx-auto">
      {/* Home Section */}
      <section id="home" className="my-10 px-4">
        <img src={image1} alt="College Event" className="w-full h-60 object-cover rounded-lg mb-4" />
        <p className="text-center mb-6">
          Welcome to our college event website. Here you can find all the information about events.
        </p>
        {/* Slider Placeholder */}
        <div className="flex overflow-x-auto space-x-4 my-4">
          <img src={image2} alt="Slide 1" className="w-64 h-40 object-cover rounded-lg" />
          <img src={image3} alt="Slide 2" className="w-64 h-40 object-cover rounded-lg" />
          <img src={image4} alt="Slide 3" className="w-64 h-40 object-cover rounded-lg" />
          <img src={image4} alt="Slide 3" className="w-64 h-40 object-cover rounded-lg" />
          <img src={image4} alt="Slide 3" className="w-64 h-40 object-cover rounded-lg" />
          <img src={image4} alt="Slide 3" className="w-64 h-40 object-cover rounded-lg" />
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="my-10 flex flex-col md:flex-row items-center px-4">
  <div className="md:w-1/2">
    <img src={image7} alt="About Us" className="w-full h-[700px] object-fit rounded-lg" /> {/* Set fixed height for the image */}
  </div>
  <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
    <h2 className="text-5xl font-bold text-center mb-4">About Us</h2> {/* Increased text size */}
    <p className="text-lg font-bold mb-4"> {/* Increased text size and made it bold */}
      The Department of Master Of Computer Application was established in the academic year 2007-08. The department helps students emphasize how to "think" of a solution to a problem and how to identify an efficient solution. It is blessed with dedicated, hardworking, and well-qualified faculty committed to achieving the all-round development of students. It functions with the goal of providing the world with competent and quality computer professionals. Promoting technological advancement through knowledge dissemination is what our MCA department believes in.
    </p>
  </div>
</section>

      {/* Events Section */}
      <section id="events" className="my-10 px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Events</h2>
        
        {/* Slider for Small Screens */}
        <div className="block md:hidden">
          <Slider {...sliderSettings}>
            <div className="bg-white rounded-lg shadow-lg p-4">
                <img src={BGMI} alt="Event" className="w-full h-40 object-fit rounded-lg mb-4" />
                <h3 className="text-xl font-semibold">BGMI</h3>
                <p className="text-gray-600">Date: 20/09/2024 - 21/09/2024</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
                <img src={ludo} alt="Event" className="w-full h-40 object-fit rounded-lg mb-4" />
                <h3 className="text-xl font-semibold">LUDO</h3>
                <p className="text-gray-600">Date: 20/09/2024 - 21/09/2024</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
                <img src={quiz} alt="Event" className="w-full h-40 object-fit rounded-lg mb-4" />
                <h3 className="text-xl font-semibold">QUIZ Competition</h3>
                <p className="text-gray-600">Date: 20/09/2024 - 21/09/2024</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
                <img src={poster} alt="Event" className="w-full h-40 object-fit rounded-lg mb-4" />
                <h3 className="text-xl font-semibold">Poster Making</h3>
                <p className="text-gray-600">Date: 20/09/2024 - 21/09/2024</p>
            </div>
          </Slider>
        </div>

        {/* Grid for Larger Screens */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <img src={BGMI} alt="Event" className="w-full h-40 object-fit rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">BGMI</h3>
            <p className="text-gray-600">Date: 20/09/2024 - 21/09/2024</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4">
            <img src={ludo} alt="Event" className="w-full h-40 object-fit rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">LUDO</h3>
            <p className="text-gray-600">Date: 20/09/2024 - 21/09/2024</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4">
            <img src={quiz} alt="Event" className="w-full h-40 object-fit rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">QUIZ Competition</h3>
            <p className="text-gray-600">Date: 20/09/2024 - 21/09/2024</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4">
            <img src={poster} alt="Event" className="w-full h-40 object-fit rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">Poster Making</h3>
            <p className="text-gray-600">Date: 20/09/2024 - 21/09/2024</p>
          </div>
        </div>
      </section>

      {/* Coordinator Section */}
      <section id="coordinates" className="my-10 px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Coordinators</h2>

        {/* Slider for Small Screens */}
        <div className="block md:hidden">
          <Slider {...sliderSettings}>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <img src={image6} alt="Coordinator" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold">Coordinator Name 1</h3>
              <p className="text-gray-600">Contact: 123-456-7890</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <img src={image6} alt="Coordinator" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold">Coordinator Name 2</h3>
              <p className="text-gray-600">Contact: 123-456-7890</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <img src={image6} alt="Coordinator" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold">Coordinator Name 3</h3>
              <p className="text-gray-600">Contact: 123-456-7890</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <img src={image6} alt="Coordinator" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold">Coordinator Name 4</h3>
              <p className="text-gray-600">Contact: 123-456-7890</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <img src={image6} alt="Coordinator" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold">Coordinator Name 4</h3>
              <p className="text-gray-600">Contact: 123-456-7890</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <img src={image6} alt="Coordinator" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold">Coordinator Name 4</h3>
              <p className="text-gray-600">Contact: 123-456-7890</p>
            </div>
          </Slider>
        </div>

        {/* Grid for Larger Screens */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <img src={image6} alt="Coordinator" className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">Coordinator Name 1</h3>
            <p className="text-gray-600">Contact: 123-456-7890</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4">
            <img src={image6} alt="Coordinator" className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">Coordinator Name 2</h3>
            <p className="text-gray-600">Contact: 123-456-7890</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4">
            <img src={image6} alt="Coordinator" className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">Coordinator Name 3</h3>
            <p className="text-gray-600">Contact: 123-456-7890</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4">
            <img src={image6} alt="Coordinator" className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">Coordinator Name 4</h3>
            <p className="text-gray-600">Contact: 123-456-7890</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4">
            <img src={image6} alt="Coordinator" className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">Coordinator Name 4</h3>
            <p className="text-gray-600">Contact: 123-456-7890</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4">
            <img src={image6} alt="Coordinator" className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">Coordinator Name 4</h3>
            <p className="text-gray-600">Contact: 123-456-7890</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
    <footer className="bg-gray-800 text-white py-4 mt-10 w-full px-4">
    <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
        <p className="mb-1">If you have any questions, please reach out to us at:</p>
        <p>Email: info@collegeevents.com</p>
        <p>Phone: 123-456-7890</p>
    </div>
    </footer>
    </main>
  );
};

export default Main;
