import React, { useState } from "react";

function PlantCard({ plant, updatePlantPrice, removePlant }) {
  const [isSoldOut, setIsSoldOut] = useState(false);
  const [price, setPrice] = useState(plant.price);

  function handleSoldOut() {
    setIsSoldOut((prev) => !prev);
  }

  function handleUpdatePrice(e) {
    const newPrice = parseFloat(e.target.value);
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price: newPrice }),
    })
      .then((res) => res.json())
      .then((updatedPlant) => {
        setPrice(updatedPlant.price);
        updatePlantPrice(plant.id, updatedPlant.price);
      });
  }

  function handleDelete() {
    fetch(`http://localhost:6001/plants/${plant.id}`, { method: "DELETE" })
      .then(() => removePlant(plant.id))
      .catch((error) => console.error("Error deleting plant:", error));
  }

  return (
    <li className="plant-card">
      <img src={plant.image} alt={plant.name} />
      <h3>{plant.name}</h3>
      <p>${price.toFixed(2)}</p>
      <button onClick={handleSoldOut} className={isSoldOut ? "sold-out" : ""}>
        {isSoldOut ? "Sold Out" : "Available"}
      </button>
      <input
        type="number"
        value={price}
        step="0.01"
        onChange={handleUpdatePrice}
      />
      <button onClick={handleDelete} className="delete-btn">
        Delete
      </button>
    </li>
  );
}

export default PlantCard;
