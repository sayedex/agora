import React, { useEffect, useState } from 'react'
import { ConnectButton } from '../Header/connect'
type Props = {
    info:string
}

function NotConneted({info}: Props) {
  const [load,setload] = useState(false);
  
useEffect(()=>{
  setload(true)
},[])

  return (<>
  {load && 
    <div className="flex flex-col gap-3 pt-5">
  
    <h1 className="text-center text-3xl  text_transparent_grcolor font-extrabold tracking-[1px]">
      PLEASE LOG IN
    </h1>
    <p className="text-center m">
{info}
      <div className="pt-1">
        <ConnectButton />
      </div>
    </p>
  </div>}
  </>
  )
}

export default NotConneted