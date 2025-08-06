import React from "react";
import { Link } from "react-router-dom";

// Image imports - replace with your actual images
import Transformer1 from "/transformer1.avif";
import Transformer2 from "/transformer2.webp";
import Transformer3 from "/transformer3.avif";
import Transformer4 from "/transformer4.jpeg";
import Transformer5 from "/transformer5.jpeg";
import Transformer6 from "/transformer6.avif";

const TransformersPage: React.FC = () => {
  // Transformer data from 100kVA to 6000kVA
  const transformers = [
    { id: "t-1000", kva: 1000, image: Transformer1 },
    { id: "t-2000", kva: 2000, image: Transformer2 },
    { id: "t-3000", kva: 3000, image: Transformer3 },
    { id: "t-4000", kva: 4000, image: Transformer4 },
    { id: "t-5000", kva: 5000, image: Transformer5 },
    { id: "t-6000", kva: 6000, image: Transformer6 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Power Transformers Collection (1000kVA - 6000kVA)
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {transformers.map((transformer) => (
            <div
              key={transformer.id}
              className="rounded-xl p-6 shadow-lg transition-transform duration-300 hover:scale-[1.02] bg-white dark:bg-gray-800"
            >
              {/* Transformer Image */}
              <div className="w-full h-48 mb-4 rounded-xl overflow-hidden">
                <img
                  src={transformer.image}
                  alt={`${transformer.kva}kVA Power Transformer`}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl font-semibold mb-2">
                Transformer Model {transformer.id.toUpperCase()}
              </h3>

              <p className="mb-4 line-clamp-2 dark:text-gray-300">
                {transformer.kva >= 1000
                  ? "Heavy-duty power transformer"
                  : "Distribution transformer"}
                with advanced cooling technology.
              </p>

              <div className="flex justify-between items-center">
                <span className="font-mono dark:text-gray-400">
                  {transformer.kva}kVA
                </span>

                <Link to={`/transformers/${transformer.id}`}>
                  <button className="px-4 py-2 rounded-lg font-medium bg-red-500 hover:bg-red-600 text-white transition-colors dark:bg-red-600 dark:hover:bg-red-700">
                    Specifications
                  </button>
                </Link>
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

export default TransformersPage;
