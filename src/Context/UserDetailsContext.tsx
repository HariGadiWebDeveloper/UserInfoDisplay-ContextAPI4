import { createContext, useContext, useState, type ReactNode } from "react";

interface UserData {
  full_name: string;
  mobile_no: string;
  email: string;
}

interface UserDetailsContextTypes {
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
}
const UserDetailsContext = createContext<UserDetailsContextTypes | null>(null);

export const UserDetailsContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [userData, setUserData] = useState<UserData>({
    full_name: "",
    mobile_no: "",
    email: "",
  });

  return (
    <UserDetailsContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDetailsContext.Provider>
  );
};

export const userContext = () => {
  const context = useContext(UserDetailsContext);
  if (!context) {
    throw new Error("User Context Data is empty");
  }
  return context;
};
