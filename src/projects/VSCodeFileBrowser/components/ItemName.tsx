import React from 'react'

interface Props {
    name: string
}
const ItemName = ({ name }: Props) => {
    return <span>{name}</span>
}

export default ItemName
