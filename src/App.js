import React from 'react';
import './App.css';
import Header from './js/header';
import HeroSlot from './js/hero-slot';
import ContentFrame from './js/content-frame';
import Footer from './js/footer';

import album from './img/album.png';
import pricing from './img/pricing.png';
import checkout from './img/checkout.png';
import product from './img/product.png';
import cover from './img/cover.png';


function App() {

  const itemList = [
    {
      icon: album,
      itemHeading: "Album",
      description: "Example pricing page built with Cards and featuring a custom header and footer."
    },
    {
      icon: pricing,
      itemHeading: "Pricing",
      description:"Example pricing page built with Cards and featuring a custom header and footer."
    },
    {
      icon: checkout,
      itemHeading: "Checkout",
      description:"Custom checkout form showing our form components and their validation features."
    },
    {
      icon: product,
      itemHeading: "Product",
      description:"Lean product-focused marketing page with extensive grid and image work."
    },
    {
      icon: cover,
      itemHeading: "Cover",
      description:"A one-page template for building simple and beautiful home pages."
    }
  ]

  return (
    <div className="App">
      <Header />
      <HeroSlot />
      <ContentFrame itemList={itemList} heading="Custom components" subHeading="Brand new components and templates to help folks quickly get started with Bootstrap and demonstrate best practices for adding onto the framework." />
      <Footer />
    </div>
  );
}

export default App;
