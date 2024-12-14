import api from '../../Api';
import Cookies from 'js-cookie';
export default async function setReservation(form){
  try {

    await api.post('/api/reservation', form, {
      headers: {
        "Content-Type": "application/json",
         "X-XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
      },
      withCredentials: true, 
    }); 
  } catch (error) { 
    console.log(error)
  }

}
