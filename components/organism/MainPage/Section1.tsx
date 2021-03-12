import SmallCard from '../../organ/SmallCard';
import { Divider } from '@chakra-ui/react';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';
import MovingTagLines from '../DynamicScreen/MovingTagLines';

const CategoryQuery = gql`
  query CategoryQuery {
    categories {
      id
      name
    }
  }
`;

function Section1() {
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
    <div className="grid grid-cols-7 md:grid-cols-5 sm:grid-cols-3">
      <div className="m-1 col-span-2 md:col-span-1 sm:col-span-1">
        <div className="grid grid-cols-1 gap-2">
          {data.categories.map((el) => (
            <SmallCard key={el.id} name={el.name} />
          ))}
        </div>
      </div>
      <div className="flex col-span-5 md:col-span-4 sm:col-span-2">
        <Divider className="sm:invisible sm:h-0" orientation="vertical" />
        <MovingTagLines />
      </div>
    </div>
  );
}

export default Section1;
