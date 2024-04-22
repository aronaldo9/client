import { Token, User } from "@/api";
import { createContext, useEffect, useState } from "react";

const tokenCtrl = new Token();
const userCtrl = new User();

export const AuthContext = createContext();

export function AuthProvider(props) {
  const { children } = props;
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const login = async (token) => {
    try {
      // TODO: setear el token en el LocalStorage
      tokenCtrl.setToken(token);
      // TODO: obtener datos del usuario
      const response = await userCtrl.getMe();
      // TODO: setear los datos del usuario en el state user
      setUser(response);
      // TODO: setear el valor de token en el state token
      setToken(token);
      // TODO: hacer un setLoading false
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const data = {
    accessToken: token,
    user,
    login,
    logout: null,
    updateUser: null,
  };

  if (loading) return null;

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
