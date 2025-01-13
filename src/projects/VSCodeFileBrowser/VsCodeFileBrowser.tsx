import React, { useState } from 'react'
import View from './components/View'
import Menu from './components/Menu'
import { v4 as uuidv4 } from 'uuid'
import { MenuItem } from './models/menu.model'

const VSCodeFileBrowser = () => {
    const [directory, setDirectory] = useState([{
        id: uuidv4(),
        name: "home",
        icon: "",
        children: []
    }])
    const [mouseCoords, setMouseCoords] = useState([0, 0])
    const [showMenu, setShowMenu] = useState(false)
    const [activeMenuId, setActiveMenuId] = useState('')
    const handleMenuClose = () => { setShowMenu(false) }
    const handleClickOnDirectory = (id: string, event: React.MouseEvent) => {
        setActiveMenuId(id);
        setShowMenu(false);
        setMouseCoords([event.clientX, event.clientY]);
        setShowMenu(true);
    }

    const recursiveInsert = (menuTree: MenuItem[], partialMenuTree: MenuItem, insertionNode: string): MenuItem[] => {
        console.log('directory', directory)
        const output: MenuItem[] = menuTree?.map(i => {
            if (i.id === insertionNode) {
                const _obj: MenuItem = partialMenuTree
                if (i.children) {
                    i.children.push(_obj)
                    i.children = i.children.sort((a, b) => a.name.localeCompare(b.name))
                } else {
                    menuTree.push(_obj)
                    menuTree = menuTree.sort((a, b) => a.name.localeCompare(b.name))
                }
            }
            else {
                i.children && recursiveInsert({ ...i.children }, { ...partialMenuTree }, insertionNode);
            }
            return i;
        })
        console.log('output', output)
        return output;
    }
    const handleMenuInput = (type: string, name: string) => {
        setShowMenu(false)
        const _obj: MenuItem = {
            id: uuidv4(),
            icon: '',
            name: name,
            children: []
        }
        if (type === 'file')
            _obj.children = null

        let _existingDirectory: MenuItem[] = directory
        let _updatedDirectory: MenuItem[] = recursiveInsert(_existingDirectory, _obj, activeMenuId)
        // setDirectory(_updatedDirectory)
    }

    return (
        <div className="position-relative">
            <h3>VS Code File Browser</h3>
            <p>Click on Home to start creating the directory tree</p>
            <View directory={directory} itemClicked={(e, x) => handleClickOnDirectory(e, x)} />
            {showMenu && <Menu position={mouseCoords} dismissMenu={handleMenuClose} submitMenu={handleMenuInput} />}
        </div>
    )
}

export default VSCodeFileBrowser
