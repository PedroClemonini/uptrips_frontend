import api from '../Api';

export default async function LoadUserService(){

  try{
   const response = await api.get('/api/users',{withCredentials:true});
   return response.data; 
  }catch(error){
    console.log(error);
  }
}
