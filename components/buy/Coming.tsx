import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Comingsoon } from "../../config/collection";
type Props = {};

export function Coming({}: Props) {
  return (
    <div className="flex flex-col gap-y-5 pt-10">
      {Comingsoon?.map((e, indx) => {
        return (
          <div key={indx} className="flex flex-col gap-y-5">
            <div>
              <LazyLoadImage src={e.icon} />
            </div>
            <p>{e.title}</p>
            <p className="globaldarktext font-bold">{e.subtitle}</p>
          </div>
        );
      })}
    </div>
  );
}
