import React from 'react';
import SmallQuestionView from '../../organ/SmallQuestionView';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';

const QuestionQuery = gql`
  query QuestionQuery {
    questions {
      questionId
      title
    }
  }
`;

function Section2() {
  const { error, data, loading } = useQuery(QuestionQuery);
  if (loading) {
    return (
      <div>
        <p>Relax, it's worth the wait...</p>
      </div>
    ); // loading state
  }
  if (error) {
    return <div>{error.message}</div>; // error state
  }
  return (
    <>
      <h1 className="text-xl text-red-400 m-5">Popular उPaay</h1>
      <div className="grid grid-cols-3 gap-3 md:grid-cols-2 sm:grid-cols-1">
        {data.questions.map((el) => (
          <SmallQuestionView
            key={el.questionId}
            questionId={el.questionId}
            title={el.title}
          />
        ))}
      </div>
    </>
  );
}

export default Section2;
