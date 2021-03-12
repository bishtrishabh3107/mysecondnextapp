import React from 'react';
import SmallQuestionView from '../../organ/SmallQuestionView';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';

const QuestionQuery = gql`
  query QuestionQuery {
    questions(where: { rating: 10 }) {
      questionId
      title
      image {
        url
      }
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
  const imageConcat = (imageUrl) => {
    return 'http://localhost:1337'.concat(imageUrl);
  };

  return (
    <>
      <h1 className="text-xl font-bold text-red-400 m-5 md:m-3 sm:m-1">
        Popular उPaay
      </h1>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-2 sm:grid-cols-1">
        {data.questions.map((el) => (
          <SmallQuestionView
            key={el.questionId}
            questionId={el.questionId}
            title={el.title}
            imageUrl={imageConcat(el.image.url)}
          />
        ))}
      </div>
    </>
  );
}

export default Section2;
