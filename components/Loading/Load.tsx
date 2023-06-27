import React from "react";
import GridLoader from "react-spinners/GridLoader";

type Props = {};

function LoadSpinner({}: Props) {
  return (
    <div className="h-[90vh] m-auto flex justify-center items-center">
      <GridLoader
        className=""
        color="#ffff"
        loading={true}
        size={10}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default LoadSpinner;
