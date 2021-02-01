import { useQuery } from 'react-query';
import { GetCategories } from '../../../reactQueries/reactqueries';
import SmallCard from '../../organ/SmallCard';
import SideScreen from '../SideScreens';
import { Divider } from '@chakra-ui/react';

function Section1() {
  const { status, data, isFetching, error } = useQuery(
    'categories',
    GetCategories
  );
  if (status === 'loading') {
    return <div>loading...</div>; // loading state
  }

  if (status === 'error') {
    return <div>{error.message}</div>; // error state
  }
  return (
    <div className="grid grid-cols-4 gap-4 md:grid-cols-1 sm:grid-cols-1">
      <div className="m-2 col-span-3 sm:invisible sm:h-0">
        <div className="grid grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2">
          {data.map((el) => (
            <SmallCard key={el.id} name={el.name} />
          ))}
          {isFetching && <p>Updating...</p>}
        </div>
      </div>

      <div className="flex col-span-1">
        <Divider className="sm:invisible sm:h-0" orientation="vertical" />
        <SideScreen />
      </div>
    </div>
  );
}

export default Section1;
