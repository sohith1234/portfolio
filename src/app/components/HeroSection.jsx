"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = ({ theme }) => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className={`mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold ${theme === "dark" ? "text-white" : "text-black"}`}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Sohith Kampalli", // Updated to your name
                1000,
                "Full-Stack Engineer",
                1000,
                "Cloud Engineer",
                1000,
                "AI & Data Engineer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className={`text-base sm:text-lg mb-6 lg:text-xl ${theme === "dark" ? "text-[#ADB7BE]" : "text-gray-700"}`}>
            Full-Stack & Cloud Engineer specializing in scalable web and cloud applications with expertise in AWS, GCP, Kubernetes, and more. Skilled in backend optimization, CI/CD automation, and API development.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="/Sohith Kampalli_updated resume.pdf" // Path to the CV PDF
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
              download
            >
              <span className={`block ${theme === "dark" ? "bg-[#121212]" : "bg-white"} hover:bg-slate-800 rounded-full px-5 py-2`}>
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full overflow-hidden w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative mx-auto">
            <Image
              src="/images/hero-image.avif"
              alt="hero image"
              className="object-cover"
              width={400}
              height={400}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;