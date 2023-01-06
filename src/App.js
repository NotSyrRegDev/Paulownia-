import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import SlideMenu from './components/SlideMenu';
import Footer from './components/Footer';
import MainDishesSection from './components/MainDishesSection';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import SectionFour from './components/SectionFour';

const App = () => {
  return (
    <div>

    <div className="iwaiter_container">
       { /* COMPONENTS */ }  

      <Navbar />
      
      {/* <SlideMenu /> */}

      <MainDishesSection sectionName={"اطباق رئيسية"} />

      <SectionTwo sectionName="الحمسات" />

      <SectionThree sectionName="اطباق الفطور" />

      <SectionFour sectionName="الاضافات" />


      <Footer />
       { /* END COMPONENTS */ }  
    </div>


    </div>
  )
}

export default App