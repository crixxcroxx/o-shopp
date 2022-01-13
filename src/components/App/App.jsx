import { Routes, Route } from "react-router-dom";

import Layout from "../Layout";
import ProductsList from "../ProductsList";
import Product from "../Product";
import Cart from "../Cart";

import './app.css';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ProductsList />} />
        <Route path=":id/:title" element={<Product />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*">404 not found</Route>
      </Route>
    </Routes>
  );
}
