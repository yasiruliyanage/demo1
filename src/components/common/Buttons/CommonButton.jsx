
 const CommonButton = ({buttonlabel,onBtnClick,btnValue,buttonClass}) => {

    return (
        <button className={`${buttonClass}`} value={btnValue} onClick={onBtnClick} > {buttonlabel} </button>
    );
}


export default CommonButton;