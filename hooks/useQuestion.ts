import { useQuery, gql } from '@apollo/client';

export default function useQuestion(id) {
  const QuestionByIdQuery = gql`
  query QuestionByIdQuery {
    question(questionId: ${id}) {
      questionId
      title
      description
      body
      date
    }
  }
`;

  return useQuery(QuestionByIdQuery);
}
