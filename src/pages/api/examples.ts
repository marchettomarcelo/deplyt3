import { type NextApiRequest, type NextApiResponse } from "next";

const examples = async (req: NextApiRequest, res: NextApiResponse) => {
  const examples = "oi";
  res.status(200).json(examples);
};

export default examples;
