import Link from 'next/link';

function SmallCard({ name }) {
  return (
    <Link href={`/categories/${name}`}>
      <a className="p-2 h-12 rounded bg-gray-900 text-gray-50 bg-gradient-to-r from-indigo-900 to-gray-700">
        <h1 className="text-xl text-center">{name}</h1>
      </a>
    </Link>
  );
}

export default SmallCard;
