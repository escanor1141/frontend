// Este archivo define un contexto de autenticación para manejar el estado de usuario en la aplicación.
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Tipado de los datos que tendrá el contexto
interface AuthContextData {
  user: string | null;
  signIn: (username: string) => void;
  signOut: () => void;
}

// Creamos el contexto
const AuthContext = createContext<AuthContextData | undefined>(undefined);

// Tipado de las propiedades del proveedor
interface AuthProviderProps {
  children: ReactNode;
}

// Componente proveedor que encapsula toda la app
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<string | null>(null);

  const signIn = (username: string) => {
    setUser(username);
  };

  const signOut = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para consumir el contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};
