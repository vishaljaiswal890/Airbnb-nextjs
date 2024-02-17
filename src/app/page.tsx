"use client";
import { useState, useEffect } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { useRouter } from "next/router";
import OtpInput from "../app/OtpInput/page";

const quotes = [
  "Traveling – it leaves you speechless, then turns you into a storyteller. - Ibn Battuta",
  "The world is a book, and those who do not travel read only one page. - Saint Augustine",
  "Adventure is worthwhile. - Aesop",
  "Travel makes one modest. You see what a tiny place you occupy in the world. - Gustave Flaubert",
  "Jobs fill your pocket, but adventures fill your soul. - Jamie Lyn Beatty",
  "Travel is the only thing you buy that makes you richer.",
  "To travel is to live. - Hans Christian Andersen",
  "Life is short and the world is wide.",
  "Travel far enough, you meet yourself. - David Mitchell",
  "The journey not the arrival matters. - T.S. Eliot",
];

export default function Home() {
  // const router = useRouter();
  const [randomQuote, setRandomQuote] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
  }, []);

  const handleContinue = async () => {
    // Simulate sending OTP (remove when actual API is implemented)
    setIsOtpSent(true);
  };
  const handleSubmitOtp = () => {
    // Handle OTP submission here
    console.log("Submitting OTP:");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24 text-center bg-gray-100">
      <div className="bg-white m-auto rounded-2xl shadow-2xl flex flex-col md:flex-row w-full md:w-2/3 max-w-4xl">
        <div className="w-full md:w-2/5 p-4 md:p-5 text-white rounded-tl-2xl rounded-bl-2xl py-8 md:py-36 px-4 md:px-12 bg-sky-700">
          <h2 className="text-2xl md:text-3xl mb-2 font-bold">
            Hello, friend!
          </h2>
          <div className="border-2 w-6 md:w-10 border-white inline-block m-2 md:m-3 rounded-md"></div>
          <p className="mb-6">{randomQuote}</p>
        </div>
        <div className="w-full md:w-3/5 p-4 md:p-5">
          <div className="text-left font-bold">
            <span className="text-sky-700">Air</span>bnb
          </div>
          <div className="py-4 md:py-10">
            <div className="text-2xl mb-2 font-bold text-sky-700">
              Sign in to account?
            </div>
            <div className="border-2 w-10 border-sky-700 inline-block m-2 md:m-3 rounded-md"></div>
            <div className="flex justify-center my-2">
              <a
                href="#"
                className="border-2 border-gray-200 rounded-full p-2 md:p-3 mx-1"
              >
                <FaGoogle className="text-base md:text-sm" />
              </a>
              <a
                href="#"
                className="border-2 border-gray-200 rounded-full p-2 md:p-3 mx-1"
              >
                <FaFacebook className="text-base md:text-sm" />
              </a>
            </div>
            <p className="m-2 p-2 text-gray-400">
              {isOtpSent
                ? "Enter OTP sent to your email"
                : "or login using OTP"}
            </p>
            <div className="flex flex-col items-center">
              {!isOtpSent && (
                <input
                  type="text"
                  className="p-2 w-64 bg-gray-100 rounded-md"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              )}
              {!isOtpSent && (
                <button
                  onClick={handleContinue}
                  className="border-2 border-sky-700 p-2 md:p-3 m-4 inline-block rounded-lg font-semibold hover:bg-sky-700 hover:text-white text-sky-700"
                >
                  Continue
                </button>
              )}
              {isOtpSent && (
                <OtpInput onOtpChange={setOtp} onSubmit={handleSubmitOtp} />
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
