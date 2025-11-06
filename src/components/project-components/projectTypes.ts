export type ProjectStatus = "completed" | "in-progress" | "planned";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  year: number;
  status: ProjectStatus;
  technologies: string[];
  image: string;
}

export const statusColors: Record<ProjectStatus, string> = {
  completed: "bg-green-100 text-green-800",
  "in-progress": "bg-amber-100 text-amber-800",
  planned: "bg-blue-100 text-blue-800",
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Solar Farm Installation",
    description: "50MW solar farm providing clean energy to 20,000 homes",
    category: "solar",
    location: "Nevada, USA",
    year: 2023,
    status: "completed",
    technologies: ["Photovoltaic", "Grid Integration", "Energy Storage"],
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
  },
  {
    id: "2",
    title: "Transformer Grid Upgrade",
    description: "Modernization of urban grid with smart transformers",
    category: "transformers",
    location: "Berlin, Germany",
    year: 2022,
    status: "completed",
    technologies: ["Smart Transformers", "IoT Monitoring", "Load Balancing"],
    image:
      "https://images.unsplash.com/photo-1628595351029-c2bf17511435?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80",
  },
  {
    id: "3",
    title: "Wind Energy Complex",
    description: "Offshore wind farm with 30 turbines generating 120MW",
    category: "wind",
    location: "North Sea, UK",
    year: 2024,
    status: "in-progress",
    technologies: ["Offshore Turbines", "Subsea Cabling", "Marine Logistics"],
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: "4",
    title: "Hydroelectric Plant Refurbishment",
    description: "Modernization of 50-year-old hydroelectric facility",
    category: "hydro",
    location: "British Columbia, Canada",
    year: 2023,
    status: "in-progress",
    technologies: [
      "Turbine Efficiency",
      "Eco-friendly Design",
      "Fish Migration",
    ],
    image:
      "https://images.unsplash.com/photo-1437482072455-6a9506b6bf1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
  },
  {
    id: "5",
    title: "Urban Microgrid Implementation",
    description:
      "Smart microgrid for urban resilience and renewable integration",
    category: "grid",
    location: "Tokyo, Japan",
    year: 2025,
    status: "planned",
    technologies: ["Microgrid", "Energy Storage", "AI Management"],
    image:
      "https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: "6",
    title: "Biomass Energy Facility",
    description: "Conversion of agricultural waste to renewable energy",
    category: "biomass",
    location: "São Paulo, Brazil",
    year: 2022,
    status: "completed",
    technologies: ["Waste Processing", "Gasification", "Emission Control"],
    image:
      "https://images.unsplash.com/photo-1593371256584-ac70d2ab5d90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
  },
];
