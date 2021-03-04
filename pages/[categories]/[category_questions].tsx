import { useRouter } from 'next/router';
import Link from 'next/link';
// import { useQuery } from '@apollo/client';
// import { gql } from '@apollo/client';
import useQuestionByCategory from 'hooks/useQuestionByCategory';

// function index() {
//   const router = useRouter();
//   const { id } = router.query;
//   let question_category = id;
//   console.log(question_category);
//   const { error, data, loading } = useQuestionByCategory(question_category);
//   console.log({ data });
//   if (loading) {
//     return (
//       <div>
//         <p>Relax, it's worth the wait...</p>
//       </div>
//     ); // loading state
//   }
//   if (error) {
//     return <div>{error.message}</div>; // error state
//   }
//   return (
//     <div>
//       <div>
//         <Link href="/">
//           <a>Back</a>
//         </Link>
//       </div>
//       <div>
//         {data.questions.map((el) => (
//           <div key={el.id}>
//             <h1>{el.title}</h1>
//             <p>{el.description}</p>
//             <p>{el.date}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default index;

import React from 'react';

function category_questions() {
  const router = useRouter();
  const category_data = router.query;
  console.log(category_data);
  return (
    <div>
      <h1>{router.query.category}</h1>
      <h2>{router.query.category_question}</h2>
    </div>
  );
}

export default category_questions;
