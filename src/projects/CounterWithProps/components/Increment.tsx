interface Props {
    increment: () => void
}

const Increment = ({ increment }: Props) => {
    return (
        <button className="btn btn-success" onClick={increment}>+</button>
    )
}

export default Increment;