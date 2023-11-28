import React from "react";

// NavBar component represents the navigation bar of the Movie App
export const NavBar = () => {
  return (
    // Navigation bar container with styling
    <nav className="shadow-xl p-2 flex justify-center gap-5 items-center bg-[#003f2062]">
      {/* Logo of the Movie App */}
      <img
        src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA5L2pvYjE4OTVkZXNpZ24tb25vZmZpY29ubWF4aW1pemUtcGwtZWxlbWVudC0wMDMtYS5wbmc.png"
        alt=""
        className="w-20"
      />
      {/* Title of the Movie App */}
      <h1 className="text-4xl italic font-bold">Movie App</h1>
    </nav>
  );
};
