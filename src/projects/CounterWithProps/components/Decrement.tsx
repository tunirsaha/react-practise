interface Props {
    decrement: () => void
}
const Decrement = ({ decrement }: Props) => {
    return (
        <button className="btn btn-danger" onClick={decrement}>-</button>
    )
}

export default Decrement;