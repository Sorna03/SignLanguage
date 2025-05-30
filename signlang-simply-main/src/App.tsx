import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Index from "./pages/Index";
import Learn from "./pages/Learn";
import VideoLearning from "./pages/VideoLearning";
import Jarvis from "./pages/Jarvis";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner position="top-right" closeButton richColors expand />
      <Router>
        <div className="min-h-screen bg-background flex flex-col">
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route
                path="/"
                element={
                  <motion.div
                    key="home"
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <Index />
                  </motion.div>
                }
              />
              <Route
                path="/learn"
                element={
                  <motion.div
                    key="learn"
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                    className="pt-16"
                  >
                    <Learn />
                  </motion.div>
                }
              />
              <Route
                path="/video-learning"
                element={
                  <motion.div
                    key="video"
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                    className="pt-16"
                  >
                    <VideoLearning />
                  </motion.div>
                }
              />
              <Route
                path="/jarvis"
                element={
                  <motion.div
                    key="jarvis"
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                    className="pt-16"
                  >
                    <Jarvis />
                  </motion.div>
                }
              />
              <Route
                path="*"
                element={
                  <motion.div
                    key="notfound"
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <NotFound />
                  </motion.div>
                }
              />
            </Routes>
          </AnimatePresence>
        </div>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
