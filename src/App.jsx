import { Link, Outlet } from "react-router-dom";
import { PagesProvider } from "./contexts/PagesContext";
import "./App.css";

function App() {
  return (
    <PagesProvider>
      <nav>
        <Link to="/">Home </Link>
        <Link to="/characters">Characters </Link>
        <Link to="/locations">Locations </Link>
        <Link to="/episodes">Episodes </Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </PagesProvider>
  );
}

export default App;
