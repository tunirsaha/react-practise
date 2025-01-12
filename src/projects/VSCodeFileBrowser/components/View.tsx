import React from 'react'
import { BsFillFileTextFill, BsFillFolderFill } from "react-icons/bs";
import { MenuItem } from '../models/menu.model';

interface Props {
    directory: MenuItem[];
    itemClicked: (id: string, e: React.MouseEvent) => void;
}

const View = ({ directory, itemClicked }: Props) => {

    return (
        <div>
            {
                directory
                && directory.length > 0
                && directory.map((i: MenuItem) =>
                    <div key={i.id}  >
                        <div className="d-flex align-items-center">
                            <span className="me-1">
                                {
                                    i.children
                                        ? <BsFillFolderFill />
                                        : <BsFillFileTextFill />
                                }
                            </span>
                            <span onClick={(event) => itemClicked(i.id, event)}>{i.name}</span>
                        </div>
                        <div className="ms-3">
                            {
                                i.children
                                && i.children.length > 0
                                && (<View directory={i.children} itemClicked={(e, x) => itemClicked(e, x)} />)
                            }
                        </div>
                    </div>
                )
            }
        </div >
    )
}

export default View
