'use client'
import React, { useState, useEffect } from 'react';
import handler from '../components/Server__components/TransacHandler';
handler(10, 'brrr');
function Page() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('../../JsonData/TransacConfig.json')
      .then(response => response.json())
      .then(jsonData => {
            // console.log(jsonData);
            setData(jsonData)
        })
      .catch(error => console.error('Error fetching data:', error));  
  }, []);

  // Now you can use the 'data' state in your component
  return (
    <div>
      <h1>nothing</h1>
    </div>
  );
}

export default Page;
