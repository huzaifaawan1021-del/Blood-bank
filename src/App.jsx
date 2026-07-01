import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import StatsSection from "./Components/StatsSection/StatsSection";
import WhyDonate from "./Components/WhyDonate/WhyDonate";
import HowItWorks from "./Components/HowItWorks/HowItWorks";
import BloodCompatibility from "./Components/BloodCompatibility/BloodCompatibility";
import BloodRequests from "./Components/BloodRequests/BloodRequests";
import Testimonials from "./Components/Testimonials/Testimonials";
import FAQ from "./Components/FAQ/FAQ";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <div className="Navbar">
        <Navbar />
      </div>

      <div className="Hero">
        <Hero />
      </div>

      <div className="Stats">
        <StatsSection />
      </div>

      <div className="WhyDonate">
        <WhyDonate />
      </div>

      <div className="HowItWorks">
        <HowItWorks />
      </div>

      <div className="BloodCompatibility">
        <BloodCompatibility />
      </div>

      <div className="BloodRequests">
        <BloodRequests />
      </div>

      <div className="Testimonials">
        <Testimonials />
      </div>

      <div className="FAQ"> 
        <FAQ />
      </div>

      <div className="Footer">
        <Footer />
      </div>

    </>
  );
};

export default App;