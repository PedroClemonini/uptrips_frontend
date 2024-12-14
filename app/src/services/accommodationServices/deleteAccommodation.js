import api from '../../Api';
import Cookies from "js-cookie";
export default async function deleteAccommodation(id) {
  try {
    await api.delete(`/api/accommodation/${id}`, {
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
