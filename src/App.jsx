import { lazy, Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import SlideRoutes from "react-slide-routes";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Spinner from "./components/Spinner/Spinner";
const Footer = lazy(() => import("./Footer/Footer"));
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <SlideRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </SlideRoutes>
      <Suspense fallback={<Spinner />}>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
