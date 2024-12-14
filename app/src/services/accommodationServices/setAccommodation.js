import api from '../../Api';
import Cookies from 'js-cookie';
export default async function setAccommodation(form){
  try {

    await api.post('/api/accommodation', form, {
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
