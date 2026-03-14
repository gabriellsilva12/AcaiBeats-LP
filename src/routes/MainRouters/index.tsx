import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import NotFound from "../../pages/NotFound";
import Products from "../../pages/Products";
import FormAddress from "../../components/FormAddress";

export default function MainRouters() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Home />}/>
        <Route  path="/about/" element={<About />}/>
        <Route  path="/products/" element={<Products />}/>
        <Route  path="/test/" element={<FormAddress />}/>

        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}
