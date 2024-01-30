const Input = ({ parentCb }) => {
    return (
        <div>
            <label htmlFor="ip">Enter Item</label>
            <input id="ip" type="text" onChange={(e) => parentCb(e.target.value)} />
        </div>
    )
}

export default Input;