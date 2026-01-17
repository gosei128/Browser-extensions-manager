import { useState, useEffect } from "react";
import "./index.css";
import { motion } from "motion/react";
import Navbar from "./components/partials/Navbar.tsx";
import Home from "../src/components/Home.tsx";
function App() {
  const [isDark, setIsDark] = useState<boolean>(false);

  const themeToggle = () => {
    setIsDark(!isDark);
  };
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) root.classList.add("dark");
    else root.classList.remove("dark");
  });
  return (
    <div className="relative flex flex-col items-center">
      <motion.div
        className="absolute inset-0 bg-(image:--light-theme)"
        animate={{ opacity: isDark ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="absolute inset-0 bg-(image:--dark-theme)  "
        initial={{ opacity: 0 }}
        animate={{ opacity: isDark ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />

      <div className="z-10 relative p-4 dark:text-white h-full min-h-screen font-[Noto_Sans] w-full max-w-7xl">
        <Navbar theme={isDark} themeEvent={themeToggle} />
        <Home />
      </div>
    </div>
  );
}

export default App;
