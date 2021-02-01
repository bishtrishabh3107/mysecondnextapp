import { useQuery } from 'react-query';
import axios from 'axios';

export default function useQuestions() {
  return useQuery('questions', () =>
    axios.get('/api/questions').then((res) => res.data)
  );
}
