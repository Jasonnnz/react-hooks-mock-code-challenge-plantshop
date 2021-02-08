import React,{ useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [ plants, setPlants ] = useState([]);
  const [ query, setQuery ] = useState("");

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(r => r.json())
    .then(plantArr => {
      setPlants(plantArr)
    })
  }, [])

  function findPlant(e){
    setQuery(e.target.value)
  }

  const displayPlant = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(query.toLowerCase())
  })

  return (
    <main>
      <NewPlantForm plants={plants} setPlants={setPlants}/>
      <Search findPlant={findPlant} query={query}/>
      <PlantList plants={displayPlant} plantArr={plants} setPlants={setPlants}/>
    </main>
  );
}

export default PlantPage;
