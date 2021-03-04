import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import useQuestionByCategory from 'hooks/useQuestionByCategory';
import { AiOutlineRollback } from 'react-icons/Ai';

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
    <div>
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
            <div key={el.id}>
              <VerticalTimelineElement
                className="vertical-timeline-element--work mb-5"
                contentStyle={{
                  background: 'rgb(33, 150, 243)',
                  color: '#fff',
                }}
                contentArrowStyle={{
                  borderRight: '7px solid  rgb(33, 150, 243)',
                }}
                date={el.date}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              >
                <>
                  <Link href={`/questions/${el.questionId}`}>
                    <h1 className="vertical-timeline-element-title cursor-pointer">
                      {el.title}
                    </h1>
                  </Link>
                  <Link href={`/questions/${el.questionId}`}>
                    <h4 className="vertical-timeline-element-subtitle cursor-pointer">
                      {el.description}
                    </h4>
                  </Link>
                  <p>{el.date}</p>
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
