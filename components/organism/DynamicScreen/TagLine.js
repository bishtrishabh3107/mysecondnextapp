import useTagLineByCategory from 'hooks/useTagLineByCategory';
import React from 'react';
import Link from 'next/link';

function TagLine({ name }) {
  const { error, data, loading } = useTagLineByCategory({ name });
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
    <div>
      <div className="flex flex-row flex-nowrap justify-between mb-7 text-red-400">
        {data.questions.map((el) => (
          <div key={el.id}>
            <Link href={`/questions/${el.questionId}`}>
              <h1 className="mx-3 cursor-pointer font-semibold">
                {el.tag_line1}
              </h1>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TagLine;
