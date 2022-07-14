import { createContext, useState } from "react";

const DesignerContext = createContext();

export const DesignerInfoProvider = ({ children }) => {
  /* Minimalist Template */

  const [minimalistHeadingSpacing, setMinimalistHeadingSpacing] = useState();

  return (
    <DesignerContext.Provider
      value={{ minimalistHeadingSpacing, setMinimalistHeadingSpacing }}
    >
      {children}
    </DesignerContext.Provider>
  );
};

export default DesignerContext;
