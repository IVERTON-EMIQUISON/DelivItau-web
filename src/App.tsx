import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import HomeScreen from '@/pages/HomeScreen';
import RestaurantScreen from '@/pages/RestaurantScreen';
import { Toaster } from '@/components/ui/toaster';
import '@/App.css';
function App() {
  return (
    <>
      <Helmet>
        <title>Deliveresitau - Delivery de Comida</title>
        <meta name="description" content="Peça comida dos melhores restaurantes da sua região com entrega rápida" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/restaurant/:id" element={<RestaurantScreen />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;