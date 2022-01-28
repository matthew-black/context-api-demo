import { useContext, useState } from "react";
import { GlobalContext } from "./globalContext";

function AddFruit() {
  const [fruit, setFruit] = useState('');
  const { createFruit } = useContext(GlobalContext);

  const onAddFruit = (e) => {
    e.preventDefault();

    createFruit(fruit);

    setFruit('');
  }

  return (
    <>
      <form onSubmit={onAddFruit}>
        <label>Add Fruit</label>
        <input
          value={fruit}
          onChange={(e) => setFruit(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </>
  )
}

export default AddFruit;