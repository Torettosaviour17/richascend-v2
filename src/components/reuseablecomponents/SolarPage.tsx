import React from "react";
import { Link } from "react-router-dom";

const SolarPage: React.FC = () => {
  const solutions = [
    {
      type: "Residential",
      description:
        "Home solar systems with battery storage and smart energy management",
      features: ["3-10kW systems", "25-year warranty", "Mobile monitoring"],
    },
    {
      type: "Commercial",
      description: "Rooftop solar solutions for businesses and institutions",
      features: ["10-100kW systems", "Peak shaving", "Energy credits"],
    },
    {
      type: "Industrial",
      description:
        "Large-scale solar installations for manufacturing facilities",
      features: ["100kW-5MW", "Hybrid systems", "Demand control"],
    },
    {
      type: "Utility Scale",
      description: "Solar farms and grid-scale renewable energy solutions",
      features: ["5MW+ installations", "Grid integration", "PPA options"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Solar Energy Solutions
        </h1>

        <div className="mb-12 p-6 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-xl dark:from-blue-700 dark:to-cyan-800">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Sustainable Energy for Every Need
          </h2>
          <p className="max-w-4xl text-lg">
            Our solar products deliver industry-leading efficiency with 25-year
            performance guarantees.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl bg-white dark:bg-gray-800"
            >
              <div className="flex flex-col md:flex-row">
                <div className="bg-gradient-to-br from-yellow-300 to-orange-500 w-16 h-16 rounded-lg mb-4 md:mb-0 md:mr-6 flex items-center justify-center">
                  <span className="text-2xl">☀️</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    {solution.type}
                  </h3>
                  <p className="mb-4 dark:text-gray-300">
                    {solution.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-2 mb-4">
                    {solution.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center text-sm dark:text-gray-400"
                      >
                        <span className="mr-2">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="px-6 py-2 rounded-lg font-medium bg-blue-500 hover:bg-blue-600 text-white transition-colors dark:bg-blue-600 dark:hover:bg-blue-700">
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link to="/">
            <button className="px-6 py-3 rounded-lg font-medium transition-colors bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600">
              &larr; Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SolarPage;
