import { useRouter } from 'next/router';
import Link from 'next/link';
import useQuestion from '../../../hooks/useQuestion';

function index() {
  const router = useRouter();
  const { id } = router.query;
  const { status, data, error, isFetching } = useQuestion(id);

  return (
    <div>
      <div>
        <Link href="/">
          <a>Back</a>
        </Link>
      </div>
      {!id || status === 'loading' ? (
        'Loading...'
      ) : status === 'error' ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          <h1>{data.title}</h1>
          <div>
            <p>{data.description}</p>
            <p>{data.body}</p>
          </div>
          <div>{isFetching ? 'Background Updating...' : ' '}</div>
        </>
      )}
    </div>
  );
}

export default index;
