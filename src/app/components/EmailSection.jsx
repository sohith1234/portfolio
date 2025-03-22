"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = ({ theme }) => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className={`grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative ${theme === "dark" ? "text-white" : "text-black"}`}
    >
      <div className={`bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] ${theme === "dark" ? "from-primary-900" : "from-blue-100"} to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2`}></div>
      <div className="z-10">
        <h5 className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-black"} my-2`}>
          Let&apos;s Connect
        </h5>
        <p className={`${theme === "dark" ? "text-[#ADB7BE]" : "text-gray-700"} mb-4 max-w-md`}>
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/sohithk2002">
            <Image src={GithubIcon} alt="Github Icon" width={24} height={24} />
          </Link>
          <Link href="https://linkedin.com/in/sohithkampalli">
            <Image src={LinkedinIcon} alt="Linkedin Icon" width={24} height={24} />
          </Link>
          <Link href="https://twitter.com/sohithk2002">
            <Image src="/twitter-icon.svg" alt="Twitter Icon" width={24} height={24} />
          </Link>
          <Link href="https://www.instagram.com/sohithk2002">
            <Image src="/instagram-icon.svg" alt="Instagram Icon" width={24} height={24} />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className={`${theme === "dark" ? "text-white" : "text-black"} block mb-2 text-sm font-medium`}
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className={`${theme === "dark" ? "bg-[#18191E] border-[#33353F] text-gray-100" : "bg-gray-100 border-gray-300 text-gray-900"} border placeholder-[#9CA2A9] text-sm rounded-lg block w-full p-2.5`}
                placeholder="jacob@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className={`${theme === "dark" ? "text-white" : "text-black"} block text-sm mb-2 font-medium`}
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className={`${theme === "dark" ? "bg-[#18191E] border-[#33353F] text-gray-100" : "bg-gray-100 border-gray-300 text-gray-900"} border placeholder-[#9CA2A9] text-sm rounded-lg block w-full p-2.5`}
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className={`${theme === "dark" ? "text-white" : "text-black"} block text-sm mb-2 font-medium`}
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className={`${theme === "dark" ? "bg-[#18191E] border-[#33353F] text-gray-100" : "bg-gray-100 border-gray-300 text-gray-900"} border placeholder-[#9CA2A9] text-sm rounded-lg block w-full p-2.5`}
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className={`${theme === "dark" ? "bg-primary-500 hover:bg-primary-600" : "bg-blue-500 hover:bg-blue-600"} text-white font-medium py-2.5 px-5 rounded-lg w-full`}
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;