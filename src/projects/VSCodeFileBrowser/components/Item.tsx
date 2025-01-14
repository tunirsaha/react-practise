import React from 'react'
import ItemIcon from './ItemIcon'
import ItemName from './ItemName'
import { MenuItem } from '../models/menu.model'
import { getXY } from '../utils/main.util'

interface Props {
    data: MenuItem
    itemClick: (id: string, position: number[]) => void
}
const Item = ({ data, itemClick }: Props) => {
    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => data?.isFolder ? itemClick(data.id, getXY(e)) : null;
    return (
        <div className="d-flex align-items-center" onClick={handleClick}>
            <ItemIcon isFolder={data?.isFolder} className="me-1" />
            {data?.name && <ItemName name={data?.name} />}
        </div>
    )
}

export default Item
