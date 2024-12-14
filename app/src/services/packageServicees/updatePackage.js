import api from "../../Api";
import Cookies from "js-cookie";
export default async function updatePackage(form) {
  try {
    await api.put(`/api/package/${form.id}`, form, {
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
