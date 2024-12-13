import api from '../Api';

export default async function LoadPackage() {

  try {
   const response = await api.get('/api/packages');
    return response.data;
  } catch (error) {
    console.log(error)
  }
}


