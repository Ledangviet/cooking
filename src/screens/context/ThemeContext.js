import React, { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    backgroundColor: "#FFFFFF",
    textColor: "#000000",
    highlightColor: "#F5F5F5",
  });

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme.backgroundColor === "#FFFFFF"
        ? {
            backgroundColor: "#000000",
            textColor: "#FFFFFF",
            highlightColor: "#333333",
          }
        : {
            backgroundColor: "#FFFFFF",
            textColor: "#000000",
            highlightColor: "#F5F5F5",
          }
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
