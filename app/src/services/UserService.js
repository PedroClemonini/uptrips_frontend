import api from "../Api";
import Cookies from "js-cookie";

async function LoginService(formData) {
  try {
    if (!!Cookies.get("XSRF-TOKEN")) {
      alert("Você já está conectado");
    }
    await api.get("sanctum/csrf-cookie", { withCredentials: true });

    const response = await api.post("/login", formData, {
      headers: {
        "X-XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
      },
      withCredentials: true,
    });

    if (response.status !== 204) {
      throw new Error("Login failed: Unexpected response status.");
    }

    const user = await api.get("/api/user", {
      headers: {
        "X-XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
      },
      withCredentials: true,
    });
    console.log(user);
    Cookies.set("userId", user.data.id);
    Cookies.set("levelUser", user.data.levelUser);
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
}

export default LoginService;
