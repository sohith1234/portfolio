"use client";

import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { FaNodeJs, FaReact, FaAws, FaDocker, FaGithub, FaDatabase, FaJava, FaPython, FaHtml5, FaCss3Alt, FaJenkins, FaLinux } from "react-icons/fa";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-4 gap-4">
        <div className="flex flex-col items-center">
          <FaNodeJs className="text-4xl mb-2" />
          <span>Node.js</span>
        </div>
        <div className="flex flex-col items-center">
          <FaReact className="text-4xl mb-2" />
          <span>React.js</span>
        </div>
        <div className="flex flex-col items-center">
          <FaAws className="text-4xl mb-2" />
          <span>AWS</span>
        </div>
        <div className="flex flex-col items-center">
          <FaDocker className="text-4xl mb-2" />
          <span>Docker</span>
        </div>
        <div className="flex flex-col items-center">
          <FaGithub className="text-4xl mb-2" />
          <span>GitHub</span>
        </div>
        <div className="flex flex-col items-center">
          <FaDatabase className="text-4xl mb-2" />
          <span>PostgreSQL</span>
        </div>
        <div className="flex flex-col items-center">
          <FaJava className="text-4xl mb-2" />
          <span>Java</span>
        </div>
        <div className="flex flex-col items-center">
          <FaPython className="text-4xl mb-2" />
          <span>Python</span>
        </div>
        <div className="flex flex-col items-center">
          <FaHtml5 className="text-4xl mb-2" />
          <span>HTML5</span>
        </div>
        <div className="flex flex-col items-center">
          <FaCss3Alt className="text-4xl mb-2" />
          <span>CSS3</span>
        </div>
        <div className="flex flex-col items-center">
          <FaJenkins className="text-4xl mb-2" />
          <span>Jenkins</span>
        </div>
        <div className="flex flex-col items-center">
          <FaLinux className="text-4xl mb-2" />
          <span>Linux</span>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          University of North Texas, Texas, United States
          <br />
          Master of Science in Computer and Information Sciences (CGPA 3.88)
          <br />
          Aug 2023 – May 2025
        </li>
        <li>
          Fullstack Academy of Code
        </li>
        <li>
          University of California, Santa Cruz
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Developer Associate (AWS)</li>
        <li>AWS Data Engineer Associate (AWS)</li>
        <li>Google Professional Data Analytics (Coursera)</li>
        <li>KCNA (Kubernetes & Cloud Native Associate - The Linux Foundation)</li>
        <li>Docker Foundations (LinkedIn)</li>
      </ul>
    ),
  },
];

const AboutSection = ({ theme }) => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className={`${theme === "dark" ? "text-white" : "text-black"}`} id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* Image with alt text */}
        <Image
          src="/2.jpeg"
          alt="About Me Image"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className={`text-4xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>
            About Me
          </h2>
          <p className={`text-base lg:text-lg ${theme === "dark" ? "text-[#ADB7BE]" : "text-gray-700"}`}>
            I am a Full-Stack & Cloud Engineer specializing in scalable web and cloud applications with expertise in AWS, GCP, and Kubernetes. Skilled in backend optimization, CI/CD automation, and API development. I have experience with Node.js, React, TypeScript, Docker, Kubernetes, and more. I am a quick learner and always looking to expand my knowledge and skill set. I am passionate about leveraging cloud technologies and building high-performance applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
              theme={theme}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
              theme={theme}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
              theme={theme}
            >
              Certifications
            </TabButton>
          </div>
          <div className={`mt-8 ${theme === "dark" ? "text-white" : "text-black"}`}>
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;