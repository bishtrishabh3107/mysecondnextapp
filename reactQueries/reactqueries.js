import axios from 'axios';
export const GetCategories = async () => {
  const { data } = await axios.get('http://localhost:3000/api/categories/');
  return data;
};
