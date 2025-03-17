import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Hero from './components/Hero';
import UserLogin from './components/Login/UserLogin';
import UserRegister from './components/Login/UserRegister';
import UserProfile from './components/UserProfile/UserProfile';
import PrivateRoute from './components/Login/PrivateRouter';
 // Make sure this import is correct

function App() {
  return (
    <>
     
        <div className='w-full min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-300 flex flex-col overflow-hidden'>
          {/* Navbar */}
          <Navbar />

          <Hero/>
          <Routes>
          <Route path="/login" element={<UserLogin />} />
          <Route path="/register" element={<UserRegister />} />
          <Route path="/profile" element={<PrivateRoute><UserProfile /></PrivateRoute>} />
        </Routes>
          
          

          <Footer />
        </div>
     
    </>
  );
}

export default App;
