// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./layout/Navbar";
import MarketPage from "./pages/MarketPage";
import News from "./pages/News";
import Services from "./pages/Services";
import Projects from "./pages/ProjectsPage";
import Insights from "./pages/Insights";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import ScrollToTop from "./layout/ScrollToTop";
import FullTeamPage from "./components/reuseablecomponents/FullTeamPage";
import TransformersPage from "./components/reuseablecomponents/TransformersPage";
import TeamSection from "./components/about-components/TeamSection";
import SolarPage from "./components/reuseablecomponents/SolarPage";
import TransformerDetailPage from "./components/reuseablecomponents/TransformerDetailPage";
import QuotePage from "./components/reuseablecomponents/QuotePage";
import Application from "./components/reuseablecomponents/Application";
import ApplicationForm from "./components/reuseablecomponents/ApplicationForm";


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200">
        <Navbar />
        <div className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/market" element={<MarketPage />} />
            <Route path="/news" element={<News />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/FullTeamPage" element={<FullTeamPage />} />
            <Route path="/transformers" element={<TransformersPage />} />
            <Route path="/solar" element={<SolarPage />} />
            <Route path="/teamSection" element={<TeamSection />} />
            <Route path="/quote" element={<QuotePage />} />
            <Route path="/application" element={<Application />} />
            <Route path="/application-form" element={<ApplicationForm />} />
            <Route
              path="/transformers/:model"
              element={<TransformerDetailPage />}

            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
