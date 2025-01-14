import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Menu from './components/Menu'
import View from './components/View'
import { ASSETS } from './models/asset.model'
import { MenuItem } from './models/menu.model'
import { recursiveInsert } from './utils/main.util'

const VSCodeFileBrowser = () => {
    const [directory, setDirectory] = useState<MenuItem[]>([{
        id: uuidv4(),
        name: "home",
        isFolder: true,
        children: []
    }])
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [selectedId, setSelectedId] = useState<string>('');
    const [clickPosition, setClickPosition] = useState<number[]>([0, 0]);

    const handleDismissMenu = () => setShowMenu(false)
    const handleSubmitMenu = (assetType: string, assetName: string) => {
        setShowMenu(false);
        const _obj: MenuItem = {
            id: uuidv4(),
            isFolder: assetType === ASSETS.FOLDER,
            name: assetName,
            children: []
        }
        let _updatedDirectory: MenuItem[] = recursiveInsert(directory, _obj, selectedId)
        setDirectory(_updatedDirectory)
        setSelectedId('');
    }
    const handleNodeClick = (id: string, position: number[]) => {
        setShowMenu(false);
        setSelectedId(id);
        setClickPosition(position);
        setShowMenu(true);
    }

    return (
        <div className="position-relative">
            <h3>VS Code File Browser</h3>
            <p>Click on Home to start creating the directory tree</p>
            {showMenu && <Menu position={clickPosition} dismissMenu={handleDismissMenu} submitMenu={handleSubmitMenu} />}
            <View selectedNode={handleNodeClick} directory={directory} />
        </div>
    )
}

export default VSCodeFileBrowser

