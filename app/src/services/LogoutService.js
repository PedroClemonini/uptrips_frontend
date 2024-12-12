import api from "../Api";
import Cookies from "js-cookie";

async function LogoutService() {
  try {
    await api.post("/logout", "", {
      headers: {
        "X-XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
      },
      withCredentials: true,
    });
    Cookies.remove("XSRF-TOKEN");
    Cookies.remove("userId");
    Cookies.remove("levelUser");
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
}

export default LogoutService;
