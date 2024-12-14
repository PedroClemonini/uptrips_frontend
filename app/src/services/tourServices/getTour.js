import api from '../../Api';

export default async function getTour(id){
  try {
   const response = await api.get(`/api/tour/${id}`);
    return response.data;
  } catch (error) { 
    console.log(error)
  }

}
