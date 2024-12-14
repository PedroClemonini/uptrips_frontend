import api from '../../Api';

export default async function LoadPackage(){
  try {
   const response = await api.get('/api/package');
    return response.data;
  } catch (error) {
    
  }

}
