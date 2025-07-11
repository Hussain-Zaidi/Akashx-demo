import { createContext, useContext, useState, ReactNode } from "react";

interface NotificationContextType {
  showNotification: (message: string, type: "success" | "error",id:string) => void;
  hideNotification: () => void;
  notification: { visible: boolean; message: string; type: "success" | "error",id:string };
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [notification, setNotification] = useState({
    visible: false,
    message: "",
    type: "success" as "success" | "error", // Default to 'success'
    id:''
  });

  const showNotification = (message: string, type: "success" | "error",id:string) => {
    setNotification({ visible: true, message, type,id});
    // setTimeout(() => hideNotification(), 5000); // Hide after 5 seconds
  };

  const hideNotification = () => {
    setNotification({ visible: false, message: "", type: "success",id:''});
  };

  return (
    <NotificationContext.Provider value={{ showNotification, hideNotification, notification }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useNotification must be used within a NotificationProvider");
  }
  return context;
};
