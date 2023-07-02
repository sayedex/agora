import Popup from "reactjs-popup";
import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react";
// logo.
import { DualTitleImage } from "./Helper/Platfrombox";
import { XMarkIcon } from "@heroicons/react/24/outline";
type Props = {};


 const PopupforPlatfroms = forwardRef((pros: Props, ref: any) => {
  const [open, setOpen] = useState(false);
  useImperativeHandle(ref, () => {
    return {
      openPopup: () => setOpen(true),
      closePopup: () => setOpen(false),
    };
  });
  const ContentStyle = {
    backgroundColor: "#303030",
    borderRadius: "10px",
    padding: 0,
    width: "100%",
    margin: "0",
    height: "fit-content",
  };
  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div>
      <Popup
        contentStyle={ContentStyle}
        open={open}
        className="rounded-lg bg-red-400"
        onClose={closeModal}
      >
        <div className="flex justify-end p-6  h-fit">
          <XMarkIcon
            onClick={() => setOpen((o) => !o)}
            className="text-white hover:text-gray-500 font-semibold dark:text-white cursor-pointer relative"
            width={30}
            height={30}
          />
        </div>

        <div className="flex flex-col md:flex-row p-10">
          <DualTitleImage
            title1="Charge-to-Earn (C2E) auction platform, where Generators would charge their phones to generate VOLTS through our app, which can then be used to bid for, and win exclusive gaming prizes."
            title2="CHARGE. GENERATE. WIN.        "
            imageSrc="icon/SILVERVOLT_LOGO.webp"
          />

          <DualTitleImage
            title1="Charge-to-Earn (C2E) auction platform, where Generators would charge their phones to generate VOLTS through our app, which can then be used to bid for, and win exclusive gaming prizes."
            title2="CHARGE. GENERATE. WIN.        "
            imageSrc="icon/SILVERVOLT_LOGO.webp"
          />
        </div>
      </Popup>
    </div>
  );
});

PopupforPlatfroms.displayName = 'PopupForPlatforms';
export default PopupforPlatfroms;
