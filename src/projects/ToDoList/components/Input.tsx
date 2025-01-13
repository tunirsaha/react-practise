import React, { Fragment, forwardRef } from 'react';

interface Props {
    inputValue: (e: string) => void
}
const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {

    const handleInput = (el: React.ChangeEvent<HTMLInputElement>) => {
        props.inputValue(el.target.value)
    }

    return (
        <Fragment>
            <label htmlFor="ip" style={{ minWidth: 100 }}>Enter Item:</label>
            <input id="ip" ref={ref} type="text" className="me-3 form-control d-inline-block" onChange={handleInput} />
        </Fragment>
    )
})

export default Input;