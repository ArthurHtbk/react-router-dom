import { Link, Outlet } from "react-router-dom";
import "./App.css";

import { PagesProvider } from "./contexts/PagesContext";

function App() {
  return (
    <PagesProvider>
      <nav>
        <Link to="/">Home </Link>
        <Link to="/characters/1">Characters </Link>
        <Link to="/locations/1">Locations </Link>
        <Link to="/episodes/1">Episodes </Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </PagesProvider>
  );
}

export default App;
