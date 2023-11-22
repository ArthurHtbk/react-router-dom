import { useLoaderData } from "react-router-dom";

import Card from "../components/Card";
import Pages from "../components/Pages";

function Episodes() {
  const { data } = useLoaderData();
  const { info, results } = data;
  console.log("info: ", info, "results: ", results);

  return (
    <>
      <h1>Episodes</h1>
      <div className="card">
        {results.map((element) => (
          <Card key={element.id} data={element} type="episode" />
        ))}
      </div>
      <Pages info={info} type="episode" />
    </>
  );
}

export default Episodes;
