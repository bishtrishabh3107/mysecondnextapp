import SmallCard from '../components/organ/SmallCard';
import TagScreen from '../components/organism/TagScreen';
import { Divider } from '@chakra-ui/react';
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

function Categories() {
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
    <div className="grid grid-cols-4 md:grid-cols-1 sm:grid-cols-1">
      <div className="m-1 col-span-1">
        <div className="grid grid-cols-1 gap-2">
          {data.categories.map((el) => (
            <SmallCard key={el.id} name={el.name} />
          ))}
        </div>
      </div>

      <div className="flex col-span-3">
        <Divider className="sm:invisible sm:h-0" orientation="vertical" />
        <TagScreen />
      </div>
    </div>
  );
}

export default Categories;
