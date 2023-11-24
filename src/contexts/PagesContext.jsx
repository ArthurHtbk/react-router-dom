import { createContext, useState, useMemo, useContext } from "react";

const PagesContext = createContext();

export function PagesProvider({ children }) {
  const [charactersPageNumber, setCharactersPageNumber] = useState(1);
  const [episodesPageNumber, setEpisodesPageNumber] = useState(1);
  const [locationsPageNumber, setLocationsPageNumber] = useState(1);

  const value = useMemo(
    () => ({
      charactersPageNumber,
      setCharactersPageNumber,
      episodesPageNumber,
      setEpisodesPageNumber,
      locationsPageNumber,
      setLocationsPageNumber,
    }),
    [charactersPageNumber, episodesPageNumber, locationsPageNumber]
  );

  return (
    <PagesContext.Provider value={value}>{children}</PagesContext.Provider>
  );
}

export const usePageNumber = () => useContext(PagesContext);
