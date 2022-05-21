import React, { useState } from "react";

export function NewRoomForm(props) {
    const [name, setName] = useState('');
    const [area, setArea] = useState(undefined);

    const handleAreaInput = (e) => {
        const int = parseInt(e.target.value);
        setArea(int >= 0 ? int : '');
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (name && area) {
            props.addNewRoom({ name, area });
            setName('');
            setArea('');
        } else {
            return null;
        }
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <h4>Add new room</h4>
                <input
                    type='text'
                    placeholder='Room name'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input
                    type='number'
                    placeholder='Room area'
                    onChange={handleAreaInput}
                    value={area}
                />
                <button type='submit'>Add Room</button>
            </form>
        </div>
    )
}