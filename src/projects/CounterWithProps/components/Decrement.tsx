interface Props {
    decrement: () => void
    count: number
}
const Decrement = ({ decrement, count }: Props) => {
    return (
        <button disabled={count == 0} className="btn btn-danger" onClick={decrement}>-</button>
    )
}

export default Decrement;