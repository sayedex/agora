import { useEffect, useState } from 'react';
import axios from 'axios';
import { NFTMetadata } from '../../typeing';


const useNFTMetadata = (tokenId: string) => {
  const [metadata, setMetadata] = useState<NFTMetadata | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const url = "https://nft.jedstar.com/token"

  useEffect(() => {
    const fetchNFTMetadata = async () => {
      try {
        const response = await axios.get(`${url}/${tokenId}`);
        setMetadata(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching NFT metadata');
        setLoading(false);
      }
    };

    fetchNFTMetadata();
  }, [tokenId]);

  return { metadata, loading, error };
};

export default useNFTMetadata;
