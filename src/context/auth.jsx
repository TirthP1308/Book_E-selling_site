import React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import shared from "../utils/shared";
import { RoutePaths } from "../utils/enum";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const initialUserValue = {
  id: 0,
  email: "",
  firstName: "",
  lastName: "",
  roleId: 0,
  role: "",
  password: "",
};

const initialValues = {
  user: initialUserValue,
  appInitialize: false,
  setUser: () => {},
  logOut: () => {},
};

export const AuthContext = createContext(initialValues);

export const AuthWrapper = ({ children }) => {
  const [appInitialize, setAppInitialize] = useState(false);
  const [user, _setUser] = useState(initialUserValue);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const setUser = (user) => {
    localStorage.setItem(shared.LocalStorageKeys.USER, JSON.stringify(user));
    _setUser(user);
  };

  useEffect(() => {
    const existingUser =
      JSON.parse(localStorage.getItem(shared.LocalStorageKeys.USER)) ||
      initialUserValue;
    if (!existingUser.id) {
      navigate(`${RoutePaths.Login}`);
    }
    _setUser(existingUser);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (pathname === RoutePaths.Login && user.id) {
      navigate(RoutePaths.BookListing);
    }
    if (!user.id) {
      return;
    }

    const access = shared.hasAccess(pathname, user);
    if (!access) {
      navigate(RoutePaths.BookListing);
      toast.warning("You aren't allowed to access this section.");
      return;
    }
    setAppInitialize(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, user]);

  const logOut = () => {
    _setUser(initialUserValue);
    localStorage.removeItem(shared.LocalStorageKeys.USER);
    navigate(`${RoutePaths.Login}`)
  };

  return <AuthContext.Provider value={{ user, setUser, logOut, appInitialize }}>
      {children}
    </AuthContext.Provider>
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
