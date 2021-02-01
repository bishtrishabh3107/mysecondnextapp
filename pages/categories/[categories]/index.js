import { useRouter } from 'next/router';

function index() {
  const router = useRouter();
  const { categories } = router.query;

  return <div>{categories}</div>;
}

export default index;
