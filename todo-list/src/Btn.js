export const Btn = ({ parentCb }) => {
    return (
        <button className="btn btn-success" onClick={(ev) => parentCb(ev)}>Submit</button>
    )
}

export default Btn;