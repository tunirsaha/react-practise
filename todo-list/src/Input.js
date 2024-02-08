import { useEffect, useRef } from 'react';

const Input = ({ parentCb, list }) => {

    const inputRef = useRef();

    const handleInput = (el) => {
        parentCb(el.target.value)
    }

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.value = "";
        }
    }, [list])

    return (
        <>
            <label htmlFor="ip" style={{ minWidth: 100 }}>Enter Item:</label>
            <input id="ip" ref={inputRef} type="text" className="me-3 form-control d-inline-block" onChange={(e) => handleInput(e)} />
        </>
    )
}

export default Input;