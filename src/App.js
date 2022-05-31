import axios from 'axios';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [randomData, setRandomData] = useState({});

  useEffect(() => {
    axios
    .get("https://www.boredapi.com/api/activity")
    .then((res) => setRandomData(res.data));
  }, []);

  return (
    <div>
      <h1>BORED APP</h1>
      <h2>Bored?</h2>
      <h3>Discover which activity you could do, randomly by refreshing the web page</h3>
    <div className='random'>
         {randomData && Object.entries(randomData).map(([key, random]) => (
          <li key={key}>{random}</li>
        ))}
        </div>
    </div>
  );
};

export default App;