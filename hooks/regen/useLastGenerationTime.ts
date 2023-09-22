import { useEffect, useState,useCallback } from "react";
import { getNftContractinstance } from "../../utils/Contracthelper"; // Import your contract utility function here

interface LastGenerationTimeHook {
  loading: boolean;
  regenEnable:boolean;
  lastGenerationTime: string | null;
  countdown: string | null;
  error: string | null;
  fetchLastGenerationTime:()=>void
}

const useLastGenerationTime = (tokenId: string,ref:boolean): LastGenerationTimeHook => {
  const [loading, setLoading] = useState<boolean>(false);
  const [lastGenerationTime, setLastGenerationTime] = useState<string | null>(
    null
  );
  const [countdown, setCountdown] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [regenEnable, setregenEnable] = useState(true);




const getTime = ()=>{
  if(!lastGenerationTime) return;
  const updatedTimestamp = Number(lastGenerationTime) + 900;
  const time  =updatedTimestamp*1000- Date.now();
   // Check if time has finished
   if (time <= 0) {
    setCountdown("THE OWNER CAN REGEN THIS NFT"); // Or any message you want
    setregenEnable(false)
    return; // Stop further countdown updates
  }

  const minutes = Math.floor((time/1000/60)%60);
  const seconds = Math.floor((time/1000)%60);
  const Timeleft  = `${minutes}m ${seconds}s`;
  setCountdown(Timeleft)
}


useEffect(()=>{

  const interval = setInterval(() => {
    getTime();
  }, 1000);

  
  return () => {
    clearInterval(interval)
  }
},[lastGenerationTime])



const fetchLastGenerationTime = useCallback(async () => {
  setLoading(true);
  setError(null);

  try {
    const contract = await getNftContractinstance();
    const lastGenTime = await contract.getItemLastGenTime(tokenId);
    setLastGenerationTime(lastGenTime.toString());


  } catch (err) {
    setError("Error fetching last generation time");
    console.error(err);
  } finally {
    setLoading(false);
  }
}, [tokenId]);


  useEffect(() => {
  
    if (tokenId) {
      fetchLastGenerationTime();
    }
  }, [tokenId,ref])
 


  return { loading, lastGenerationTime, countdown, error ,regenEnable,fetchLastGenerationTime};
};

export default useLastGenerationTime;
