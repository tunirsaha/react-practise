import React from 'react'
import { ASSETS } from '../models/asset.model';

interface Props {
    assetTypeSelected: (e: typeof ASSETS[keyof typeof ASSETS]) => void
}
const AssetTypeSelector = ({ assetTypeSelected }: Props) => {
    const handleAssetClick = (e: React.MouseEvent) => {
        const clickedItem = e.target as HTMLElement;
        assetTypeSelected(clickedItem?.dataset?.name as typeof ASSETS[keyof typeof ASSETS])
    }
    return (
        <ul className="list-unstyled" onClick={handleAssetClick}>
            <li data-name={ASSETS.FOLDER}>Add {ASSETS.FOLDER}</li>
            <li data-name={ASSETS.FILE}>Add {ASSETS.FILE}</li>
        </ul>
    )
}

export default AssetTypeSelector
