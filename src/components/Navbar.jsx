import React from "react";

export const NavBar = () => {
  return (
    <nav className="shadow-xl p-2 flex justify-center gap-5 items-center bg-[#003f2062]">
      <img
        src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA5L2pvYjE4OTVkZXNpZ24tb25vZmZpY29ubWF4aW1pemUtcGwtZWxlbWVudC0wMDMtYS5wbmc.png"
        alt=""
        className="w-20"
      />
      <h1 className="text-4xl italic font-bold">Movie App</h1>
    </nav>
  );
};
