import React from "react";
import HeaderOption from "./HeaderOption";
import {
  SearchIcon,
  PhotographIcon,
  NewspaperIcon,
  LocationMarkerIcon,
  BookOpenIcon,
  DotsVerticalIcon,
} from "@heroicons/react/outline";

function HeaderOptions() {
  return (
    <div className="flex w-full text-gray-600 justify-evenly text-sm lg:text-sm lg:justify-start lg:space-x-36 lg:pl-44 border-b">
      {/* Left */}
      <div className="flex space-x-6">
        <HeaderOption Icon={SearchIcon} title="All" selected />
        <HeaderOption Icon={PhotographIcon} title="Images" />
        <HeaderOption Icon={NewspaperIcon} title="News" />
        <HeaderOption Icon={LocationMarkerIcon} title="Maps" />
        <HeaderOption Icon={BookOpenIcon} title="Books" />
        <HeaderOption Icon={DotsVerticalIcon} title="More" />
      </div>

      {/* Right */}
      <div className="rounded-sm ring-gray-300 text-sm text-gray-600 hover:ring-1 hover:cursor-pointer hover:shadow-md">
        <p className="mt-1 px-3">Tools</p>
      </div>
    </div>
  );
}

export default HeaderOptions;
