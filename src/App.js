import { Route, Routes, useLocation } from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import PortfolioProject from "./pages/PortfolioProject";

const pageTransition = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={pageTransition}
              >
                <Home />
              </motion.div>
            }
          />
          <Route
            path="portfolio/:id"
            element={
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={pageTransition}
              >
                <PortfolioProject />
              </motion.div>
            }
          />
          <Route
            path="*"
            element={
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={pageTransition}
              >
                <NotFound />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
