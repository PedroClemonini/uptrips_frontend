import api from '../Api';

export default async function getHosting(id){
  try {
   const response = await api.get(`/api/hosting/${id}`);
    return response.data;
  } catch (error) { 
    console.log(error)
  }

}
