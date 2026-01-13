"use client";

import { useLegacyInit } from "@/hooks/useLegacyInit";

export default function ClientInit() {
  // The hook runs here safely on the client
  useLegacyInit();

  // This component doesn't render anything visual
  return null;
}
