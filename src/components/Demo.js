import React from "react";
import Logo from "../images/logo.svg";
import Img1 from "../images/beach-work.jpg";
import cityInfo from '../data';
import Img2 from '../images/chicago.jpg'

function Demo() {
  return (
    <div className="bg-gray-100" >
    <div className="bg-gray-100">
      <div className="grid lg:grid-cols-2 2xl:grid-cols-5">
        <div className="px-8 py-12 max-w-md sm:max-w-xl mx-auto lg:px-12 lg:py-24 lg:max-w-full 2xl:col-span-2">
          <img src={Logo} alt="simple image" className="h-10"></img>
          <img
            src={Img1}
            alt="Vacation"
            className="mt-6 rounded-lg shadow-xl h-64 sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-center lg:hidden"
          ></img>
          <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl">
            You can work from anywhere.
            <div>
              <span className="text-indigo-500 mt-4">Take advantage of it</span>
            </div>
          </h1>
          <p className="mt-2 text-gray-600 text-lg sm:mt-4 sm:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className=" mt-4 sm:mt-6">
            <a
              href="#"
              className="btn"
            >
              Book your escape
            </a>
          </div>
        </div>
        <div className="hidden lg:block relative 2xl:col-span-3">
          <img
            src={Img1}
            alt="Vacation"
            className="absolute inset-0 w-full h-full object-cover object-center"
          ></img>
        </div>
      </div>
    </div>
    <div className="mt-4 max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 lg:py-18 ">
          <h2 className="text-xl text-gray-900">Popular Destinations</h2>
          <p className="mt-2 text-gray-600">
            A selection of great work-friendly cities with lots to see and explore
          </p>
          <div className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {cityInfo.map((city,i)=>(
                  <div key={i} className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
                  <img className="h-32 w-32 flex-shrink-0" src={city.imageUrl}></img>
                  <div className="px-6 py-4">
                      <h3 className="text-lg font-semibold text-gray-800">
                           {city.city}
                      </h3>
                      <p className="text-gray-600">{city.averagePrice} / night average</p>
                      <div className="mt-4">
                       <a href="" className="text-indigo-500 hover:text-indigo-400 font-semibold text-sm">
                          Explore properties
                       </a>
                      </div>
                  </div> 
              </div>

            ))}

           
         </div>    

      </div>
    </div>
  );
}

export default Demo;
