import api from '../../Api';

export default async function getDestination(id){
  try {
   const response = await api.get(`/api/destination/${id}`);
    return response.data;
  } catch (error) { 
    console.log(error)
  }

}
