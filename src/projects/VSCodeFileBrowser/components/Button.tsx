import React from 'react'

interface Props {
    text: string
    buttonClicked: () => void
}
const Button = ({ text, buttonClicked }: Props) => {
    return (
        <button onClick={buttonClicked} className="btn btn-sm btn-success mt-3">{text}</button>
    )
}

export default Button
