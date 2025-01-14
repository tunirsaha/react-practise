import React from 'react'
import { BsFillFileTextFill, BsFillFolderFill } from 'react-icons/bs'

interface Props {
    isFolder: boolean
    className: string
}
const ItemIcon = ({ isFolder, className }: Props) => {
    return (
        <span className={className}>
            {
                isFolder
                    ? <BsFillFolderFill />
                    : <BsFillFileTextFill />
            }
        </span>
    )
}

export default ItemIcon
