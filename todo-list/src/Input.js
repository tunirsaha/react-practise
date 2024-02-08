import { useEffect, useState, useRef } from 'react';

const Input = ({ parentCb, list }) => {

    const inputRef = useRef();
    // const [elem, setElem] = useState({})

    const handleInput = (el) => {
        //     setElem({ el.target.value })
        parentCb(el.target.value)
    }

    useEffect(() => {
        inputRef.target.value = '';
    }, [list])

    return (
        <>
            <label htmlFor="ip" style={{ minWidth: 100 }}>Enter Item:</label>
            <input id="ip" ref={inputRef} type="text" className="me-3 form-control d-inline-block" onChange={(e) => handleInput(e)} />
        </>
    )
}

export default Input;