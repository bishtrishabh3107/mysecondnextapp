import { useQuery, gql } from '@apollo/client';

export default function useTagLineByCategory({ name }) {
  const category = JSON.stringify(name);
  const TagLineByCategory = gql`
    query QuestionByCategory {
      questions(where: { question_category: ${category}}) {
        tag_line
        id
        questionId
      }
    }
  `;

  return useQuery(TagLineByCategory);
}
