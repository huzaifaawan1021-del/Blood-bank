import  { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { auth } from './Firebase'; // Aapki Firebase.js file se auth import kiya
import { onAuthStateChanged } from 'firebase/auth';

// Components
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
import NotFound from "./Components/NotFound/NotFound";
import AuthForm from "./Components/Auth/AuthForm"; // Naya AuthForm Component

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Monitor login status (Bilkul simple check)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Jab tak firebase check kar raha hai, tab tak blank screen ya simple text dikhao
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <p className="text-red-600 font-bold text-lg animate-pulse">Loading...</p>
      </div>
    );
  }

  return (
    <>
      {user ? (
        // 1. USER LOGIN HAI: Saara content aur routing normal chalegi
        <>
          <Navbar />

          <Routes>
            <Route path='/' element={
              <>
                <Hero />
                <StatsSection />
                <WhyDonate />
                <HowItWorks />
                <BloodCompatibility />
                <BloodRequests />
                <Testimonials />
                <FAQ />
              </>
            } />

            <Route path='/Hero' element={<Hero />} />
            <Route path='/StatsSection' element={<StatsSection />} />
            <Route path='/WhyDonate' element={<WhyDonate />} />
            <Route path='/HowItWorks' element={<HowItWorks />} />
            <Route path='/BloodCompatibility' element={<BloodCompatibility />} />
            <Route path='/BloodRequests' element={<BloodRequests />} />
            <Route path='/Testimonials' element={<Testimonials />} />
            <Route path='/FAQ' element={<FAQ />} />
            
            <Route path='*' element={<NotFound />} />
          </Routes>

          <Footer />
        </>
      ) : (
        // 2. USER LOGIN NAHI HAI: Sirf Signup/Login screen dikhegi
        <AuthForm />
      )}
    </>
  );
};

export default App;