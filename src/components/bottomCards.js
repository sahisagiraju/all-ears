import React from 'react';
import './bottomCards.css';

function BottomCards() {
  return (
    <div class="parent">
        <div class="sectionTitle"><h1>Resources</h1></div>
        <div class="resources">
            <div class="card">
                <h3>What is ABA?</h3>
                <p>Applied Behavior Analysis (ABA) is a science-based approach to understanding and improving behavior. It is a widely
                    recognized and effective treatment for individuals with autism, focusing on teaching meaningful skills and reducing 
                    challenging behaviors. ABA therapy is personalized to each child to ensure progress and success in their everyday lives.
                </p>
                <div class="learnMore">
                    <a href="https://tillytherapy.com/browse/kimberly-gorham">Learn More</a>
                </div>
            </div>

            <div class="card">
                <h3>Parents and Clients</h3>
                <p>We understand that navigating an autism diagnosis can be overwhelming. Here are some helpful resources to support you on this journey: </p>

                <ul>
                    <li><a href="https://www.autismspeaks.org">Autism Speaks - Parents Guide to Autism</a></li>
                    <li><a href="https://www.txautism.org">Texas Autism Advocacy Organizations</a></li>
                    <li><a href="https://www.helpguide.org/mental-health/autism/helping-your-child-with-autism-thrive">Tips for Supporting Your Child's Development</a></li>
                    <li><a href="https://aane.org/services-programs/group-services/support-groups-community-connection/">Community Support Groups</a></li>
                </ul>
                
                <div class="learnMore">
                    <a href="https://tillytherapy.com/browse/kimberly-gorham">Learn More</a>
                </div>
            </div>
        </div>

        <div class="sectionTitle"><h1>Tilly Therapy</h1></div>
        <div class="wideCard">
            <p>Continue to Tilly Therapy to book your appointment and learn more about All Ears!</p>
            <a href="https://tillytherapy.com/browse/kimberly-gorham">Tilly Therapy</a>
        </div>
    </div>
  );
}

export default BottomCards;
