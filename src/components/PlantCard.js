import React, { useState } from "react";

function PlantCard({ plant, plants, setPlants }) {
  const [ inStock, setInStock ] = useState(true)
  const [ price, setPrice ] = useState(0.0)
  function handleUpdate(e){
    e.preventDefault();
    let updatedPlant = {
      ...plant, price: parseFloat(price)
    }
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedPlant)
    })
    .then(r => r.json())
    .then(uPlant => {
      const newArr = plants.map((p)=> {
        if (p.id === uPlant.id){
          return uPlant
        } else {
          return p
        }
      })
      setPlants(newArr)
      setPrice(0.0)
    })
  }

  function handleDelete(){
    fetch(`http://localhost:6001/plants/${plant.id}`,{
      method: 'DELETE'
    })
    const newArr = plants.filter((p)=>{
      if (p.id !== plant.id){
        return p
      }
    })
    setPlants(newArr)
  }

  return (
    <li className="card">
      <button onClick={handleDelete} type="submit">X</button>
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <form onSubmit={handleUpdate}>
        <input onChange={(e) => setPrice(e.target.value)} value={price} type="number" name="price"></input>
        <button type="submit">Update Price</button>
      </form>
      {inStock ? (
        <button className="primary" onClick={()=> setInStock(!inStock)}>In Stock</button>
      ) : (
        <button onClick={()=> setInStock(!inStock)}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
