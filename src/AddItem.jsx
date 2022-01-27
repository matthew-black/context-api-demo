import { useContext, useState } from "react";
import { GlobalContext } from "./context";

function AddItem() {
    const [item, setItem] = useState('');
    const { shoppingList, setShoppingList } = useContext(GlobalContext);

    const onAddItem = (evt) => {
        evt.preventDefault();

        setShoppingList([...shoppingList, item]);
        setItem('');
    }

    return (
        <>
            <form onSubmit={onAddItem}>
                <label>Add item</label>
                <input
                    value={item}
                    onChange={e => setItem(e.target.value)}
                />
                <button>Submit</button>
            </form>
        </>
    )
}

export default AddItem;