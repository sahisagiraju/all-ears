import React from 'react';

function BottomCards() {
  return (
    <div className="w-full">
        <div className="text-center font-inter"><h1>Resources</h1></div>
        <div className="flex justify-between items-center">
            <div className="bg-purple-200 w-[30%] h-[400px] mb-5 rounded-lg mx-[10%]">
                <h3 className="font-inter text-center">What is ABA?</h3>
                <p className="text-center p-2.5">Applied Behavior Analysis (ABA) is a science-based approach to understanding and improving behavior. It is a widely
                    recognized and effective treatment for individuals with autism, focusing on teaching meaningful skills and reducing 
                    challenging behaviors. ABA therapy is personalized to each child to ensure progress and success in their everyday lives.
                </p>
                <div className="bg-purple-500 border-none py-2 px-4 rounded-md font-semibold cursor-pointer font-inter text-center mx-auto w-[30%]">
                    <a href="https://tillytherapy.com/browse/kimberly-gorham" className="text-white no-underline">Learn More</a>
                </div>
            </div>
            <div className="bg-purple-200 w-[30%] h-[400px] mb-5 rounded-lg mx-[10%]">
                <h3 className="font-inter text-center">Parents and Clients</h3>
                <p className="text-center p-2.5">We understand that navigating an autism diagnosis can be overwhelming. Here are some helpful resources to support you on this journey: </p>

                <ul className="list-inside text-center pr-[50px]">
                    <li className="font-inter"><a href="https://www.autismspeaks.org" className="text-black">Autism Speaks - Parents Guide to Autism</a></li>
                    <li className="font-inter"><a href="https://www.txautism.org" className="text-black">Texas Autism Advocacy Organizations</a></li>
                    <li className="font-inter"><a href="https://www.helpguide.org/mental-health/autism/helping-your-child-with-autism-thrive" className="text-black">Tips for Supporting Your Child's Development</a></li>
                    <li className="font-inter"><a href="https://aane.org/services-programs/group-services/support-groups-community-connection/" className="text-black">Community Support Groups</a></li>
                </ul>
                
                <div className="bg-purple-500 border-none py-2 px-4 rounded-md font-semibold cursor-pointer font-inter text-center mx-auto w-[30%]">
                    <a href="https://tillytherapy.com/browse/kimberly-gorham" className="text-white no-underline">Learn More</a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default BottomCards;
