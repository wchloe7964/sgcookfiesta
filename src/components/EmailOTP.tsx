"use client";

import { useState } from "react";

interface Props {
  emailAddress: string; // Full email passed from state
  onClose: () => void;
  onVerify: (otp: string) => void;
}

export default function EmailOTP({ emailAddress, onClose, onVerify }: Props) {
  const [otp, setOtp] = useState("");

  return (
    <div className="fixed inset-0 z-[11000] bg-white flex flex-col items-center justify-center p-6 text-center">
      <div className="w-full max-w-[400px]">
        <button onClick={onClose} className="absolute top-6 left-6 text-xl">
          <i className="fa-solid fa-angle-left"></i>
        </button>

        <h2 className="text-[22px] font-bold mb-2">Check your email</h2>
        <p className="text-gray-600 text-sm mb-1">Enter the code we sent to:</p>
        {/* Full email display */}
        <p className="font-semibold text-black mb-6">{emailAddress}</p>

        <div className="flex justify-center mb-8">
          <img
            src="/images/em-dem.jpg"
            alt="Email Demo"
            className="h-[120px] object-contain"
          />
        </div>

        <input
          type="text"
          maxLength={6}
          placeholder="Enter code"
          value={otp}
          onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, ""))}
          className="w-full py-3 text-center text-xl border-b-2 border-gray-300 outline-none focus:border-[#0064e0] mb-8"
        />

        <button
          disabled={otp.length < 6}
          onClick={() => onVerify(otp)}
          className="w-full bg-[#0064e0] text-white py-3 rounded-full font-bold disabled:opacity-50">
          Continue
        </button>
      </div>
    </div>
  );
}
