import Link from 'next/link';
function SmallQuestionView({ id, title }) {
  return (
    <div>
      <Link href="/questions/[id]" as={`/questions/${id}`}>
        <a className="text-xl text-center">{title}</a>
      </Link>
    </div>
  );
}

export default SmallQuestionView;
