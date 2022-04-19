import logo from './logo.svg';
import './App.css';

import './App.css';




import React, { useState, useEffect } from "react";

function App() {
  const [petId, setPet] = useState(8967);
  const [allPetActivity, setAllPetActivity] = useState([]);
  const [petActivity, setPetActivity] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(window.location)
    var id = window.location.href.split('/')[3]
    if(id) {
      fetch(
        `https://prod.coolcatsapi2.com/pet-activity?limit=500&petTokenId=${id}`,
        {
          method: "GET"
        }
      )
        .then(res => res.json())
        .then(response => {
          if(response) {
            setPetActivity(response);
            setIsLoading(false);
            setAllPetActivity(response);
            setIsLoading(false);
          } else {
            setPetActivity([]);
            setAllPetActivity([]);
            setIsLoading(false);
          }
        })
        .catch(error => console.log(error));
    }
  }, [petId]);

  return (
    <div id="test" className="App">
      {JSON.stringify(allPetActivity)}
    </div>
  );
}

export default App;
