import api from '../../Api';

export default async function getReservation(id){
  try {
   const response = await api.get(`/api/reservation/${id}`);
    return response.data;
  } catch (error) { 
    console.log(error)
  }

}
