import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { usePageNumber } from "../contexts/PagesContext";
import {
  getCurrentPageNumber,
  getPreviousPageNumber,
  getNextPageNumber,
} from "../services/utils";

function Pages({ info }) {
  const {
    charactersPageNumber,
    setCharactersPageNumber,
    episodesPageNumber,
    setEpisodesPageNumber,
    locationsPageNumber,
    setLocationsPageNumber,
  } = usePageNumber();

  const [type, setType] = useState("");
  const [pageNumber, setPageNumber] = useState();

  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const pathInfo = pathname.split("/");
    setType(pathInfo[1]);
    setPageNumber(parseInt(pathInfo[2]));
  }, [pathname]);

  return (
    <div className="pages">
      {info.prev && (
        <button
          type="button"
          onClick={() => {
            navigate(`/${type}/${pageNumber - 1}`);
          }}
        >
          Previous
        </button>
      )}
      <p>{pageNumber}</p>
      {info.next && (
        <button
          type="button"
          onClick={() => {
            navigate(`/${type}/${pageNumber + 1}`);
          }}
        >
          Next
        </button>
      )}
    </div>
  );
}

export default Pages;
