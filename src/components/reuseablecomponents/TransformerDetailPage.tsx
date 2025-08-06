import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const TransformerDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Get model number from id
  const modelNumber = id ? parseInt(id.split("-")[1]) : 100;

  // Transformer specifications based on model number
  const transformerSpecs = {
    kva: modelNumber,
    primary: modelNumber >= 1000 ? "34500V Delta" : "13800V Delta",
    secondary: modelNumber >= 1000 ? "480GrdY/277V" : "480Y/277V",
    cooling:
      modelNumber >= 3000 ? "OFAF" : modelNumber >= 1000 ? "ONAF" : "ONAN",
    description:
      modelNumber >= 1000
        ? `Heavy-duty power transformer for industrial facilities and municipal power distribution.`
        : "Distribution transformer for commercial buildings and residential complexes",
    applications:
      modelNumber >= 1000
        ? [
            "Industrial manufacturing plants",
            "Hospital and university campuses",
            "High-rise building complexes",
            "Neighborhood distribution substations",
          ]
        : [
            "Shopping malls",
            "Apartment complexes",
            "Office buildings",
            "School campuses",
          ],
    features:
      modelNumber >= 1000
        ? [
            "Delta primary - Grounded Wye secondary",
            "Forced-air cooling system",
            "45°C average winding rise",
            "Low no-load losses",
            "High BIL rating",
            "Conservator tank with breather",
            "Pressure relief device",
          ]
        : [
            "Compact design",
            "Energy efficient",
            "Low noise operation",
            "Easy maintenance",
          ],
    specifications: {
      weight: modelNumber * 8 + " kg",
      dimensions: `${2 + modelNumber / 2000}m (H) × ${
        1.5 + modelNumber / 3000
      }m (W) × ${2 + modelNumber / 4000}m (D)`,
      soundLevel: `${55 + modelNumber / 200} dB at 1 meter`,
      temperatureRise: "55°C (65°C max hotspot)",
      efficiency: `${99 + modelNumber / 1000}% at full load`,
      impedance: modelNumber >= 1000 ? "4.5-6.5%" : "3.5-5.5%",
      standards: "ANSI C57.12.00, IEEE C57.12.90",
    },
  };

  // Handle back navigation
  const handleBack = () => {
    navigate("/transformers");
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <div className="container mx-auto py-16 px-4 max-w-4xl">
        <div className="mb-8">
          <button
            onClick={handleBack}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to Transformers
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            T-{modelNumber} Power Transformer Specifications
          </h1>
          <div className="text-2xl text-red-600 dark:text-red-400 font-bold mb-6">
            {modelNumber.toLocaleString()} kVA |{" "}
            {modelNumber >= 1000
              ? "Power Transformer"
              : "Distribution Transformer"}
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4 border-b pb-2 dark:border-gray-700">
              Overview
            </h2>
            <p className="dark:text-gray-300">
              {transformerSpecs.description} Designed for{" "}
              {modelNumber >= 1000
                ? "industrial and utility applications"
                : "commercial applications"}{" "}
              with a 35+ year service life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4 border-b pb-2 dark:border-gray-700">
                  Electrical Specifications
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Primary Voltage:
                    </span>
                    <span className="font-medium">
                      {transformerSpecs.primary}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Secondary Voltage:
                    </span>
                    <span className="font-medium">
                      {transformerSpecs.secondary}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Cooling Type:
                    </span>
                    <span className="font-medium">
                      {transformerSpecs.cooling}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Efficiency:
                    </span>
                    <span className="font-medium">
                      {transformerSpecs.specifications.efficiency}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Impedance:
                    </span>
                    <span className="font-medium">
                      {transformerSpecs.specifications.impedance}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4 border-b pb-2 dark:border-gray-700">
                  Applications
                </h2>
                <ul className="space-y-2">
                  {transformerSpecs.applications.map((app, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="dark:text-gray-300">{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4 border-b pb-2 dark:border-gray-700">
                  Technical Features
                </h2>
                <ul className="space-y-2">
                  {transformerSpecs.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-200 rounded-full p-1 mr-3">
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <span className="dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4 border-b pb-2 dark:border-gray-700">
                  Physical Specifications
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Dimensions (H×W×D):
                    </span>
                    <span className="font-medium">
                      {transformerSpecs.specifications.dimensions}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Weight:
                    </span>
                    <span className="font-medium">
                      {transformerSpecs.specifications.weight}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Sound Level:
                    </span>
                    <span className="font-medium">
                      {transformerSpecs.specifications.soundLevel}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Temperature Rise:
                    </span>
                    <span className="font-medium">
                      {transformerSpecs.specifications.temperatureRise}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Standards:
                    </span>
                    <span className="font-medium">
                      {transformerSpecs.specifications.standards}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <button className="px-6 py-3 rounded-lg font-medium bg-red-500 hover:bg-red-600 text-white transition-colors dark:bg-red-600 dark:hover:bg-red-700">
              Download Full Datasheet
            </button>
            <button className="px-6 py-3 rounded-lg font-medium bg-blue-500 hover:bg-blue-600 text-white transition-colors dark:bg-blue-600 dark:hover:bg-blue-700">
              Request Custom Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransformerDetailPage;
