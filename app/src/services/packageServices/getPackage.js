import api from '../../Api';

export default async function getPackage(id){
  try {
   const response = await api.get(`/api/package/${id}`);
    return response.data;
  } catch (error) { 
    console.log(error)
  }

}
