import React from "react";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-brand-blue uppercase tracking-wide">
              About Luxford Estate
            </h1>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Elevating the luxury real estate experience with exclusive listings and exceptional service.
            </p>
          </div>

          {/* Content Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* About Description */}
            <div className="bg-white p-8 shadow-lg rounded-xl border border-gray-200">
              <h2 className="text-3xl font-semibold text-brand-blue mb-6">
                Who We Are
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Luxford Estate is a premier platform specializing in luxury real estate across India and beyond. 
                We connect discerning buyers and renters with properties that perfectly match their lifestyle needs.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Since our establishment in 2022, we have built a strong reputation in the high-end property market, 
                offering personalized services and access to exclusive listings not found elsewhere.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our expert team is dedicated to making your property journey smooth, whether you are buying, selling, or renting.
              </p>
            </div>

            {/* Services Section */}
            <div className="bg-brand-blue text-white p-8 shadow-lg rounded-xl">
              <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
              <ul className="space-y-3 text-lg">
                <li className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-white rounded-full"></span>
                  Premium property listings across India
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-white rounded-full"></span>
                  Personalized property search assistance
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-white rounded-full"></span>
                  Professional photography & listing management
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-white rounded-full"></span>
                  Property valuation services
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-white rounded-full"></span>
                  Rental management solutions
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-white rounded-full"></span>
                  Legal guidance for property transactions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
