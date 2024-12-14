import api from '../../Api';

export default async function getAccommodation(id){
  try {
   const response = await api.get(`/api/accommodation/${id}`);
    return response.data;
  } catch (error) { 
    console.log(error)
  }

}
