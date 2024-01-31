import { useEffect } from 'react';

const Input = ({ parentCb, isToBeCleared }) => {

    const handleInput = (el) => {
        parentCb(el.target.value)
    }

    return (
        <>
            <label htmlFor="ip" style={{ minWidth: 100 }}>Enter Item:</label>
            <input id="ip" type="text" className="me-3 form-control d-inline-block" onChange={(e) => handleInput(e)} />
        </>
    )
}

export default Input;