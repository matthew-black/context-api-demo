import { useContext, useState } from 'react';
import { GlobalContext } from './context';
import AddItem from './AddItem';
import ShoppingList from './ShoppingList';

function App() {
  const { setName } = useContext(GlobalContext);
  const [nameInput, setNameInput] = useState('');

  return (
    <div>
      <ShoppingList />

      <input
        value={nameInput}
        onChange={e => setNameInput(e.target.value)}
      />
      <button onClick={() => setName(nameInput)} >
        Update Name
      </button>

      <AddItem />
    </div>
  );
}

export default App;
