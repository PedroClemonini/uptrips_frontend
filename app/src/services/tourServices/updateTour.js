import api from "../../Api";
import Cookies from "js-cookie";
export default async function updateTour(form) {
  try {
    await api.put(`/api/tour/${form.id}`, form, {
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
