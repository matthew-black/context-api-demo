import { useContext } from "react";
import { GlobalContext } from "./context";

function ShoppingList() {
    const { shoppingList, name } = useContext(GlobalContext);

    return (
        <>
            <h2>{name}'s Shopping List</h2>
            <ul>
                {shoppingList.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </>
    )
}

export default ShoppingList;