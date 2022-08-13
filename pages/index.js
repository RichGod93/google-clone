/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Avatar from "../components/Avatar";
import Footer from "../components/Footer";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    // prevent the page from reloading when you click the button
    e.preventDefault();
    // Get the value from the input field
    const term = searchInputRef.current.value;
    // if there is no term, return nothing
    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
        <meta name="Google" content="Search all you want" />
        <link rel="icon" href="./favicon.png" />
      </Head>

      {/* Header */}
      <header className="flex w-full p-3 justify-end text-sm">
        {/* Right */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          {/* Icon */}
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

          {/* Avatar */}
          <Avatar url="https://bit.ly/3R4IHwz" />
        </div>
      </header>

      {/* Body */}
      <form className="flex flex-col items-center flex-grow w-4/5">
        <Image
          src="https://bit.ly/3AFBc9p"
          width={270}
          height={148}
          alt="google image"
        />

        <div
          className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 hover:border-gray-100
        focus-within:border-gray-100 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl"
        >
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow focus:outline-none"
          />
          <Image
            src="https://bit.ly/3Ppao1A"
            width={22}
            height={25}
            alt="Search by voice"
          />
        </div>

        <div className="flex flex-col w-1/2 space-y-2 sm:space-y-0 sm:space-x-3 justify-center sm:flex-row mt-8 ">
          <button onClick={search} className="btn">
            Google Search
          </button>
          <button onClick={search} className="btn">
            I'm Feeling Lucky
          </button>
        </div>
      </form>

      {/* Footer */}
      <Footer />
    </div>
  );
}
