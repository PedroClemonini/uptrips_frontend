import api from '../../Api';
import Cookies from "js-cookie";
export default async function deletePackage(id) {
  try {
    await api.delete(`/api/package/${id}`, {
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
