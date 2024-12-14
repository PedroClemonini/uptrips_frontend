import api from '../../Api';

export default async function LoadDestination(){
  try {
   const response = await api.get('/api/destination');
    return response.data;
  } catch (error) {
    
  }

}
