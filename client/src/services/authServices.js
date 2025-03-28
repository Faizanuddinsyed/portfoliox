// import axios from "axios";
// import { useAuth } from "../context/AuthContext";

// // Login function
// export const login = async (formData) => {
    
//   try {
//     const response = await axios.post(
//       "http://localhost:5000/api/auth/login",
//       formData,
//       { withCredentials: true }
//     );
//     setAuthUser(response.data.user);
//     console.log("logged in  user:", response.data.user);
//   } catch (error) {
//     console.error("Login failed:", error.message);
//     throw error;
//   }
// };

// // Logout function
// export const logout = async () => {
//   try {
//     await axios.post(
//       "http://localhost:5000/api/auth/logout",
//       {},
//       { withCredentials: true }
//     );
//     setAuthUser(null);
//     console.log("logged out user");
//   } catch (error) {
//     console.error("Logout failed:", error.message);
//   }
// };
