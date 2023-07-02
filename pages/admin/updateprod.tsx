import Addpd from "../../components/admin/addproduct/Addpd";
import { useRouter } from "next/router";

import React from 'react'

type Props = {}

function Updateprod({}: Props) {
    const router = useRouter();
    const { id } = router.query;

  

  return (
    <div className="adminpanelcomponent">
    <Addpd mode='update'  id={id?.toString()} />
  </div>
  )
}

export default Updateprod