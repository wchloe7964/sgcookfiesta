"use client";

import { useEffect } from "react";
import AOS from "aos"; // You'll need to run: npm install aos

export const useLegacyInit = () => {
  useEffect(() => {
    // 1. Initialize AOS (Animate on Scroll)
    AOS.init({
      duration: 800,
      easing: "slide",
      once: true,
    });

    // 2. Handle Loader (If you have one)
    const loader = document.getElementById("ftco-loader");
    if (loader) {
      setTimeout(() => {
        loader.classList.remove("show");
      }, 1);
    }

    // 3. Stellar.js Parallax (Optional - depends if you still use it)
    // Most parallax can be done via CSS 'background-attachment: fixed' now

    // 4. Scroll Control Logic for Modals
    // This is a global helper we can call to prevent background scrolling
    window.lockScroll = (lock: boolean) => {
      document.body.style.overflow = lock ? "hidden" : "auto";
    };

    return () => {
      // Cleanup logic if needed
    };
  }, []);
};
