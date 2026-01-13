"use client";

import { useState, useEffect } from "react";

interface Props {
  phoneNumber: string; // The raw number from the input
  onClose: () => void;
  onVerify: (otp: string) => void;
}

export default function WhatsAppOTP({ phoneNumber, onClose, onVerify }: Props) {
  const [otp, setOtp] = useState("");

  return (
    <div className="fixed inset-0 z-[11000] bg-white flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-[400px]">
        <div className="flex justify-between mb-4">
          <button onClick={onClose} className="text-xl">
            <i className="fa-solid fa-angle-left"></i>
          </button>
          <i className="far fa-question-circle text-xl text-gray-400"></i>
        </div>

        <h2 className="text-[22px] font-bold mb-2">
          Check your WhatsApp messages
        </h2>
        <p className="text-gray-600 text-sm mb-1">
          Enter the code we sent to your WhatsApp account:
        </p>
        {/* Displaying raw phone number as requested */}
        <p className="font-semibold text-black mb-6">{phoneNumber}</p>

        <div className="flex justify-center mb-6">
          <img
            src="/images/waa.JPG"
            alt="WhatsApp"
            className="h-[140px] rounded-lg shadow-sm"
          />
        </div>

        <input
          type="text"
          placeholder="Enter code"
          maxLength={6}
          value={otp}
          onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, ""))}
          className="w-full text-center py-3 text-2xl border border-gray-300 rounded-lg mb-6 outline-none focus:border-[#00a884]"
        />

        <button
          disabled={otp.length < 6}
          onClick={() => onVerify(otp)}
          className="w-full py-3 bg-[#00a884] text-white rounded-full font-bold disabled:opacity-50">
          Continue
        </button>
      </div>
    </div>
  );
}
