import {  Routes, Route,useLocation } from 'react-router-dom';
import NavBar from "./components/NavBar";

import Footer from "./components/Footer";
import LandingPage from './components/LandingPage/LandingPage';
import { useEffect } from 'react';
const NotFound = () => { 

  return (
    <div className='h-screen w-screen flex justify-center items-center bg-secondary'>
      <h1 className='text-3xl font-bold uppercase text-bg border-2 mt-12  border-black p-20 rounded'> Not Found - 404</h1>
    </div>
  )
}
export default function Constract() {
    const loaction = useLocation();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [loaction]);
    return (
      <>

      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
            <Route path='*' element = {<NotFound/>} />
        </Routes>
      </main>
      <Footer />
 
      </>
  );
}
