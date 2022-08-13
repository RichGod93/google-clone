import React, { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { SearchIcon, XIcon } from "@heroicons/react/solid";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term${term}`);
  };
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://bit.ly/3AFBc9p"
          height={53}
          width={95}
          onClick={() => router.push("/")}
          className="cursor-pointer"
          alt="google icon"
        />
        <form
          className="flex flex-grow px-5 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-md max-w-2xl items-center hover:shadow-lg focus-within:shadow-lg hover:border-gray-100
        focus-within:border-gray-100"
        >
          <input
            ref={searchInputRef}
            className="flex-grow w-full focus:outline-none"
            type="text"
          />
          {/* the onClick clears out the input in the text in the input area */}
          <XIcon
            className="h-7 sm:mr-3 text-gray-500 cursor-pointer sm:border-r-2 pr-4 border-gray-300"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <div className="mr-3 hidden sm:inline-flex">
            <Image
              src="https://bit.ly/3Ppao1A"
              width={27}
              height={30}
              alt="Search by voice"
            />
          </div>
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <Avatar className="ml-auto" url="https://bit.ly/3R4IHwz" />
      </div>

      {/* HeaderOptions */}
      <HeaderOptions />
    </header>
  );
}

export default Header;
