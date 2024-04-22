import "./styles.css";
/*import {lionData, zebraData, hippoData, giraffeData} from "./data";*/
import { animalsData } from "./data";
import AnimalCard from "../../components/AnimalCard/AnimalCard";
import { v4 } from "uuid";


function Lesson05(){
    {/* 1 variant
   return <div className="lesson05-container">
    <AnimalCard animalData={lionData} />
    <AnimalCard animalData={zebraData} />
    <AnimalCard animalData={hippoData} />
    <AnimalCard animalData={giraffeData} />
</div>;*/}

   
 // массив компонентов
   const animalCards = animalsData.map((animalData) => { // каждую итерацию бцдет возвращать объект с данными определенного животного
    return <AnimalCard key={v4()} animalData={animalData} />;
  });

  return (
    <div className="lesson05-container">
      {/* Zamenyaem id na avtomaticheskiy v4
      <AnimalCard animalData={animalData[0]} />
      <AnimalCard animalData={animalData[1]} />
      <AnimalCard animalData={animalData[2]} />
      <AnimalCard animalData={animalData[3]} /> */}
      {animalCards}
    </div>
  );
}

export default Lesson05;