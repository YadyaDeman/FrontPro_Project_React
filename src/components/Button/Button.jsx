import "./styles.css";

function Button({ name, type = "button", onButtonClick }) {
  return (
    <button className="button-component" type={type} onClick={onButtonClick}>
      {name}
    </button>
  );
}

export default Button;

/*3 lekziya knopki primary i secondary 
function Button({ buttonName = "Get data", isPrimaryButton}) {
  1 вариант
  const buttonClass = isPrimaryButton
    ? "main-button primary-button"
    : "main-button secondary-button"; 

  // 2 вариант
  const buttonClass = `main-button ${
    isPrimaryButton ? "primary-button" : "secondary-button"
  }`;

  return <button className={buttonClass}>{buttonName}</button>;
}
export default Button;


2 lekziya knopki 
function Button() {
  const sendButtonName = "Send";
  const getButtonName = "Get";
  const isGetButton = false;
  return (
    <button className="main-button">
      {isGetButton ? getButtonName : sendButtonName} data
    </button>
  );
}*/
