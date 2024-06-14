import oprBtnIcon from '../../assets/img/operations.svg'

function OperationBtn() {
    return <>
        <button className='operation-btn'>
            <img src={oprBtnIcon} alt="" />
            Əməliyyatlar
        </button>
    </>
}

export default OperationBtn;