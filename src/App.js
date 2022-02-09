import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import Page from "./containers/Page";

function App() {
  const location = useLocation();

  return (
    <>
      <Navigation />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Page title="Home" img="1" />} />
          <Route path="/about" element={<Page title="About" img="2" />} />
          <Route path="/contact" element={<Page title="Contact" img="3" />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
