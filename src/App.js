import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout Components
import Navigation from "./layout/Navigation";
import Footer from "./layout/Footer";

// Main Pages
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import SignUp from "./pages/SignUp/SignUp";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import BlogDetail from "./pages/BlogDetail/BlogDetail";
import TermsAndConditions from "./pages/Legal/T&C/T&C";

// Destinations
import Destinations from "./pages/Destinations/Destinations";
import DestinationDetail from "./pages/DestinationDetail/DestinationDetail";

// Tour Pages
import Tours from "./pages/Tours/Tours";
import TourDetail from "./pages/TourDetail/TourDetail";
import MobileNavigation from "./layout/MobileNavigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <MobileNavigation />
      <Routes>
        {/* Basic Pages */}
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:url" element={<BlogDetail />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />

        {/* Destinations */}
        <Route path="/destinations" element={<Destinations />} />
        <Route
          path="/destinations/united-arab-emirates"
          element={<DestinationDetail />}
        />

        {/* Tours */}
        <Route path="tours" element={<Tours />} />
        <Route path="tours/:url" element={<TourDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

{
  /* Activities */
}
{
  /* <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/activities/:url" element={<ActivityDetailPage />} />
        <Route
          path="/activities/:url/booking"
          element={<ActivityBookingPage />}
        /> */
}
