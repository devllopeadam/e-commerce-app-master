/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const ActiveLinkContext = createContext(null);

const useActiveLink = () => useContext(ActiveLinkContext);

const ActiveLinkProvider = ({ children }) => {
  const [activeLink, setActiveLink] = useState("home");
  const values = { activeLink, setActiveLink };

  return (
    <ActiveLinkContext.Provider value={values}>
      {children}
    </ActiveLinkContext.Provider>
  );
};

export { useActiveLink, ActiveLinkProvider };
