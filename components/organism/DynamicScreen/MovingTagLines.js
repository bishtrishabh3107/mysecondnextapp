import React from 'react';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';
import TagLine from './TagLine';

const CategoryQuery = gql`
  query CategoryQuery {
    categories {
      id
      name
    }
  }
`;

function MovingTagLines() {
  const { error, data, loading } = useQuery(CategoryQuery);
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
    <div className="mx-2">
      <div className="mt-4">
        {data.categories.map((el) => (
          <div key={el.id}>
            <marquee behavior="scroll" direction="left" scrollamount="5">
              <TagLine name={el.name} />
            </marquee>
          </div>
        ))}
      </div>
    </div>
  );
}
export default MovingTagLines;
