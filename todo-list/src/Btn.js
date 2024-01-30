export const Btn = ({ parentCb }) => {
    return (
        <div><button onClick={(ev) => parentCb(ev)}>Submit</button></div>
    )
}

export default Btn;