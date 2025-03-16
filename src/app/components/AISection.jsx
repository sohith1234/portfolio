"use client";

import { useChat } from "ai/react";
import { useState } from "react";
import Image from "next/image";

export default function AISection() {
  const { isLoading, messages, input, handleInputChange, handleSubmit } = useChat();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      {/* Floating Button with Icons8 Icon */}
      <div className="fixed bottom-10 right-10 z-50">
        <button
          onClick={() => setIsPopupOpen(!isPopupOpen)}
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center relative group"
        >
          {/* Icons8 Icon */}
          <Image
            src="/icons8-icon.png" // Replace with the path to your downloaded icon
            alt="Chat Icon"
            width={35}
            height={35}
            className="w-8 h-8"
          />
          {/* Tooltip */}
          <span className="absolute -top-10 right-0 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Ask me Anything
          </span>
        </button>
      </div>

      {/* Popup Chat Section */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
          {/* Chat Container */}
          <div
            className="relative bg-black bg-opacity-90 rounded-lg shadow-lg flex flex-col"
            style={{ width: "480px", height: "600px" }} // 3-inch width (480px) and 6-inch height (600px)
          >
            {/* Close Button */}
            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-2 right-2 text-white hover:text-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Header */}
            <h1 className="text-2xl font-Kanit font-bold text-white p-4 border-b border-gray-700">
              Sohith Kampalli&rsquo;s AI Portfolio
            </h1>

            {/* Chat Section */}
            <section className="flex-1 overflow-y-auto p-4">
              {messages?.length > 0 ? (
                messages.map((message, index) => (
                  <div
                    key={index}
                    className={`rounded-3xl m-2 p-2 px-4 w-[70%] md:w-[80%] mt-4 text-gray-200 ${
                      message.role === "user"
                        ? "rounded-br-none bg-blue-500 ml-auto"
                        : "rounded-bl-none bg-orange-700"
                    }`}
                  >
                    <b>{message.role === "user" ? "User:" : "Sohith:"}</b> {message.content}
                  </div>
                ))
              ) : (
                <p className="text-center text-xl text-gray-400">Ask me Anything</p>
              )}
              {isLoading && <span className="ml-auto text-gray-400">Thinking... 🤔</span>}
            </section>

            {/* Input Form Fixed at the Bottom */}
            <form
              className="w-full flex gap-2 p-4 border-t border-gray-700 bg-black bg-opacity-90"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(e);
              }}
            >
              <input
                onChange={handleInputChange}
                value={input}
                type="text"
                placeholder="What's your hometown?"
                className="py-2 px-4 flex-1 rounded text-black text-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white rounded text-lg px-4 cursor-pointer focus:outline-none disabled:bg-blue-400"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}