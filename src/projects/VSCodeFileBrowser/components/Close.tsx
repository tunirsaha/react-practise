import React from 'react'
import { BsXCircleFill } from 'react-icons/bs'

interface Props {
    position: number[]
    cancel: () => void
}
const Close = ({ cancel, position }: Props) => {
    return (
        <span onClick={cancel} className="position-absolute cursor-pointer" style={{ top: position[0], right: position[1] }}>
            <BsXCircleFill />
        </span>
    )
}

export default Close
