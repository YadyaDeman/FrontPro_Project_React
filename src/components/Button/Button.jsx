import "./styles.css";

//knopki 2 lekziya
function Button() {
  const sendButtonName = "Send";
  const getButtonName = "Get";
  const isGetButton = false;
  return (
    <button className="main-button">
      {isGetButton ? getButtonName : sendButtonName} data
    </button>
  );
}

export default Button;
