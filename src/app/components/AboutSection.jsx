"use client";

import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express.js</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Next.js</li>
        <li>TypeScript</li>
        <li>Spring Boot</li>
        <li>Docker</li>
        <li>Kubernetes</li>
        <li>AWS (Lambda, EC2, S3)</li>
        <li>GCP</li>
        <li>CI/CD Pipelines (Jenkins, GitHub Actions)</li>
        <li>Redis Caching</li>
        <li>OAuth, JWT</li>
        <li>Power BI</li>
        <li>Tableau</li>
      </ul>
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

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* Image with alt text */}
        <Image
          src="/2.jpeg"
          alt="About Me Image"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a Full-Stack & Cloud Engineer specializing in scalable web and cloud applications with expertise in AWS, GCP, and Kubernetes. Skilled in backend optimization, CI/CD automation, and API development. I have experience with Node.js, React, TypeScript, Docker, Kubernetes, and more. I am a quick learner and always looking to expand my knowledge and skill set. I am passionate about leveraging cloud technologies and building high-performance applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
