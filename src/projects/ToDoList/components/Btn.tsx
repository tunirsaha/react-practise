interface Props {
    submitBtnClicked: () => void
}

export const Btn = ({ submitBtnClicked }: Props) => {
    return (
        <button className="btn btn-success" onClick={submitBtnClicked}>Submit</button>
    )
}

export default Btn;