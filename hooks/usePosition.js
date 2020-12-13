import { useState, useEffect } from "react";

export const usePosition = (options = {}) => {
  // store location in state
  const [location, setLocation] = useState();
  // store error message in state
  const [error, setError] = useState();

  // Success handler for geolocation `getCurrentPosition` method
  const handleSuccess = (pos) => {
    const { latitude, longitude } = pos.coords;

    setLocation({
      latitude,
      longitude,
    });
  };

  // Error handler for geolocation `getCurrentPosition` method
  const handleError = (error) => {
    setError(error.message);
  };

  useEffect(() => {
    const { geolocation } = navigator;

    // If the geolocation is not defined in the used browser return error
    if (!geolocation) {
      setError("Geolocation access denied. Please get location access");
      return;
    }

    // Call Geolocation API
    geolocation.getCurrentPosition(handleSuccess, handleError);
  }, []);

  return { location, error };
};
