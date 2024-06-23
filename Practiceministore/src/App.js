
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

import HomePage from "./views/pages/homepage";
import ContactUsPage from "./views/pages/ContactUsPage";
import ProductPage from "./views/pages/ProductPage";
import ServicePage from "./views/pages/ServicePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<HomePage />}></Route>
        <Route path="contact-us" element={<ContactUsPage />}></Route>
        <Route path="product" element={<ProductPage />}></Route>
        <Route path="service" element={<ServicePage />}></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;