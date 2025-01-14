import { MenuItem } from '../models/menu.model';
import Item from './Item';

interface Props {
    directory: MenuItem[];
    selectedNode: (s: string, n: number[]) => void;
}

const View = ({ directory, selectedNode }: Props) => {
    return (
        <div>
            {directory.length > 0 &&
                directory.map((i: MenuItem) => (
                    <div key={i.id} className="position-relative">
                        <Item data={i} itemClick={selectedNode} />
                        <div className="ms-3">
                            {i.children && i.children.length > 0 && (
                                <View directory={i.children} selectedNode={selectedNode} />
                            )}
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default View;
