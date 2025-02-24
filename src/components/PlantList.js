import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, updatePlantPrice, removePlant }) {
  return (
    <ul className="plant-list">
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          updatePlantPrice={updatePlantPrice}
          removePlant={removePlant}
        />
      ))}
    </ul>
  );
}

export default PlantList;
