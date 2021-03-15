import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import useQuestionByCategory from 'hooks/useQuestionByCategory';
import { AiOutlineRollback } from 'react-icons/ai';
import { GiBrain } from 'react-icons/gi';

function index() {
  const router = useRouter();
  const { id } = router.query;
  const { error, data, loading } = useQuestionByCategory({ id });

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
    <div className="ml-32 md:ml-0 sm:ml-0">
      <div className="m-3">
        <Link href="/">
          <a>
            <AiOutlineRollback />
          </a>
        </Link>
      </div>
      <div>
        <VerticalTimeline>
          {data.questions.map((el) => (
            <div key={el.id} className="mb-5">
              <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{
                  background: 'rgb(33, 150, 243)',
                  color: '#fff',
                }}
                contentArrowStyle={{
                  borderRight: '7px solid  rgb(33, 150, 243)',
                }}
                date={el.date}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<GiBrain />}
              >
                <>
                  <Link href={`/questions/${el.questionId}`}>
                    <h1 className="vertical-timeline-element-title cursor-pointer text-blue-900 font-bold">
                      {el.title}
                    </h1>
                  </Link>
                  <Link href={`/questions/${el.questionId}`}>
                    <h4 className="vertical-timeline-element-subtitle cursor-pointer">
                      {el.description}
                    </h4>
                  </Link>
                </>
              </VerticalTimelineElement>
            </div>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default index;
