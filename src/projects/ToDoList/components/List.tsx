import { Item } from "../models/item.model";

interface Props {
    list: Item[];
    type: string;
    deleteOrReset: (id: string) => void
}
const List = ({ list, type, deleteOrReset }: Props) => {
    return (
        <div className="mt-3 border bg-white p-3">
            <h2>{type}</h2>
            {
                list.map((el: Item) => (
                    <div key={el.id} className="py-2 border-bottom d-flex justify-content-between" >
                        <span>{el.name}</span>
                        <button className={`btn btn-${el.status ? 'danger' : 'warning'}`} onClick={() => deleteOrReset(el.id)}>{el.status ? 'Done' : 'Undo'}</button>
                    </div>
                ))
            }
        </div >
    )
}

export default List;