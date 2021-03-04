import Link from 'next/link';
function SmallQuestionView({ questionId, title }) {
  return (
    <div>
      <Link href="/questions/[id]" as={`/questions/${questionId}`}>
        <a className="text-xl text-center">{title}</a>
      </Link>
    </div>
  );
}

export default SmallQuestionView;
