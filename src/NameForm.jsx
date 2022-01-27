import { useContext, useState } from 'react';
import { GlobalContext } from './context';

function NameForm() {
    const { setName } = useContext(GlobalContext);
    const [nameInput, setNameInput] = useState('');

    const onUpdateName = () => {
        // Update the global `name` state
        setName(nameInput);

        // Clear the form
        setNameInput('');
    }

    return (
        <>
            <input
                value={nameInput}
                onChange={e => setNameInput(e.target.value)}
            />
            <button onClick={onUpdateName} >
                Update Name
            </button>
        </>
    )
}

export default NameForm;