import React from 'react';
import useQuestions from '../../../hooks/useQuestions';
import SmallQuestionView from '../../organ/SmallQuestionView';

function Section2() {
  const { status, data, isFetching, error } = useQuestions();
  if (status === 'loading') {
    return <div>loading...</div>; // loading state
  }

  if (status === 'error') {
    return <div>{error.message}</div>; // error state
  }
  return (
    <div className="grid grid-cols-3 gap-3 md:grid-cols-2 sm:grid-cols-1">
      {data.map((el) => (
        <SmallQuestionView key={el.id} id={el.id} title={el.title} />
      ))}
      {isFetching && <p>Updating...</p>}
    </div>
  );
}

export default Section2;
