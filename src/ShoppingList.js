import { useContext } from "react";
import { GlobalContext } from "./context";

function ShoppingList() {
    const { shoppingList, fetchShoppingList, name } = useContext(GlobalContext);

    return (
        <>
            <h2>{name}'s Shopping List</h2>
            <ul>
                {shoppingList.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>

            <button onClick={fetchShoppingList}>
                Fetch Shopping List
            </button>
        </>
    )
}

export default ShoppingList;