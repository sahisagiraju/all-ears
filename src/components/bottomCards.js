import React from 'react';


// BottomCards Component
export default function BottomCards() {
    return (
      <div id="resources" className="w-full px-6 py-12 font-inter">
        <h1 className="text-4xl font-bold text-center mb-8">Resources</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* What is ABA Card */}
          <div className="bg-purple-200 rounded-lg shadow p-6">
            <h3 className="text-2xl font-semibold text-left mb-4">What is ABA?</h3>
            <p className="text-left mb-6">
              Applied Behavior Analysis (ABA) is a science-based approach to understanding and improving behavior. It is a widely
              recognized and effective treatment for individuals with autism, focusing on teaching meaningful skills and reducing
              challenging behaviors. ABA therapy is personalized to each child to ensure progress and success in their everyday lives.
            </p>
            <div className="flex justify-center">
              <a
                href="https://tillytherapy.com/browse/kimberly-gorham"
                className="bg-purple-500 text-white py-3 px-6 rounded-md font-semibold hover:bg-purple-600 transition"
              >
                Learn More
              </a>
            </div>
          </div>
  
          {/* Parents and Clients Card */}
          <div className="bg-purple-200 rounded-lg shadow p-6">
            <h3 className="text-2xl font-semibold text-left mb-4">Parents and Clients</h3>
            <p className="text-left mb-6">
              We understand that navigating an autism diagnosis can be overwhelming. Here are some helpful resources to support you on this journey:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2 text-left">
              <li><a href="https://www.autismspeaks.org" className="text-gray-800 hover:underline">Autism Speaks - Parents Guide to Autism</a></li>
              <li><a href="https://www.txautism.org" className="text-gray-800 hover:underline">Texas Autism Advocacy Organizations</a></li>
              <li><a href="https://www.helpguide.org/mental-health/autism/helping-your-child-with-autism-thrive" className="text-gray-800 hover:underline">Tips for Supporting Your Child's Development</a></li>
              <li><a href="https://aane.org/services-programs/group-services/support-groups-community-connection/" className="text-gray-800 hover:underline">Community Support Groups</a></li>
            </ul>
            <div className="flex justify-center">
              <a
                href="https://tillytherapy.com/browse/kimberly-gorham"
                className="bg-purple-500 text-white py-3 px-6 rounded-md font-semibold hover:bg-purple-600 transition"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  