import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';

const CategoryQuery = gql`
  query CategoryQuery {
    categories {
      id
      name
    }
  }
`;

function TagScreen() {
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
    <div className="">
      <div className="">
        <div className="">
          {/* {data.categories.map((el) => (
            
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default TagScreen;
