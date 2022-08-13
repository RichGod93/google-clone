import React from "react";
import PaginationButtons from "./PaginationButtons";

function SearchResults({ results }) {
  return (
    <div className="mx-auto w-full px-3 sm:pl-[9%] md:pl-[16%] lg:pl-44">
      <p className="text-gray-500 text-md mb-5 mt-3 text-sm">
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>

      {results.items?.map((result) => (
        <div key={result.link} className="max-w-xl mb-8">
          <div className="group">
            <a href={result.link} className="text-sml">
              {result.formattedUrl}
            </a>
            <a href={result.link}>
              <h2 className="truncate text-xl text-blue-800 font-normal group-hover:underline">
                {result.title}
              </h2>
            </a>
          </div>

          <p className="line-clamp-2">{result.snippet}</p>
        </div>
      ))}

      <PaginationButtons />
    </div>
  );
}

export default SearchResults;
