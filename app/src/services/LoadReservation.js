import api from '../Api';

export default async function LoadReservation(){
  try {
   const response = await api.get('/api/reservation');
    return response.data;
  } catch (error) {
    
  }

}
