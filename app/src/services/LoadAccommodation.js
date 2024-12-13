import api from '../Api';

export default async function LoadAccommodation(){
  try {
   const response = await api.get('/api/accommodation');
    return response.data;
  } catch (error) {
    
  }

}
