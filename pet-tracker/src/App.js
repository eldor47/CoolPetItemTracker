import './App.css';


import React, { useState, useEffect } from "react";

import expectedRarity from './expectedRarity.json'

function App() {
  const [petId, setPet] = useState(8967);
  const [allPetActivity, setAllPetActivity] = useState([]);
  const [petActivity, setPetActivity] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if(petId) {
      fetch(
        `https://prod.coolcatsapi2.com/pet-activity?limit=500&petTokenId=${petId}`,
        {
          method: "GET"
        }
      )
        .then(res => res.json())
        .then(response => {
          if(response.data) {
            setPetActivity(response.data);
            setIsLoading(false);
            setAllPetActivity(response.data);
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

  const content = petActivity.map((item, key) =>
      <div
        className={'activityItem ' + item.type}
        key={key}
      >
        <h3>{item.type === 'quest' ? item.title : item.item}</h3>
        {item.type === 'quest' ? 
        <img className='im' src={item.icon}></img> : 
        <img className='im' src={`https://metadata.coolcatsnft.com/item/image/${item.itemTokenId}.png`}></img>}
        <p>{(new Date(item.timestamp)).toDateString() + ' ' + (new Date(item.timestamp)).toLocaleTimeString()}</p>
        <p>{item.type === 'petInteraction' ? ('Expected Item Rarity: ' +  expectedRarity[item.itemTokenId + ''].rarity) : ''}</p>
        <p>{item.type === 'petInteraction' ? ('Expected Item Type: ' +  expectedRarity[item.itemTokenId + ''].type) : ''}</p>
      </div>
    );

  return (
    <div className="App">
      {isLoading ? <p>Loading...</p> :
      <div>
        <div className='search-header'>
          <h1>Search for Cool Pet 😸</h1>
          <h3>Pet ID: {petId}</h3>
          <input type='search' placeholder='Pet ID' onChange={e => setPet(e.target.value)}></input>
          <button onClick={e => setPetActivity(allPetActivity.filter(e => e.type === 'petInteraction'))}>Items</button>
          <button onClick={e => setPetActivity(allPetActivity.filter(e => e.type === 'quest'))}>Quests</button>
          <button onClick={e => setPetActivity(allPetActivity)}>All</button>
          <p>This tool is used to search for your pets quests and items used. If we are able to visually see this information then we can understand how they affect pet growth. We can predict which items need to be used to get the type that we want. I built a rarity list from some api calls that you can read more about in this twitter post. I match up these rarity values to the 50 items that exist so far.</p>
          <a href='https://twitter.com/eldor4747/status/1514835063782862849?s=20&t=19WsG-MjZ_AJbnFO5OMYcQ'>My tweet</a>
          <p>eldor.eth -- if you wanna donate 😊</p>
        </div>
        <div className='activityHolder'>
          {content}
        </div>
      </div>}
    </div>
  );
}

export default App;
