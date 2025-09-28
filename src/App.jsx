import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";

import Layout from "@/components/Layout";
import HomeScreen from "@/pages/HomeScreen";
import RestaurantScreen from "@/pages/RestaurantScreen";
import "./App.css";

function App() {
  return (
    <>
      <Helmet>
        <title>Deliveresitau - Delivery de Comida</title>
        <meta
          name="description"
          content="Peça comida dos melhores restaurantes da sua região com entrega rápida"
        />
      </Helmet>
      <Layout>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/restaurant/:id" element={<RestaurantScreen />} />
        </Routes>
        <Toaster />
      </Layout>
    </>
  );
}

export default App;
