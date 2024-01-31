const Increment = ({ updateCount }) => {
    return (
        <button className="btn btn-success" onClick={() => updateCount(1)}>+</button>
    )
}

export default Increment;