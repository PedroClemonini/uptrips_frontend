import api from '../../Api';

export default async function LoadHosting(){
  try {
   const response = await api.get('/api/hosting');
    return response.data;
  } catch (error) {
    
  }

}
