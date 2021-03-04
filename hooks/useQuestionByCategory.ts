import { useQuery, gql } from '@apollo/client';

export default function useQuestionByCategory({ id }) {
  const category = JSON.stringify(id);
  const QuestionByCategory = gql`
    query QuestionByCategory {
      questions(where: { question_category: ${category}}) {
        id
        title
        description
        body
        date
        questionId
      }
    }
  `;

  return useQuery(QuestionByCategory);
}
