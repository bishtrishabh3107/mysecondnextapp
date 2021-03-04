import { useRouter } from 'next/router';
import Link from 'next/link';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';
import ClapButton from 'react-clap-button';
import { AiOutlineRollback } from 'react-icons/Ai';
import Image from 'next/image';

function index() {
  const router = useRouter();
  const { id } = router.query;

  const QuestionByIdQuery = gql`
  query QuestionByIdQuery {
    questions(where:{questionId:${id}}) {
      id
      title
      description
      body
      date
      image{url}
    }
  }`;

  const { error, data, loading } = useQuery(QuestionByIdQuery);
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
  const onCountChange = ({ count, countTotal }) => {
    countTotal = count + 1;
  };
  return (
    <div>
      <div className="m-3">
        <Link href="/">
          <a>
            <AiOutlineRollback />
          </a>
        </Link>
      </div>
      <div>
        {data.questions.map((el) => (
          <div key={el.id} className="mx-32 text-center">
            <Image
              src={el.image.url}
              alt="Picture of the author"
              width={500}
              height={500}
            />
            <h1 className="text-2xl">{el.title}</h1>
            <p>{el.description}</p>
            <p>{el.body}</p>
            <p>{el.date}</p>
            <div className="my-10 border-none outline-none">
              <ClapButton
                count={0}
                countTotal={0}
                isClicked={false}
                onCountChange={onCountChange}
                iconComponent={(props) => <ClapButton {...props} size={30} />}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default index;
