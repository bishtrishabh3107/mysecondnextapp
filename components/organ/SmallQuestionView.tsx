import Link from 'next/link';
import Image from 'next/image';

function SmallQuestionView({ questionId, title, imageUrl }) {
  return (
    <div className="m-5 text-center md:m-3 sm:m-1">
      <Image src={imageUrl} width={1000} height={500} layout="responsive" />
      <Link href="/questions/[id]" as={`/questions/${questionId}`}>
        <a className="text-xl font-semibold text-yellow-500 mt-4">{title}</a>
      </Link>
    </div>
  );
}

export default SmallQuestionView;
