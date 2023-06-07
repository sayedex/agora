import React, { useEffect } from "react";
import Addpd from "../../components/admin/addproduct/Addpd";

type Props = {};

function addproduct({}: Props) {
  return (
    <div className="adminpanelcomponent">
      <Addpd mode="add" />
    </div>
  );
}

export default addproduct;
