const Decrement = ({ updateCount }) => {
    return (
        <button className="btn btn-danger" onClick={() => updateCount(-1)}>-</button>
    )
}

export default Decrement;