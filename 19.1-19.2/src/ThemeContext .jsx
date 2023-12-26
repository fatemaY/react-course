import { createContext, useState } from "react";


export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setDarkMode] = useState(false);
    const toggleTheme = () => {
        setDarkMode((prevMode) => !prevMode);
      };
    const theme = isDarkMode ? 'dark' : 'light';
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          {children}
        </ThemeContext.Provider>
      );
    }

//     const [isDarkMode, setDarkMode] = useState(false);
//     const toggleTheme = () => {
//       setDarkMode((prevMode) => !prevMode);
//     };
//     const theme = isDarkMode ? 'dark' : 'light';
//     return (
//       <ThemeContext.Provider value={{ theme, toggleTheme }}>
//         {children}
//       </ThemeContext.Provider>
//     );
//   };
