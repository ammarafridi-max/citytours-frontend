import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout Components
import Navigation from "./Layout/Navigation";
import Footer from "./Layout/Footer";

// Main Pages
import Home from "./Home/Home";
import Contact from "./Contact/Contact";
import SignUp from "./SignUp/SignUp";
import About from "./About/About";
import Blog from "./Blog/Blog";
import BlogDetail from "./BlogDetail/BlogDetail";
import Test from "./Test";

// Destinations
import Destinations from "./Destinations/Destinations";
import DestinationDetail from "./DestinationDetail/DestinationDetail";

// Tour Pages
import Tours from "./Tours/Tours";
import TourDetail from "./TourDetail/TourDetail";
import MobileNavigation from "./Layout/MobileNavigation";

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
        <Route path="/blog/detail" element={<BlogDetail />} />
        <Route path="/test" element={<Test />} />

        {/* Destinations */}
        <Route path="/destinations" element={<Destinations />} />
        <Route
          path="/destinations/united-arab-emirates"
          element={<DestinationDetail />}
        />

        {/* Tours */}
        <Route path="/tours" element={<Tours />} />
        <Route path="/tours/:url" element={<TourDetail />} />
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
