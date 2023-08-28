import './App.css';
import React from 'react';
import Navigation from './components/Navigation'; // Import the Navigation component
import Image from './components/Image'; // Import the FluidLogo component
import StoreListings from './components/StoreListings';
import './App.css';

function App() {
  return (
    <div>
      <Navigation />
      <Image />
      <StoreListings />
    </div>
  );
}

export default App;


