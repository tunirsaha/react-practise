import { useState } from 'react';
import { ASSETS } from '../models/asset.model';
import AssetCreateForm from './AssetCreateForm';
import Close from './Close';
import AssetTypeSelector from './AssetTypeSelector';

const menuBarStyles = {
    border: "1px solid #cacaca",
    backgroundColor: "#fafafa",
    padding: "10px",
    zIndex: "1",
    borderRadius: "4px",
    fontSize: "0.8em",
    width: "200px"
}

interface Props {
    dismissMenu: () => void
    position: number[]
    submitMenu: (addType: typeof ASSETS[keyof typeof ASSETS], addName: string) => void
}

const AssetCreateMenu = ({ dismissMenu, submitMenu, position }: Props) => {

    const [addType, setAddType] = useState<typeof ASSETS[keyof typeof ASSETS] | ''>('');

    return (
        <div className="position-fixed d-flex flex-column" style={{ ...menuBarStyles, top: position[1], left: position[0] + 35 }}>
            <div className="position-relative">
                <Close cancel={dismissMenu} position={[0, 3]} />
                {!addType && <AssetTypeSelector assetTypeSelected={setAddType} />}
                {addType && <AssetCreateForm assetType={addType as typeof ASSETS[keyof typeof ASSETS]} submitInputForm={submitMenu} />}
            </div >
        </div >
    )
}

export default AssetCreateMenu
