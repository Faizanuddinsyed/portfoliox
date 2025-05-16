import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(() => {
    const storedUser = localStorage.getItem("authUser");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const navigate = useNavigate();

  // ✅ Reusable function to fetch user data
  const fetchUser = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const response = await axios.get("http://localhost:5000/api/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      });

      setAuthUser(response.data.user);
    } catch (error) {
      console.error("User not authenticated", error.message);
      setAuthUser(null);
      localStorage.removeItem("authUser");
      localStorage.removeItem("token");
    }
  };

  // ✅ Fetch user data on page load
  useEffect(() => {
    fetchUser();
  }, []);

  // ✅ Update localStorage when authUser changes
  useEffect(() => {
    if (authUser) {
      localStorage.setItem("authUser", JSON.stringify(authUser));
    } else {
      localStorage.removeItem("authUser");
    }
  }, [authUser]);

  // ✅ Login function: Save token and fetch user immediately
  const login = async (formData) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData,
        { withCredentials: true }
      );

      const { token, user } = response.data;
      localStorage.setItem("token", token);

      await fetchUser(); // ✅ Fetch user immediately after login

      navigate("/"); // ✅ Redirect to dashboard after login
      return response.data.success;
    } catch (error) {
      console.error("Login failed:", error.message);
      throw error;
    }
  };

  // ✅ Logout function: Remove user and token from storage & redirect
  const logout = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/auth/logout",
        {},
        { withCredentials: true }
      );

      setAuthUser(null);
      localStorage.removeItem("authUser");
      localStorage.removeItem("token");

      navigate("/login"); // ✅ Redirect to login after logout
      console.log("User logged out successfully");
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Hook to use AuthContext in other components
export const useAuth = () => useContext(AuthContext);
