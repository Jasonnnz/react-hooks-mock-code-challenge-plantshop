import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, plantArr, setPlants}) {

  const plantsArr = plants.map((plant) => {
    return <PlantCard key={plant.id} plant={plant} plants={plantArr} setPlants={setPlants}/>
  })

  return (
    <ul className="cards">{plantsArr}</ul>
  );
}

export default PlantList;
