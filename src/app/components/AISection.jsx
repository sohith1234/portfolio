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
      <button
        onClick={() => setIsPopupOpen(!isPopupOpen)}
        className="fixed bottom-10 right-10 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4 shadow-lg z-50 flex items-center justify-center"
      >
        {/* Icons8 Icon */}
        <Image
          src="/icons8-icon.png" // Replace with the path to your downloaded icon
          alt="Chat Icon"
          width={35}
          height={35}
          className="w-8 h-8"
        />
      </button>

      {/* Popup Chat Section */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-40">
          <div className="relative w-full h-full">
            {/* Background Image */}
            <img
              src="/rs-big.webp"
              alt="RoadsideCoder Banner"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Chat Interface */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
              <div className="w-full max-w-2xl bg-black bg-opacity-75 rounded-lg p-6">
                {/* Header */}
                <h1 className="text-4xl font-Kanit md:text-5xl font-bold text-white mb-6">
                  Sohith Kampalli&rsquo;s AI Portfolio
                </h1>

                {/* Chat Section */}
                <section className="w-full flex-1 flex flex-col overflow-y-scroll max-h-96 mb-4">
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
                    <p className="text-center text-xl">Ask me Anything</p>
                  )}
                  {isLoading && <span className="ml-auto">Thinking... 🤔</span>}
                </section>

                {/* Input Form */}
                <form
                  className="w-full flex gap-2"
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
                    className="py-3 px-5 flex-1 rounded text-black text-2xl border-2 border-gray-50 focus:outline-none focus:border-blue-500"
                  />
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white rounded text-xl px-5 cursor-pointer focus:outline-none disabled:bg-blue-400"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}