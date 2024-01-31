const List = (props) => {
    return (
        <div className="mt-3 border bg-white p-3">
            <h2>{props.type}</h2>
            {
                props.list.map((el) => (
                    <div key={el.id} className="py-2 border-bottom d-flex justify-content-between" >
                        <span>{el.item}</span>
                        <button className={`btn btn-${el.status ? 'danger' : 'warning'}`} onClick={() => props.deleteOrReset(el.id)}>{el.status ? 'Done' : 'Undo'}</button>
                    </div>
                ))
            }
        </div >
    )
}

export default List;