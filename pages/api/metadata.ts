import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Get the tokenId from the query parameters
    const { tokenId } = req.query;

    // Perform any logic you need with the tokenId
    // For example, fetch data from an external API using axios
    const response = await axios.get(`https://api.cipherem.xyz/api/token/${tokenId}`);
    const data = response.data;

    // Send the data as a JSON response
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching token data:');
    res.status(500).json({ error: 'Internal server error' });
  }
};
