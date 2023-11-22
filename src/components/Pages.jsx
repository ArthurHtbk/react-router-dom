import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { usePageNumber } from "../contexts/PagesContext";
import { handlePreviousPage, handleNextPage } from "../services/utils";

function Pages({ info }) {
  const {
    charactersPageNumber,
    setCharactersPageNumber,
    episodesPageNumber,
    setEpisodesPageNumber,
    locationsPagesNumber,
    setLocationsPagesNumber,
  } = usePageNumber();

  const [type, setType] = useState("");

  const { pathname } = useLocation();

  useEffect(() => {
    setType(pathname.replace("/", ""));
  }, [pathname]);

  return (
    <div className="pages">
      {info.previous && (
        <button
          type="button"
          onClick={() => {
            type === "characters"
              ? handlePreviousPage(
                  charactersPageNumber,
                  setCharactersPageNumber
                )
              : type === "episodes"
              ? handlePreviousPage(episodesPageNumber, setEpisodesPageNumber)
              : handlePreviousPage(
                  locationsPagesNumber,
                  setLocationsPagesNumber
                );
          }}
        >
          Previous
        </button>
      )}
      <p>
        {type === "characters"
          ? charactersPageNumber
          : type === "episodes"
          ? episodesPageNumber
          : locationsPagesNumber}
      </p>
      {info.next && (
        <button
          type="button"
          onClick={() => {
            type === "characters"
              ? handleNextPage(charactersPageNumber, setCharactersPageNumber)
              : type === "episodes"
              ? handleNextPage(episodesPageNumber, setEpisodesPageNumber)
              : handleNextPage(locationsPagesNumber, setLocationsPagesNumber);
          }}
        >
          Next
        </button>
      )}
    </div>
  );
}

export default Pages;
