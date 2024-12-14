import api from "../Api";
import Cookies from "js-cookie";
export default async function deleteHosting(id) {
  try {
    await api.delete(`/api/hosting/${id}`, {
      headers: {
        "Content-Type": "application/json",
         "X-XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
      },
      withCredentials: true,
    });
  } catch (error) {
    console.log(error);
  }
}
