"use client";
import { useState } from "react";

export default function OtpInput({ onOtpChange, onSubmit }) {
  const [otp, setOtp] = useState("");
  const [showButton, setShowButton] = useState(false); // State to control the visibility of the button
  const [otpSubmitted, setOtpSubmitted] = useState(false); // State to track whether OTP has been submitted

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
    onOtpChange(e.target.value);
    setShowButton(true); // Show the button once OTP input has some value
  };

  const handleContinue = () => {
    // Handle any other actions before submission
    onSubmit(otp); // Submit OTP
    setShowButton(false); // Hide the button after submission
    setOtpSubmitted(true); // Set OTP submitted to true
  };

  return (
    <div className="flex flex-col items-center">
      {" "}
      {/* Wrap elements in a flex container */}
      <input
        type="text"
        className="p-2 w-64 bg-gray-100 rounded-md"
        placeholder="Enter OTP"
        value={otp}
        onChange={handleOtpChange}
      />
      {!otpSubmitted &&
        showButton && ( // Render the button only if showButton is true and OTP is not submitted
          <button
            onClick={handleContinue}
            className="border-2 border-sky-700 p-2 md:p-3 m-4 inline-block rounded-lg font-semibold hover:bg-sky-700 hover:text-white text-sky-700"
          >
            Submit
          </button>
        )}
    </div>
  );
}
