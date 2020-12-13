import { useState, useEffect } from "react";

export const useBrowserTheme = () => {
  const [prefersDark, setPrefersDark] = useState(false);

  useEffect(() => {
    const userPrefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (userPrefersDark) {
      setPrefersDark(true);
    }
  }, []);

  return prefersDark;
};
