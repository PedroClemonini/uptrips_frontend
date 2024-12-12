import api from '../Api';

export default async function LoadPackage() {

  try {
    api.get('/api/');
  } catch (error) {
    console.log(error)
  }
}


