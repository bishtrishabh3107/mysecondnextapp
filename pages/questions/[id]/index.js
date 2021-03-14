import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';
import ClapButton from 'react-clap-button';
import { AiOutlineRollback } from 'react-icons/Ai';
import Image from 'next/image';
import { FcComments } from 'react-icons/fc';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import RadioButtonVisibility from '../../../components/organ/RadioButtonVisibility';
import RazorpayPayment from '../../../components/organ/RazorpayPayment';

function index() {
  const router = useRouter();
  const { id } = router.query;

  // const imageConcat = (imageUrl) => {
  //   return 'https://upayam.herokuapp.com'.concat(imageUrl);
  // };
  const QuestionByIdQuery = gql`
  query QuestionByIdQuery {
    questions(where:{questionId:${id}}) {
      id
      title
      description
      history
      history_layman
      engagement_image{url}
      engagement
      engagement_layman
      development_cycle_image{url}
      development_cycle
      development_cycle_layman
      future_curve_image{url}
      future_curve
      future_curve_layman
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
      <div className="mx-3 mt-3">
        <Link href="/">
          <a>
            <AiOutlineRollback />
          </a>
        </Link>
      </div>
      <div>
        {data.questions.map((el) => (
          <div
            key={el.id}
            className="flex flex-row mx-60 text-center md:mx-7 sm:mx-4"
          >
            <div className="flex flex-col fixed top-50 left-10 text-indigo-800 font-bold underline mt-12 md:invisible sm:invisible">
              <AnchorLink href="#history">History</AnchorLink>
              <AnchorLink href="#engagement">Engagement</AnchorLink>
              <AnchorLink href="#DevelopmentCycle">
                Development Cycle
              </AnchorLink>
              <AnchorLink href="#FutureCurve">Future Curve</AnchorLink>
            </div>
            <div>
              <Image
                src={el.image.url}
                width={1000}
                height={500}
                layout="responsive"
              />
              <h1 className="text-2xl font-bold">{el.title}</h1>
              <p className="my-5">{el.description}</p>
              <div className="text-yellow-600 my-10 content-center">
                <RadioButtonVisibility />
              </div>
              <section id="history">
                <div className="expert">
                  <p className="my-5">{el.history}</p>
                </div>
                <div className="laymen hidden">
                  <p className="my-5">{el.history_layman}</p>
                </div>
              </section>

              <section id="engagement">
                <Image
                  src={el.engagement_image.url}
                  width={1000}
                  height={500}
                  layout="responsive"
                />
                <div className="expert">
                  <p className="my-5">{el.engagement}</p>
                </div>
                <div className="laymen hidden">
                  <p className="my-5">{el.engagement_layman}</p>
                </div>
              </section>
              <section id="DevelopmentCycle">
                <Image
                  src={el.development_cycle_image.url}
                  width={1000}
                  height={500}
                  layout="responsive"
                />
                <div className="expert">
                  <p className="my-5">{el.development_cycle}</p>
                </div>
                <div className="laymen hidden">
                  <p className="my-5">{el.development_cycle_layman}</p>
                </div>
              </section>
              <section id="FutureCurve">
                <Image
                  src={el.future_curve_image.url}
                  width={1000}
                  height={500}
                  layout="responsive"
                />
                <div className="expert">
                  <p className="my-5">{el.future_curve}</p>
                </div>
                <div className="laymen hidden">
                  <p className="my-5">{el.future_curve_layman}</p>
                </div>
              </section>
              <p className="my-5 text-gray-400">Published On: {el.date}</p>
            </div>
            <div className="fixed top-50 right-10 mt-12">
              <ClapButton
                count={0}
                countTotal={0}
                isClicked={false}
                onCountChange={onCountChange}
                iconComponent={(props) => <ClapButton {...props} size={34} />}
              />
              <div className="text-4xl m-3 mt-8">
                <RazorpayPayment />
              </div>
              {/* <div className="text-4xl m-3">
                <FcComments />
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default index;
