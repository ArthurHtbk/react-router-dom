import { useLoaderData } from "react-router-dom";

import Card from "../components/Card";
import Pages from "../components/Pages";

function Characters() {
  const { data } = useLoaderData();
  console.log(data);
  const { info, results } = data;
  console.log("info: ", info, "results: ", results);

  return (
    <>
      <h1>Characters</h1>
      <div className="card">
        {results.map((element) => (
          <Card key={element.id} data={element} type="character" />
        ))}
      </div>
      <Pages info={info} type="character" />
    </>
  );
}

export default Characters;
