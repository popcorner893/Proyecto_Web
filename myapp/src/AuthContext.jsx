import { createContext, useContext, useState, useEffect } from "react";

// Crear el contexto
const AuthContext = createContext();

// Hook para usar el contexto fácilmente
export const useAuth = () => useContext(AuthContext);

// Proveedor de autenticación
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // null = no autenticado

  // Cargar sesión persistente (por ejemplo desde localStorage)
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  // Función de login (simulada)
  const login = (email, password) => {
    // Aquí validas credenciales con backend o modelo
    const fakeUser = { email };
    setUser(fakeUser);
    localStorage.setItem("user", JSON.stringify(fakeUser));
  };

  // Función de logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};
