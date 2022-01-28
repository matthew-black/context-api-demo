import { useContext, useEffect } from "react";
import { GlobalContext } from "./globalContext";

function FruitList() {
  const { fruits, fetchFruits } = useContext(GlobalContext);

  useEffect(() => {
    fetchFruits();
  }, [])

  return (
    <>
      <ul>
        {fruits.map((fruit, i) => (
          <li key={fruit+i}>
            {fruit}
          </li>
        ))}
      </ul>
    </>
  )
}

export default FruitList;