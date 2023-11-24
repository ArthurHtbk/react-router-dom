import { useLoaderData } from "react-router-dom";

import Card from "../components/Card";
import Pages from "../components/Pages";

function Locations() {
  const { data } = useLoaderData();
  const { info, results } = data;
  console.log("info: ", info, "results: ", results);

  return (
    <>
      <h1>Locations</h1>
      <div className="card">
        {results.map((element) => (
          <Card key={element.id} data={element} type="location" />
        ))}
      </div>
      <Pages info={info} />
    </>
  );
}

export default Locations;
