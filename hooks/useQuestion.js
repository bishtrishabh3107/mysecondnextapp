import { useQuery } from 'react-query';
import axios from 'axios';

export default function useQuestion(questionId) {
  return useQuery(['questions', questionId], () =>
    axios.get(`/api/questions/${questionId}`).then((res) => res.data)
  );
}
