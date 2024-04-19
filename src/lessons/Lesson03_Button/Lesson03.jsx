import "./styles.css";
import Button from "../../components/Button/Button";

function Lesson03() {
  const isPrimaryButton = false;
  return (
    <div className="buttons-container">
      <Button isPrimaryButton />
      <Button buttonName="Get" isPrimaryButton={isPrimaryButton}/>
    </div>
  );
}

export default Lesson03;
