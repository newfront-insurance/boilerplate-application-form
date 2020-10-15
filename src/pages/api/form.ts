import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = await import('../../data/form.json');

  return res.status(200).json(data);
};
