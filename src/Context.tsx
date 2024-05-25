import React, { ReactNode, createContext, useContext, useState } from "react";

interface AppContextData {
  isDark: boolean;
  toggleTheme: () => void;
}

const AppContext = createContext<AppContextData | null>(null);

export const useAppContext = () => {
  const data = useContext(AppContext);
  if (!data) {
    throw new Error("Can not `useAppContext` outside of the `AppProvider`");
  }
  return data;
};

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  const [isDark, setTheme] = useState<boolean>(true);

  const toggleTheme = (): void => {
    setTheme((prev) => !prev);
  };

  return (
    <AppContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
