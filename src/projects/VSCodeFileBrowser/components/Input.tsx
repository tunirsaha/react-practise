import React from 'react'

interface Props {
    value: (e: string) => void
}
const Input = ({ value }: Props) => {
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => value(event.target.value)
    return <input className="form-control" onChange={handleInput}></input>
}

export default Input
