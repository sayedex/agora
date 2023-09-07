import { useEffect, useState } from 'react';
import axios from 'axios';
import { NFTMetadata } from '../../typeing';


const useNFTMetadata = (tokenId: string,ref:boolean) => {
  const [metadata, setMetadata] = useState<NFTMetadata | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const url = "https://api.cipherem.xyz/api/token"

  useEffect(() => {
    const fetchNFTMetadata = async () => {
      try {
        const response = await axios.get(`/api/metadata?tokenId=${tokenId}`);
        setMetadata(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching NFT metadata');
        setLoading(false);
      }
    };

    fetchNFTMetadata();
  }, [tokenId,ref]);

  return { metadata, loading, error };
};

export default useNFTMetadata;
