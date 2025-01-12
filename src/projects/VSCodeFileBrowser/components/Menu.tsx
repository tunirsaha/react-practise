import React, { Fragment, useState } from 'react'
import { BsXCircleFill } from 'react-icons/bs';

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
    position: number[]
    dismissMenu: () => void
    submitMenu: (addType: string, addName: string) => void
}

const Menu = ({ position, dismissMenu, submitMenu }: Props) => {
    const [addType, setAddType] = useState('');
    const [inputText, setInputText] = useState('');
    const handleFolderClick = () => setAddType('folder');
    const handleFileClick = () => setAddType('file');
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => setInputText(event.target.value)

    return (
        <div className="position-fixed d-flex flex-column" style={{ ...menuBarStyles, top: position[0]-25, left: position[1]+20 }}>
            <div className="position-relative">
                <span onClick={dismissMenu} className="position-absolute cursor-pointer" style={{ top: 0, right: 3 }}>
                    <BsXCircleFill />
                </span>
                {!addType &&
                    <ul className="list-unstyled">
                        <li onClick={handleFolderClick}>Add Folder</li>
                        <li onClick={handleFileClick}>Add File</li>
                    </ul>
                }
                {addType &&
                    <Fragment>
                        <div className="mb-2">Creating a {addType}</div>
                        <input onChange={handleInput} />
                        <button onClick={() => submitMenu(addType, inputText)} className="btn btn-sm btn-success mt-3">Create</button>
                    </Fragment>
                }
            </div >
        </div >
    )
}

export default Menu
