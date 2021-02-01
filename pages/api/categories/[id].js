import { categories } from '../../../data/categories';

export default function handler({ query: { id } }, res) {
  const filtered = categories.filter((category) => category.id == id);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res
      .status(404)
      .json({ message: `Categories with id ${id} is not available` });
  }
}
