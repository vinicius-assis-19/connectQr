import React, { createContext, useState } from "react";
import { Alert } from "react-native";
import assinaturas from '../services/assinaturas'

const AuthContext = createContext({ signed: Boolean });

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  
  async function signIn(email, password){    
    const response = await assinaturas.signIn(email, password);    
    setUser(response);
  }
  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;