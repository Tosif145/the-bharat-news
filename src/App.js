import React, { useState } from 'react';
import Header from './componets/Header';
import HomeScreen from './componets/HomeScreen';
import Footer from './componets/Footer';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import BriefContent from './componets/News/BriefContent';




const App = () => {
  

  return (
    
      <BrowserRouter>
        {/* Pass the history prop to the Header component */}
        <Header />
      
          <Routes>
            
            <Route path="/" element={<HomeScreen />} />     
            <Route path="/content/:id" element={<BriefContent />} />    
          </Routes>
   
        <Footer />
      </BrowserRouter>
  
  );
};

export default App;
