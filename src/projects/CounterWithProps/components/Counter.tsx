interface Props {
    count: number;
}

const Counter = ({ count }: Props) => {
    return (
        <span className="border p-3 m-3" style={{ minWidth: 100, minHeight: 100 }}>{count}</span>
    )
}

export default Counter;