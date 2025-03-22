"use client";
import { useState, useEffect } from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import AISection from "./components/AISection";

export default function Home() {
  const [theme, setTheme] = useState("dark");

  // Load theme from localStorage on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
  }, []);

  // Save theme to localStorage and apply it to the root element
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.className = theme;
  }, [theme]);

  // Toggle between dark and light themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <main className={`flex min-h-screen flex-col ${theme === "dark" ? "bg-[#121212]" : "bg-white"}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection theme={theme} />
        <AchievementsSection theme={theme} />
        <AboutSection theme={theme} />
        <ProjectsSection theme={theme} />
        <EmailSection theme={theme} />
      </div>
      <Footer theme={theme} />
      <AISection/>
    </main>
  );
}