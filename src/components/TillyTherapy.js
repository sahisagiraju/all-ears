import React from 'react';

function TillyTherapy() {
  return (
    <div className="w-full">
        <div className="text-center font-inter"><h1>Tilly Therapy</h1></div>
        <div className="bg-purple-200 w-4/5 mx-auto h-[100px] mb-5 rounded-lg">
            <p className="text-center font-inter p-2.5">Continue to Tilly Therapy to book your appointment and learn more about All Ears!</p>
            <a 
              href="https://tillytherapy.com/browse/kimberly-gorham" 
              className="inline-block bg-purple-500 text-white border-none py-2 px-4 rounded-md font-semibold cursor-pointer font-inter no-underline mx-auto block w-[200px]"
            >
              Get Started with ABA
            </a>
        </div>
    </div>
  );
}

export default TillyTherapy;
