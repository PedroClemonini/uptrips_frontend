import api from '../Api';

export default async function LoadTour(){
  try {
   const response = await api.get('/api/tour');
    return response.data;
  } catch (error) {
    
  }

}
