import { MenuItem } from "../models/menu.model"

export const recursiveInsert = (menuTree: MenuItem[], partialMenuTree: MenuItem, insertionNode: string): MenuItem[] => {
    return menuTree?.map(i => {
        if (i.id === insertionNode) {
            if (i.children) {
                if (i.isFolder) {
                    return { ...i, children: [...i.children, partialMenuTree].sort((a, b) => a.name.localeCompare(b.name)) }
                } else {
                    // not able to insert a element adjacent to i
                }
            }
        }
        else {
            return { ...i, children: recursiveInsert(i.children, partialMenuTree, insertionNode) };
        }
        return { ...i };
    })
}

export const getXY = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const element = e.target as HTMLElement;
    const rect = element.getBoundingClientRect();
    const x = rect.left + window.scrollX;
    const y = rect.top + window.scrollY;
    return [x, y]
}