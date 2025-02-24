import React, { useState, useEffect } from "react";
import Search from "./Search";
import PlantList from "./PlantList";
import NewPlantForm from "./NewPlantForm";
import Header from "./Header"; 

function App() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <Header /> 
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <NewPlantForm setPlants={setPlants} />
      <PlantList plants={filteredPlants} />
    </div>
  );
}

export default App;
