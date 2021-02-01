import { questions } from '../../../data/questions';

export default function handler({ query: { id } }, res) {
  const filtered = questions.filter((question) => question.id == id);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res
      .status(404)
      .json({ message: `Question with id ${id} is not available` });
  }
}
